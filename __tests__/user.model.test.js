// https://buddy.works/tutorials/testing-with-jest-password-authentication-in-mongoose-model

// File: __tests__/user.model.test.js
const env = require('dotenv').config();
// console.log('process.env.MONGODB_URI: ', process.env.MONGODB_URI);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
});
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: `);
});

afterAll(async () => {
	try {
		await mongoose.connection.close();
	} catch (err) {
		console.log(err);
	}
});

// afterEach(async () => {
// 	try {
// 		await User.deleteMany({});
// 	} catch (err) {
// 		console.log(err);
// 	}
// });


const User = require('../src/models/user.model.js');

describe('User Password Authentication', () => {
	// test cases
	it('should generate the same hash given the same password text and salt', () => {
		try {
			let salt = User.generateSalt();
			let hash = User.generateHash('qwer213', salt);
			expect(hash).toEqual(User.generateHash('qwer213', salt));
		} catch (err) {
			throw new Error(err);
		}
	});

	it('should save a user with hashed_password and salt attribute', async () => {
		try {
			let result = await new User({
				username: 'sam',
				email: 'samsung@test.com',
				password: 'qwer213',
			}).save();
			expect(Object.keys(result._doc)).toEqual(
				expect.arrayContaining(['salt', 'hashed_password'])
			);
		} catch (err) {
			throw new Error(err);
		}
	});
});
