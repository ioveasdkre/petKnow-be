import { Types } from 'mongoose';
import crypto from 'crypto';
import {
  coverUrl,
  merchantID,
  respondType,
  version,
  algorithm,
  goldFlowHashKey,
  goldFlowHashIv,
} from '../config/env';
import { CourseHierarchy, PlatformCoupons } from '../connections/mongoDB';
import { Level } from '../enums/courseHierarchy.enums';
import { ICheckCourseResult, IOrderParameter } from '../types/service/goldFlow.type';

class GoldFlowService {
  async postCardAsync(courseIds: string[]) {
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
        },
      },
      {
        $project: {
          _id: 0, // 排除 _id 欄位
          totalPrice: 1,
          shoppingCart: 1,
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

  async mergeCourseTabsAsync(courseIds: string[]) {
    const [courseHierarchy] = await CourseHierarchy.aggregate([
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
        $group: {
          _id: null,
          uniqueTagNames: { $addToSet: '$tagNames' }, // 将 tagNames 合并并去重
        },
      },
      {
        $project: {
          _id: 0,
          uniqueTagNames: 1,
        },
      },
    ]);

    return courseHierarchy ? courseHierarchy.uniqueTagNames : false;
  }

  async checkCouponCode(couponCode: string, tagNamess: string[]) {
    const currentDate = new Date();

    const [platformCoupons] = await PlatformCoupons.aggregate([
      {
        $match: {
          $and: [
            { couponCode: couponCode },
            { tagNames: { $in: tagNamess } },
            { isEnabled: true },
            { startDate: { $lte: currentDate } }, // 判斷開始時間小於等於當前時間
            { endDate: { $gte: currentDate } }, // 判斷結束時間大於等於當前時間
          ],
        },
      },
      {
        $project: {
          price: 1,
        },
      },
      {
        $limit: 1,
      },
    ]);

    return platformCoupons ? platformCoupons.price : false;
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
        },
      },
      {
        $project: {
          _id: 0, // 排除 _id 欄位
          totalPrice: 1,
          shoppingCart: 1,
          uniqueTagNames: 1,
        },
      },
    ]);

    return courseHierarchy ? courseHierarchy : false;
  }

  async checkOrderAsync(courseHierarchy: ICheckCourseResult, couponCode: string) {
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

    if (!platformCoupons) return { ...courseHierarchy, platformCoupons };

    courseHierarchy.discountedPrice = courseHierarchy.totalPrice - platformCoupons.couponPrice;

    return { ...courseHierarchy, platformCoupons };
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
  createMpgAesEncrypt(TradeInfo: IOrderParameter) {
    // 對應文件 P17：使用 aes 加密
    // $edata1=bin2hex(openssl_encrypt($data1, "AES-256-CBC", $key, OPENSSL_RAW_DATA, $iv));

    // 使用指定的 hashKey 和 hashIv 建立加密器
    const encrypt = crypto.createCipheriv(algorithm, goldFlowHashKey, goldFlowHashIv);

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
  createMpgShaEncrypt(aesEncrypt: string) {
    // 對應文件 P18：使用 sha256 加密
    // $hashs="HashKey=".$key."&".$edata1."&HashIV=".$iv;

    // 建立 SHA-256 雜湊加密器
    const sha = crypto.createHash('sha256');

    // 準備進行雜湊加密的明文，格式為 "HashKey=xxx&AesEncrypt=xxx&HashIV=xxx"
    const plainText = `HashKey=${goldFlowHashKey}&${aesEncrypt}&HashIV=${goldFlowHashIv}`;

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
  createMpgAesDecrypt(TradeInfo: string) {
    // 使用 AES-256-CBC 演算法建立解密器
    const decrypt = crypto.createDecipheriv(algorithm, goldFlowHashKey, goldFlowHashIv);

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
