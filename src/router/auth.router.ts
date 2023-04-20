import express, { Request, Response } from 'express';
export const authRouter = express.Router();

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

