import { Request, Response } from 'express';
import { Course } from '../connections/courseManagement.mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';

class HomeController {
  public static async getPosts(_req: Request, res: Response): Promise<void> {
    const courses = await Course.find();

    if (!courses) return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

    return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, courses);
  }

  public static async createPost(req: Request, res: Response) {
    const data = req.body;

    const newCourse = await Course.create(data);

    if (!newCourse) return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

    return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
  }
}

export { HomeController };
