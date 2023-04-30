import express, { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
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

