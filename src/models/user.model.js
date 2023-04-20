// ref:
// https://buddy.works/tutorials/testing-with-jest-password-authentication-in-mongoose-model
// https://github.com/ioveasdkre/HexschoolOperation/blob/main/NodejsEnterpriseClass/day40-tasks/day25/userModel.ts


const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: 'username is required',
	},
	email: {
		type: String,
		unique: 'email already exists',
		// match: [ /. +\@. +\.. + /, 'Please give a valid email address'],
	},
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String
});

UserSchema.statics.generateSalt = function () {
	return Math.round(new Date().valueOf() * Math.random()) + '';
};

UserSchema.statics.generateHash = function(password, salt) {
  try {
    const hmac = crypto.createHmac('sha1',salt)
    hmac.update(password)
    return hmac.digest('hex')
  } catch (err) {
    return err
  }
}

UserSchema.virtual('password')
  .set(function(password) { // set password as virtual field  
    this._password = password
    this.salt = this.constructor.generateSalt()
    this.hashed_password = this.constructor.generateHash(password, this.salt)
  })
  .get(function() {
    return this._password
  })

module.exports = mongoose.model('User', UserSchema);

