const mongoose = require('mongoose');

module.exports = (api) => {
  const db = api.config.db.mongoConnection;
  const { Schema } = mongoose;

  const EvaluationSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    evaluation: {
      type: String,
      enum: ['LIKE', 'UNLIKE'],
      required: false,
    },
  });

  const CommentSchema = new Schema({
    comment: {
      type: String,
      trim: true,
      required: [true, 'Comment required'],
      default: '',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    evaluation: [EvaluationSchema],
  });

  const QuestionSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: [true, 'Title required'],
      default: '',
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Description required'],
      default: '',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    comments: [CommentSchema],
  });

  return db.model('Question', QuestionSchema);
};
