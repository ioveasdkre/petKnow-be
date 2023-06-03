import { Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { coverUrl, merchantID, respondType, version } from '../config/env';
import { CourseHierarchy, PlatformCoupons } from '../connections/mongoDB';
import { Level } from '../enums/courseHierarchy.enums';
import {
  ICheckCardCoursesReturn,
  ICheckCourse as ICheckCardCouponParameter,
  ICheckCourse as ICheckCourseResult,
  ICheckCourse as ICheckCourseParameter,
  IOrderParameter,
  ICheckCourseReturn,
} from '../types/service/goldFlow.type';

class GoldFlowService {
  async chenkCardCoursesAsync(courseIds: string[]) {
    const currentDate = new Date();

    const [courseHierarchy] = await CourseHierarchy.aggregate<ICheckCourseResult>([
      {
        $match: {
          $and: [
            { _id: { $in: courseIds.map(id => new Types.ObjectId(id)) } },
            { isPublished: true }, // 判斷已上架
          ],
        },
      },
      {
        $unwind: '$tagNames', // 展开 uniqueTagNames 字段
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: {
              $cond: [
                {
                  $eq: ['$isFree', true], // 判斷免費課程
                },
                0,
                {
                  $cond: [
                    {
                      $and: [
                        { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                        { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                      ],
                    },
                    '$discountPrice',
                    '$price',
                  ],
                },
              ],
            },
          },
          shoppingCart: {
            $push: {
              _id: '$_id',
              title: '$title',
              cover: { $concat: [coverUrl, '$cover'] },
              level: {
                $switch: {
                  branches: Object.entries(Level).map(([level, levelName]) => ({
                    case: { $eq: ['$level', parseInt(level)] },
                    then: levelName,
                  })),
                  default: null,
                },
              },
              time: { $round: [{ $divide: ['$totalTime', 3600] }, 1] },
              total: '$totalNumber',
              instructorName: { $arrayElemAt: ['$user.name', 0] },
              price: '$price',
              discountPrice: {
                $cond: [
                  {
                    $and: [
                      { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                      { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                    ],
                  },
                  '$discountPrice',
                  null,
                ],
              },
              isFree: '$isFree',
            },
          },
          uniqueTagNames: { $addToSet: '$tagNames' },
          courseIds: { $push: { $toString: '$_id' } },
        },
      },
      {
        $project: {
          _id: 0, // 排除 _id 欄位
          totalPrice: 1,
          shoppingCart: 1,
          uniqueTagNames: 1,
          courseIds: {
            $reduce: {
              input: '$courseIds',
              initialValue: '',
              in: {
                $concat: ['$$value', { $cond: [{ $eq: ['$$value', ''] }, '', ','] }, '$$this'],
              },
            },
          },
        },
      },
    ]);

    const youMightLike = await CourseHierarchy.aggregate([
      {
        $match: {
          $and: [
            { isPublished: true, isPopular: true }, // 判斷已 上架 且 為熱門課程
          ],
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $sample: { size: 10 }, // 隨機讀取10筆
      },
      {
        $project: {
          _id: '$_id',
          title: '$title',
          cover: { $concat: [coverUrl, '$cover'] },
          level: {
            $switch: {
              branches: Object.entries(Level).map(([level, levelName]) => ({
                case: { $eq: ['$level', parseInt(level)] },
                then: levelName,
              })),
              default: null,
            },
          },
          time: { $round: [{ $divide: ['$totalTime', 3600] }, 1] },
          total: '$totalNumber',
          instructorName: { $arrayElemAt: ['$user.name', 0] },
          price: '$price',
          discountPrice: {
            $cond: [
              {
                $and: [
                  { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                  { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                ],
              },
              '$discountPrice',
              null,
            ],
          },
          isFree: '$isFree',
        },
      },
    ]);

    return { courseHierarchy, youMightLike };
  }

  async checkCardCouponAsync(
    courseHierarchy: ICheckCardCouponParameter,
    couponCode: string,
  ): Promise<ICheckCardCoursesReturn> {
    const currentDate = new Date();

    const [platformCoupons] = await PlatformCoupons.aggregate([
      {
        $match: {
          $and: [
            { couponCode: couponCode },
            { tagNames: { $in: courseHierarchy.uniqueTagNames } },
            { isEnabled: true },
            { startDate: { $lte: currentDate } }, // 判斷開始時間小於等於當前時間
            { endDate: { $gte: currentDate } }, // 判斷結束時間大於等於當前時間
          ],
        },
      },
      {
        $project: {
          _id: 0,
          couponCode: '$couponCode',
          couponPrice: '$price',
        },
      },
      {
        $limit: 1,
      },
    ]);

    delete courseHierarchy.uniqueTagNames;

    if (!platformCoupons) return { ...courseHierarchy };

    courseHierarchy.discountedPrice = courseHierarchy.totalPrice - platformCoupons.couponPrice;

    return { ...courseHierarchy, ...platformCoupons };
  }

  async checkCoursesAsync(courseIds: string[]) {
    const currentDate = new Date();

    const [courseHierarchy] = await CourseHierarchy.aggregate<ICheckCourseResult>([
      {
        $match: {
          $and: [
            { _id: { $in: courseIds.map(id => new Types.ObjectId(id)) } },
            { isPublished: true }, // 判斷已上架
          ],
        },
      },
      {
        $unwind: '$tagNames', // 展开 uniqueTagNames 字段
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: {
              $cond: [
                {
                  $eq: ['$isFree', true], // 判斷免費課程
                },
                0,
                {
                  $cond: [
                    {
                      $and: [
                        { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                        { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                      ],
                    },
                    '$discountPrice',
                    '$price',
                  ],
                },
              ],
            },
          },
          shoppingCart: {
            $push: {
              _id: '$_id',
              title: '$title',
              cover: { $concat: [coverUrl, '$cover'] },
              level: {
                $switch: {
                  branches: Object.entries(Level).map(([level, levelName]) => ({
                    case: { $eq: ['$level', parseInt(level)] },
                    then: levelName,
                  })),
                  default: null,
                },
              },
              time: { $round: [{ $divide: ['$totalTime', 3600] }, 1] },
              total: '$totalNumber',
              instructorName: { $arrayElemAt: ['$user.name', 0] },
              price: '$price',
              discountPrice: {
                $cond: [
                  {
                    $and: [
                      { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                      { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                    ],
                  },
                  '$discountPrice',
                  null,
                ],
              },
              isFree: '$isFree',
            },
          },
          uniqueTagNames: { $addToSet: '$tagNames' },
          courseIds: { $push: { $toString: '$_id' } },
        },
      },
      {
        $project: {
          _id: 0, // 排除 _id 欄位
          totalPrice: 1,
          shoppingCart: 1,
          uniqueTagNames: 1,
          courseIds: {
            $reduce: {
              input: '$courseIds',
              initialValue: '',
              in: {
                $concat: ['$$value', { $cond: [{ $eq: ['$$value', ''] }, '', ','] }, '$$this'],
              },
            },
          },
        },
      },
    ]);

    return courseHierarchy ? courseHierarchy : false;
  }

  async checkOrderAsync(
    courseHierarchy: ICheckCourseParameter,
    couponCode: string,
  ): Promise<ICheckCourseReturn> {
    const currentDate = new Date();

    const [platformCoupons] = await PlatformCoupons.aggregate([
      {
        $match: {
          $and: [
            { couponCode: couponCode },
            { tagNames: { $in: courseHierarchy.uniqueTagNames } },
            { isEnabled: true },
            { startDate: { $lte: currentDate } }, // 判斷開始時間小於等於當前時間
            { endDate: { $gte: currentDate } }, // 判斷結束時間大於等於當前時間
          ],
        },
      },
      {
        $project: {
          _id: 0,
          couponPrice: '$price',
        },
      },
      {
        $limit: 1,
      },
    ]);

    delete courseHierarchy.uniqueTagNames;
    const itemDesc = courseHierarchy.courseIds;

    if (!platformCoupons) {
      const amt = courseHierarchy.totalPrice;

      return { amt, itemDesc, ...courseHierarchy };
    }

    courseHierarchy.discountedPrice = courseHierarchy.totalPrice - platformCoupons.couponPrice;

    const amt = courseHierarchy.discountedPrice
      ? courseHierarchy.discountedPrice
      : courseHierarchy.totalPrice;

    return { amt, itemDesc, ...courseHierarchy, ...platformCoupons };
  }

  createOrderId(timeStamp: number): string {
    const uuid = uuidv4();
    const orderId = `${uuid}-${timeStamp}`;
    return orderId;
  }

  orderIdAesEncrypt(
    data: string,
    useKey: string,
    useIv: string,
    salt: string,
    algorithm: string = 'aes-256-cbc',
  ): string {
    const key = crypto.scryptSync(useKey, salt, 32); // 密钥
    const iv = Buffer.from(useIv, 'hex'); // 初始化向量
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(data, 'utf8', 'hex');

    return encrypted + cipher.final('hex');
  }

  orderIdAesDecrypt(encryptedData: string, useKey: string, useIv: string, salt: string): string {
    const key = crypto.scryptSync(useKey, salt, 32); // 密钥
    const iv = Buffer.from(useIv, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  //#region genDataChain [ 生成資料鏈串的函式，用於將訂單物件轉換成資料鏈串。 ]
  /**
   * 生成資料鏈串的函式，用於將訂單物件轉換成資料鏈串。
   * @param order 訂單物件
   * @returns 轉換後的資料鏈串
   */
  genDataChain(order: IOrderParameter) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    return `MerchantID=${merchantID}&RespondType=${respondType}&TimeStamp=${
      order.TimeStamp
    }&Version=${version}&MerchantOrderNo=${order.MerchantOrderNo}&Amt=${
      order.Amt
    }&ItemDesc=${encodeURIComponent(order.ItemDesc)}&Email=${encodeURIComponent(order.Email)}`;
  }
  //#endregion genDataChain [ 生成資料鏈串的函式，用於將訂單物件轉換成資料鏈串。 ]

  //#region createMpgAesEncrypt [ 建立 MpgAesEncrypt，用於對交易資訊進行 AES 加密。 ]
  /**
   * 建立 MpgAesEncrypt，用於對交易資訊進行 AES 加密。
   * @param TradeInfo 交易資訊物件
   * @returns AES 加密後的結果
   */
  createMpgAesEncrypt(
    TradeInfo: IOrderParameter,
    useKey: string,
    useIv: string,
    algorithm: string = 'aes-256-cbc',
  ) {
    // 對應文件 P17：使用 aes 加密
    // $edata1=bin2hex(openssl_encrypt($data1, "AES-256-CBC", $key, OPENSSL_RAW_DATA, $iv));

    // 使用指定的 hashKey 和 hashIv 建立加密器
    const encrypt = crypto.createCipheriv(algorithm, useKey, useIv);

    // 使用 UTF-8 編碼將交易資訊轉換為字串後進行加密，並將結果轉換為十六進位表示
    const enc = encrypt.update(this.genDataChain(TradeInfo), 'utf8', 'hex');

    // 完成加密，並將最終結果轉換為十六進位表示
    return enc + encrypt.final('hex');
  }
  //#endregion createMpgAesEncrypt [ 建立 MpgAesEncrypt，用於對交易資訊進行 AES 加密。 ]

  //#region createMpgShaEncrypt [ 建立 MpgShaEncrypt，用於對 AES 加密結果進行 SHA-256 雜湊加密。 ]
  /**
   * 建立 MpgShaEncrypt，用於對 AES 加密結果進行 SHA-256 雜湊加密。
   * @param aesEncrypt AES 加密結果
   * @returns SHA-256 雜湊加密後的結果
   */
  createMpgShaEncrypt(aesEncrypt: string, useKey: string, useIv: string) {
    // 對應文件 P18：使用 sha256 加密
    // $hashs="HashKey=".$key."&".$edata1."&HashIV=".$iv;

    // 建立 SHA-256 雜湊加密器
    const sha = crypto.createHash('sha256');

    // 準備進行雜湊加密的明文，格式為 "HashKey=xxx&AesEncrypt=xxx&HashIV=xxx"
    const plainText = `HashKey=${useKey}&${aesEncrypt}&HashIV=${useIv}`;

    // 使用 SHA-256 雜湊加密器對明文進行雜湊運算，並將結果轉換為十六進位表示，最後轉換為大寫字母
    return sha.update(plainText).digest('hex').toUpperCase();
  }
  //#endregion createMpgShaEncrypt [ 建立 MpgShaEncrypt，用於對 AES 加密結果進行 SHA-256 雜湊加密。 ]

  //#region createMpgAesDecrypt [ 建立 MpgAesDecrypt，用於對交易資訊進行 AES 解密。 ]
  /**
   * 建立 MpgAesDecrypt，用於對交易資訊進行 AES 解密。
   * @param TradeInfo AES 加密後的交易資訊
   * @returns 解密後的交易資訊，以 JSON 格式返回
   * @throws 如果 HashKey 或 HashIV 為空，則拋出錯誤
   */
  createMpgAesDecrypt(
    TradeInfo: string,
    useKey: string,
    useIv: string,
    algorithm: string = 'aes-256-cbc',
  ) {
    // 使用 AES-256-CBC 演算法建立解密器
    const decrypt = crypto.createDecipheriv(algorithm, useKey, useIv);

    // 取消自動填充，因為交易資訊可能沒有填滿區塊大小
    decrypt.setAutoPadding(false);

    // 對加密後的交易資訊進行解密，結果以 UTF-8 格式返回
    const text = decrypt.update(TradeInfo, 'hex', 'utf8');
    const plainText = text + decrypt.final('utf8');

    // 移除明文中的控制字元和空格
    const result = plainText.replace(/[\x00-\x20]+/g, '');

    // 解析 JSON 格式的交易資訊並返回
    return JSON.parse(result);
  }
  //#endregion createMpgAesDecrypt [ 建立 MpgAesDecrypt，用於對交易資訊進行 AES 解密。 ]
}

export { GoldFlowService };
