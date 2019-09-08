const mongoose = require('mongoose');

module.exports = (api) => {
  const db = api.config.db.mongoConnection;
  const { Schema } = mongoose;

  const NoticeSchema = new Schema({
    message: {
      type: String,
      trim: true,
      required: [true, 'Message required'],
      default: '',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }, {
    timestamps: true,
  });

  return db.model('Notice', NoticeSchema);
};
