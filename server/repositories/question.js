const mongoose = require('mongoose');

module.exports = (api) => {
  const Question = api.models.question;
  const genericRepository = api.commons.genericRepository(Question);

  const questionRepository = {
    save: async (question) => genericRepository.save(question),

    find: async (query = {}) => Question.find(query)
      .populate('user')
      .populate('comments.user')
      .populate('comments.evaluation.user'),

    findById: async (id) => Question.findById(id)
      .populate('user')
      .populate('comments.user')
      .populate('comments.evaluation.user'),

    update: async (question) => genericRepository.update(question),

    delete: async (id) => genericRepository.delete(id),

    addComment: async (id, comment) => {
      const question = await Question.findById(id);

      if (!question) {
        throw new Error('Comment not found');
      }

      question.comments.push(comment);
      return question.save();
    },

    updateComment: async (idQuestion, idComment, comment) => {
      const question = await Question.findById(idQuestion);

      let index;
      question.comments.filter((c, i) => {
        if (c._id.toString() === idComment) {
          index = i;
        }
        return false;
      });

      if (!typeof index === 'number' || index < 0) {
        throw new Error('Comment not found');
      }

      question.comments[index].comment = comment;
      question.save();
    },

    removeComment: async (idQuestion, idComment) => Question.updateOne(
      { _id: idQuestion },
      { $pull: { comments: { _id: idComment } } },
      {
        safe: true,
        runValidators: true,
      },
    ),

    addEvaluation: async (idQuestion, idComment, evaluation) => {
      const question = await Question.findById(idQuestion);

      let index;
      question.comments.filter((c, i) => {
        if (c._id.toString() === idComment) {
          index = i;
        }
        return false;
      });

      if (!typeof index === 'number' || index < 0) {
        throw new Error('Comment not found');
      }

      question.comments[index].evaluations.push(evaluation);
      question.save();
    },

    updateEvaluation: async (idQuestion, idComment, idEvaluation, evaluation) => {
      const question = await Question.findById(idQuestion);

      let indexComment;
      question.comments.filter((c, i) => {
        if (c._id.toString() === idComment) {
          indexComment = i;
        }
        return false;
      });

      if (!typeof indexComment === 'number' || indexComment < 0) {
        throw new Error('Comment not found');
      }

      let indexEvaluation;
      question.comments[indexComment].evaluations.filter((e, i) => {
        if (e._id.toString() === idEvaluation) {
          indexEvaluation = i;
        }
        return false;
      });

      if (!typeof indexEvaluation === 'number' || indexEvaluation < 0) {
        throw new Error('Evaluation not found');
      }

      question.comments[indexComment].evaluations[indexEvaluation].evaluation = evaluation;

      const modelValidated = question.validateSync();
      if (modelValidated) {
        const error = {
          error: modelValidated,
          message: modelValidated.errors[Object.keys(modelValidated.errors)[0]].message,
        };

        throw error;
      }

      question.save();
    },

    removeEvaluation: async (idQuestion, idComment, idEvaluation) => {
      const question = await Question.findById(idQuestion);

      let indexComment;
      question.comments.filter((c, i) => {
        if (c._id.toString() === idComment) {
          indexComment = i;
        }
        return false;
      });

      if (!typeof indexComment === 'number' || indexComment < 0) {
        throw new Error('Comment not found');
      }

      let indexEvaluation;
      question.comments[indexComment].evaluations.filter((e, i) => {
        if (e._id.toString() === idEvaluation) {
          indexEvaluation = i;
        }
        return false;
      });

      if (!typeof indexEvaluation === 'number' || indexEvaluation < 0) {
        throw new Error('Evaluation not found');
      }

      question.comments[indexComment].evaluations.splice(indexEvaluation, 1);
      question.save();
    },
  };

  return questionRepository;
};
