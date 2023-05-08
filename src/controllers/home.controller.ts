import { Request, Response } from 'express';
import { Course } from '../connections/courseManagement.mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse, missingFieldErrorMessage } from '../helpers/handle.helper';
import { isValidObjectId } from '../utils/mongoose.util';

class HomeController {
  public static async getPosts(_req: Request, res: Response): Promise<void> {
    const courses = await Course.find();

    if (!courses) return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

    return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, courses);
  }

  public static async createPost(req: Request, res: Response) {
    const data = req.body;

    if (!isValidObjectId(data.userId))
      return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

    if (data.content === undefined)
      return handleResponse(res, HttpStatusCode.OK, missingFieldErrorMessage('content'));

    const newCourse = await Course.create({
      content: data.content,
      image: data.image,
      likes: data.likes,
      user: data.userId,
    });

    if (!newCourse) return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

    return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
  }
}

export { HomeController };
