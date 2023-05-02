import express, { Request, Response } from 'express';
import {User} from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		});

		const result = await user.save();
		const { password, ...data } = await result.toJSON();

		res.send(data);
	} catch (error) {
		console.log('Register Error:', error);
	}
});

authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    console.log('User not found');
    return res.status(404).send({
      message: 'User not found',
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    console.log('Invalid credentials');
    return res.status(400).send({
      message: 'Invalid credentials',
    });
  }

  const token = jwt.sign({ _id: user._id }, 'secret');
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.send('success');
  // res.send(token);
  //  res.send(user);
});

interface JwtPayload {
  _id: string;
}

authRouter.get('/user', async (req, res) => {
  try {
    const cookie = req.cookies['jwt'];
    const claims = jwt.verify(cookie, 'secret') as JwtPayload;
    if (!claims) {
      return res.status(401).send({
        message: 'Unauthenticated',
      });
    }
    const user = await User.findOne({ _id: claims._id });
    // console.log('claims: ', claims);
    // console.log('user: ', user);
    // filter out password, don't send it.
    if (null == user) {
      throw 'user not found';
    }
    const { password, ...data } = await user.toJSON();
    res.send(data);
  } catch (error) {
    return res.status(401).send({
      message: error,
    });
  }
  // res.send(user)
});

authRouter.post('/logout', (req, res) => {
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

authRouter.get('/', (req, res) => {
	return res.status(200).send(`login`);
});


authRouter.post('/', (req, res) => {
	const { username, password } = req.body;

	const user = mockUser.find((users) => {
		return users.username === username && users.password === password;
	});

	if (!user) {
		return res.status(404).send('User Not Found!');
	}

	return res.status(200).send(`Welcome ${username}`);
});

