import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { CourseHierarchy } from '../connections/courseManagement.mongoDB';
import { User } from '../connections/mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { ISubchapter, IChapter, ICourse } from '../models/courseManagement/courseHierarchy.model';
import { courseHierarchys } from '../../__tests__/courseHierarchyData.test';

function generateRandomInt(max: number) {
  if (max !== 0) return Math.floor(Math.random() * max);
  return Math.random();
}

function getRandomDate(start: string | number | Date, end: string | number) {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const randomTimestamp = startDate + Math.random() * (endDate - startDate);
  const randomDate = new Date(randomTimestamp);

  return randomDate;
}

function getDiscountDateScope() {
  return [new Date().getTime() + 15 * 86400000, new Date().getTime() + 30 * 86400000];
}

class FakeInformationController {
  //#region getAllUser [ 取得全部使用者的 _id 資料 ]
  /** 取得全部使用者的 _id 資料 */
  public static async getAllUserId(_req: Request, res: Response, next: NextFunction) {
    try {
      const Users = await User.distinct('_id');

      if (Users.length === 0) return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, Users);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllUser [ 取得全部使用者的 _id 資料 ]

  //#region getAllCourseHierarchys [ 取得全部課程彙總資料 ]
  /** 取得全部課程彙總資料 */
  public static async getAllCourseHierarchys(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["CourseHierarchy - 課程彙總資料"]
     * #swagger.description = "取得全部課程彙總資料"
     * #swagger.responses[200] = {
          description: "成功取得課程彙總資料",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "取得資料成功",
            "data": [
              {
                "_id": "645a3a689ea91c0447216cc9",
                "user": "645a39c19ea91c0447216cc6",
                "tagsNames": [
                  "貓咪食譜"
                ],
                "cover": "https://fastly.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
                "promoVideo": "https://example.com/videos/promo_video.mp4",
                "title": "成為寵物訓練達人:寵物訓練入門基礎課程",
                "shortDescription": "犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。主要訓練課程：- 30日基本訓練寄宿課程- 45日高級訓練寄宿課程",
                "description": "本課程適合對象 ：家有幼犬之飼主。您將能夠透過本課程獲得：基礎幼犬互動訓練提高幼犬社會化經驗提高幼犬於外界環境之適應力習得犬隻基礎馴養技巧幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度 .....   查看更多立即購課",
                "level": 0,
                "price": 2500,
                "discountPrice": 1000,
                "enrollmentCount": 0,
                "totalTime": 43200,
                "totalNumber": 55,
                "isFree": false,
                "isPublished": false,
                "discountDate": "2023-04-30T16:00:00.000Z",
                "shelfDate": "2023-05-30T16:00:00.000Z",
                "createdAt": "2022-12-31T16:00:00.000Z",
                "updatedAt": "2023-05-07T16:00:00.000Z",
                "chapters": [
                  {
                    "_id": "6459b6cdaea0942f035f2e37-A001",
                    "sequence": 1,
                    "title": "在開始之前",
                    "totalTime": 3600,
                    "totalNumber": 5,
                    "subchapters": [
                      {
                        "_id": "6459b6cdaea0942f035f2e37-AA001",
                        "sequence": 1,
                        "title": "環境探索引導",
                        "content": null,
                        "fileName": "https://example.com/videos/promo_video.mp4",
                        "fileType": "0",
                        "time": 600
                      },
                      {
                        "_id": "6459b6cdaea0942f035f2e37-AA002",
                        "sequence": 2,
                        "title": "環境探索引導",
                        "content": null,
                        "fileName": "https://example.com/videos/promo_video.mp4",
                        "fileType": "0",
                        "time": 600
                      }
                    ]
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-B001",
                    "sequence": 1,
                    "title": "在開始之前",
                    "totalTime": 3600,
                    "totalNumber": 5,
                    "subchapters": [
                      {
                        "_id": "6459b6cdaea0942f035f2e37-BB001",
                        "sequence": 1,
                        "title": "環境探索引導",
                        "content": null,
                        "fileName": "https://example.com/videos/promo_video.mp4",
                        "fileType": "0",
                        "time": 600
                      },
                      {
                        "_id": "6459b6cdaea0942f035f2e37-BB002",
                        "sequence": 2,
                        "title": "環境探索引導",
                        "content": null,
                        "fileName": "https://example.com/videos/promo_video.mp4",
                        "fileType": "0",
                        "time": 600
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema:{
            "statusCode": 500,
            "isSuccess": false,
            "message": "系統錯誤，請聯絡系統管理員"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const CourseHierarchys = await CourseHierarchy.find();

      if (CourseHierarchys.length === 0)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, CourseHierarchys);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllCourseHierarchys [ 取得全部課程彙總資料 ]

  //#region createCourseHierarchys [ 新增一筆課程彙總資料 ]
  /** 取得全部課程彙總資料 */
  public static async createCourseHierarchys(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["CourseHierarchy - 課程彙總資料"]
     * #swagger.description = "新增一筆課程彙總資料"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "user": "645a39c19ea91c0447216cc6",
            "tagsNames": [
              "貓咪食譜"
            ],
            "cover": "https://fastly.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
            "promoVideo": "https://example.com/videos/promo_video.mp4",
            "title": "成為寵物訓練達人:寵物訓練入門基礎課程",
            "shortDescription": "犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。主要訓練課程：- 30日基本訓練寄宿課程- 45日高級訓練寄宿課程",
            "description": "本課程適合對象 ：家有幼犬之飼主。您將能夠透過本課程獲得：基礎幼犬互動訓練提高幼犬社會化經驗提高幼犬於外界環境之適應力習得犬隻基礎馴養技巧幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度 .....   查看更多立即購課",
            "level": 0,
            "price": 2500,
            "discountPrice": 1000,
            "enrollmentCount": 0,
            "totalTime": 43200,
            "totalNumber": 55,
            "is_free": false,
            "is_published": true,
            "discountDate": "2023/05/01",
            "shelfDate": "2023/05/31",
            "createdAt": "2023/01/01",
            "updatedAt": "2023/05/08",
            "chapters": [
              {
                "_id": "6459b6cdaea0942f035f2e37-A001",
                "sequence": 1,
                "title": "在開始之前",
                "totalTime": 3600,
                "totalNumber": 5,
                "subchapters": [
                  {
                    "_id": "6459b6cdaea0942f035f2e37-AA001",
                    "sequence": 1,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-AA002",
                    "sequence": 2,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  }
                ]
              },
              {
                "_id": "6459b6cdaea0942f035f2e37-B001",
                "sequence": 1,
                "title": "在開始之前",
                "totalTime": 3600,
                "totalNumber": 5,
                "subchapters": [
                  {
                    "_id": "6459b6cdaea0942f035f2e37-BB001",
                    "sequence": 1,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-BB002",
                    "sequence": 2,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  }
                ]
              }
            ]
          }
        }
      * #swagger.responses[200] = {
          description: "成功",
          schema:{
            "statusCode": 200,
            "isSuccess": true,
            "message": "新增資料成功"
          }
        }
      * #swagger.responses[400] = {
          description: "失敗",
          schema:{
            "statusCode": 400,
            "isSuccess": false,
            "message": "錯誤的請求"
          }
        }
      * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema:{
            "statusCode": 500,
            "isSuccess": false,
            "message": "系統錯誤，請聯絡系統管理員"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const data = req.body;

      if (!data.user) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      }

      await CourseHierarchy.create(data);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion createCourseHierarchys [ 新增一筆課程彙總資料 ]

  //#region generateData [ 產生假資料至課程彙總資料 ]
  /** 取得全部課程彙總資料 */
  public static async generateData(_req: Request, res: Response, next: NextFunction) {
    try {
      const { dogCovers, catCovers, dogAndCatCovers, fileNames, dagData } =
        courseHierarchys;
      const dogLength = dogCovers.length;
      // const catLength = catCovers.length;
      // const dogAndCatLength = dogAndCatCovers.length;

      console.log(catCovers.length);
      console.log(dogAndCatCovers.length);

      const fileNameLength = fileNames.length;
      const a_z = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ];
      const newData: ICourse[] = [];

      const users: string[] = await User.distinct('_id');
      const userLength = users.length;

      for (let i = 0; i < dagData.length; i++) {
        const dagDataIndex = dagData[i];

        for (let j = 0; j < dagDataIndex.length; j++) {
          let discountPrice = 0;
          let discountDate;

          const courseHierarchy = dagDataIndex[j];

          const userIndex = generateRandomInt(userLength);
          const dogIndex = generateRandomInt(dogLength);

          const user = new Types.ObjectId(users[userIndex]);
          const tagNames = courseHierarchy.tag;
          const cover = dogCovers[dogIndex];
          const title = courseHierarchy.title;
          const shortDescription =
            '犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。主要訓練課程：- 30日基本訓練寄宿課程- 45日高級訓練寄宿課程';
          const description =
            '本課程適合對象 ：家有幼犬之飼主。您將能夠透過本課程獲得：基礎幼犬互動訓練提高幼犬社會化經驗提高幼犬於外界環境之適應力習得犬隻基礎馴養技巧幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度 .....   查看更多立即購課';
          const level = generateRandomInt(4);
          const price = generateRandomInt(10000);
          const enrollmentCount = generateRandomInt(100000);
          const totalTime = generateRandomInt(600000);
          const totalNumber = generateRandomInt(100);
          const isFree = !!generateRandomInt(2);
          const isPopular = 0 === generateRandomInt(10);
          const isPublished = !!generateRandomInt(2);
          const createdAt = getRandomDate('2022/01/01', '2023/05/31');
          const shelfDate = getRandomDate(createdAt, '2023/05/31');
          const updatedAt = getRandomDate(createdAt, '2023/05/31');
          const chapterArr: IChapter[] = [];

          const isDiscount = !!generateRandomInt(2);

          if (isDiscount) {
            discountPrice = price * generateRandomInt(0);
            const [startDate, endDate] = getDiscountDateScope();
            discountDate = getRandomDate(startDate, endDate);
          }

          const chapters = courseHierarchy.chapters;
          for (let k = 0; k < chapters.length; k++) {
            const subchapterArr: ISubchapter[] = [];
            const chapter = chapters[k];

            const chapter_id = `${a_z[i]}00${j}${k}`;
            const chapter_sequence = k + 1;
            const chapter_title = chapter.title;
            const chapter_totalTime = generateRandomInt(totalTime);
            const chapter_totalNumber = generateRandomInt(totalNumber);

            const subchapters = chapter.subchapters;
            for (let l = 0; l < subchapters.length; l++) {
              const subchapter = subchapters[l];
              const fileNameIndex = generateRandomInt(fileNameLength)

              const subchapter_id = `${a_z[i]}00${j}${k}${l}`;
              const subchapter_sequence = l + 1;
              const subchapter_title = subchapter.title;
              const fileName = fileNames[fileNameIndex];
              const fileType = 0;
              const subchapter_time = generateRandomInt(chapter_totalTime);

              subchapterArr.push({
                _id: subchapter_id,
                sequence: subchapter_sequence,
                title: subchapter_title,
                fileName,
                fileType,
                time: subchapter_time,
              });
            }

            chapterArr.push({
              _id: chapter_id,
              sequence: chapter_sequence,
              title: chapter_title,
              totalTime: chapter_totalTime,
              totalNumber: chapter_totalNumber,
              subchapters: subchapterArr
            });
          }

          newData.push({
            user,
            tagNames,
            cover,
            title,
            shortDescription,
            description,
            level,
            price,
            discountPrice,
            enrollmentCount,
            totalTime,
            totalNumber,
            isFree,
            isPopular,
            isPublished,
            discountDate,
            shelfDate,
            createdAt,
            updatedAt,
            chapters: chapterArr,
          });
        }
      }

      const insertedData = await CourseHierarchy.insertMany(newData);

      console.log(insertedData);

      return handleResponse(
        res,
        HttpStatusCode.OK,
        HttpMessage.RetrieveSuccess,
        'CourseHierarchys',
      );
    } catch (err) {
      next(err);
    }
  }
  //#endregion generateData [ 產生假資料至課程彙總資料 ]
}

export { FakeInformationController };
