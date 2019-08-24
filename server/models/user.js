const mongoose = require('mongoose');
const validates = require('validator');

module.exports = (api) => {
  const db = api.config.db.mongoConnection;
  const { Schema } = mongoose;

  const UserSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: [true, 'User name required'],
      default: '',
      minlength: 2,
      maxlength: 200,
    },
    email: {
      type: String,
      unique: false,
      required: [true, 'User email required'],
      lowercase: true,
      trim: true,
      default: '',
      minlength: 7,
      maxlength: 400,
      validate: {
        validator: (email) => validates.isEmail(email),
        message: '{VALUE} is not a valid email',
        isAsync: false,
      },
    },
    user: {
      type: String,
      required: [true, 'Username required'],
      lowercase: true,
      unique: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    password: {
      type: String,
      required: [true, 'Password required'],
      default: '',
      select: false,
      // minlength: 8,
      maxlength: 400,
    },
    gender: {
      type: String,
      required: false,
      trim: true,
      default: '',
    },
  },
  {
    usePushEach: true,
    autoIndex: false,
    timestamps: true,
  });

  return db.model('User', UserSchema);
};
