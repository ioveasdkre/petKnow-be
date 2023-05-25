import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../connections/mongoDB';
import { verifyJwtToken, secret } from '../helpers/login.helper';

export const authRouter = express.Router();

authRouter.post('/v1/register', async (req, res) => {
  //#region [ swagger說明文件 ]
  /**
   * #swagger.tags = ["登入系統 API"]
   * #swagger.description = "註冊帳號"
   * #swagger.parameters["body"] = {
        description: "資料格式",
        in: "body",
        type: "object",
        required: true,
        schema: {
          "name": "Benson",
          "email": "Abc123#@gmail.com",
          "password": "Abc123#@gmail.com",
        }
      }
    * #swagger.responses[200] = {
        description: "成功",
        schema: {
          "success": true,
          "statusCode": 200,
          "message": "Success",
          "data": {
            "name": "Benson",
            "email": "testfge2@gmail.com",
            "__v": 0
          }
        }
      }
    * #swagger.responses[400] = {
        "success": false,
        "statusCode": 400,
        "message": "Failure"
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
    const salt = await bcrypt.genSalt(10);
    console.log('req.body: ', req.body);
    // console.log('req.body._value: ', req.body._value);
    // console.log('req.body._value.password: ', req.body._value.password);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();
    const { _id, password, ...data } = result.toJSON();

    const ret = {
      success: true,
      statusCode: 200,
      message: 'Success',
      data: {
        ...data,
      },
    };
    res.send(ret);
  } catch (error) {
    console.log('Register Error:', error);
    const ret = {
      success: false,
      statusCode: 400,
      message: 'Failure',
    };
    res.send(ret);
  }
});

authRouter.post('/v1/login', async (req, res) => {
  //#region [ swagger說明文件 ]
  /**
   * #swagger.tags = ["登入系統 API"]
   * #swagger.description = "註冊帳號"
   * #swagger.parameters["body"] = {
        description: "資料格式",
        in: "body",
        type: "object",
        required: true,
        schema: {
          "email": "Abc123#@gmail.com",
          "password": "Abc123#@gmail.com"
        }
      }
    * #swagger.responses[200] = {
        description: "成功",
        schema: {
          "success": true,
          "statusCode": 200,
          "message": "Success",
          "data": {
            "name": "Benson",
            "email": "Abc123#@gmail.com",
            "__v": 0,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZkOGJmODVmNTJhZTk2ODFiODg1OTMiLCJpYXQiOjE2ODQ5MDA5MDR9.4_l8XUaVPW58-6VCpt51-QkLq5SyKRnYndt1P_xQ2Ng"
          }
        }
      }
    * #swagger.responses[400] = {
        description: "錯誤的請求",
        schema:{
          "success": false,
          "statusCode": 400,
          "message": "Invalid credentials",
          "data": {
            "email": "Abc123#@gmail.com"
          }
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
  console.log('req.body: ', req.body);
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    const msg = {
      success: false,
      statusCode: 404,
      message: 'User not found',
      data: {
        email: req.body.email,
      },
    };
    console.log(msg);
    return res.status(404).send(msg);
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    const msg = {
      success: false,
      statusCode: 400,
      message: 'Invalid credentials',
      data: {
        email: req.body.email,
      },
    };
    console.log(msg);
    return res.status(400).send(msg);
  }

  const token = jwt.sign({ _id: user._id }, secret);
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  const { _id, password, ...data } = user.toJSON();

  res.send({
    success: true,
    statusCode: 200,
    message: 'Success',
    data: {
      ...data,
      token,
    },
  });
  // res.send(token);
  //  res.send(user);
});

interface JwtPayload {
  _id: string;
}

authRouter.get('/v1/user/show', async (req, res) => {
  //#region [ swagger說明文件 ]
  /**
   * #swagger.tags = ["登入系統 API"]
   * #swagger.description = "註冊帳號"
   * #swagger.security = [
        {
          "apiKeyAuth": []
        }
      ]
    * #swagger.responses[200] = {
        description: "成功",
        schema: {
          "success": true,
          "statusCode": 200,
          "message": "Success",
          "data": {
            "name": "Benson",
            "email": "Abc123#@gmail.com",
            "__v": 0,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZkOGJmODVmNTJhZTk2ODFiODg1OTMiLCJpYXQiOjE2ODQ5MDA5MDR9.4_l8XUaVPW58-6VCpt51-QkLq5SyKRnYndt1P_xQ2Ng"
          }
        }
      }
    * #swagger.responses[400] = {
        description: "錯誤的請求",
        schema:{
          "success": false,
          "statusCode": 400,
          "message": "Invalid credentials",
          "data": {
            "email": "Abc123#@gmail.com"
          }
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
    let auth = req.get('authorization') || (' ' as string);

    const tokenPrefix = 'Bearer ';
    if (auth.startsWith(tokenPrefix)) {
      auth = auth.slice(tokenPrefix.length);
    }

    const claims = verifyJwtToken(req, res);

    const user = await User.findOne({ _id: claims?._id });
    if (null == user) {
      throw new Error('user not found');
    }
    // console.log('user: ', user);
    // filter out password, don't send it.
    const { password, ...data } = user.toJSON();
    let ret = {
      success: true,
      statusCode: 200,
      message: 'Success',
      data: {
        data,
      },
    };
    res.send(ret);
  } catch (error) {
    console.log('error msg: ', error);
    let ret = {
      success: false,
      statusCode: 401,
      message: 'Failure',
      error,
    };
    return res.status(401).send(ret);
  }
  // res.send(user)
});

authRouter.put('/v1/user/update', async (req, res) => {
  try {
    console.log('body: ', req.body);
    let auth = req.get('authorization') || (' ' as string);
    const myArray = auth.split(' ');
    auth = myArray[1];
    // console.log('auth: ', auth);

    const claims = jwt.verify(auth, secret) as JwtPayload;
    if (!claims) {
      throw new Error('Unauthenticated');
    }

    const filter = { _id: claims._id };
    console.log('filter: ', filter);
    // can't update email, will cause duplicate key error.
    const { email, ...update } = req.body;
    // const { ...update } = req.body;
    console.log('update: ', update);
    const user = await User.findOneAndUpdate(filter, update, { returnOriginal: false });
    console.log('user: ', user);
    if (null == user) {
      throw new Error('user not found');
    }

    // filter out password, don't send it.
    const { password, ...data } = await user.toJSON();
    let ret = {
      success: true,
      statusCode: 200,
      message: 'Success',
      data,
    };
    res.send(ret);
  } catch (error) {
    return res.status(401).send({
      message: error,
    });
  }
});

authRouter.post('/v1/logout', (_req, res) => {
  res.cookie('jwt', '', { maxAge: 0 });
  res.send({
    message: 'success',
  });
});

////////
// trying with jest unit test.
////////
const mockUser = [
  {
    id: 1,
    username: 'jane@email.com',
    password: 'Jane123',
  },
];

authRouter.get('/v1/', (_req, res) => {
  return res.status(200).send(`login`);
});

authRouter.post('/v1/', (req, res) => {
  const { username, password } = req.body;

  const user = mockUser.find(users => {
    return users.username === username && users.password === password;
  });

  if (!user) {
    return res.status(404).send('User Not Found!');
  }

  return res.status(200).send(`Welcome ${username}`);
});
