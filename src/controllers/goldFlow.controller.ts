import { Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { CourseHierarchy } from '../connections/mongoDB';
// import { User } from '../connections/mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IReqBody } from '../types/handle.type';
import { isValidObjectId } from '../utils/mongoose.util';
import { IReqCoursesIds } from '../vmodels/goldFlow.model';

class GoldFlowController {
  //#region getAllUser [ 取得全部使用者的 _id 資料 ]
  /** 取得全部使用者的 _id 資料 */
  static async postCard(req: IReqBody<IReqCoursesIds>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "產生假資料至課程彙總資料"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "coursesIds": ["646b2513c4b5bbda59089273", "646b2513c4b5bbda59089274", "646b2513c4b5bbda59089275"]
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": [
              "6462f6e51d25094b3e5b94ca"
            ]
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema:{
            "statusCode": 500,
            "isSuccess": false,
            "message": "System error, please contact the system administrator"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const { coursesIds } = req.body;

      const isValid = coursesIds.every(isValidObjectId);

      if (!isValid) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      }

      const courseHierarchys = await CourseHierarchy.aggregate([
        {
          $match: { id: { $in: coursesIds.map(id => new Types.ObjectId(id)) } },
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
            totalPrice: { $sum: '$price' },
            shoppingCart: {
              $push: {
                _id: '$_id',
                title: '$title',
                cover: '$cover',
                level: '$level',
                time: '$totalTime',
                total: '$totalNumber',
                instructorName: { $arrayElemAt: ['$user.name', 0] },
                price: '$price',
                discountPrice: '$discountPrice',
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

      const test = await CourseHierarchy.aggregate([
        {
          $match: { id: { $in: coursesIds.map(id => new Types.ObjectId(id)) } },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
      ]);

      console.log(test);

      if (!courseHierarchys)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, courseHierarchys);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllUser [ 取得全部使用者的 _id 資料 ]
}

export { GoldFlowController };
