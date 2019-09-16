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

    addComments: async (id, comments) => {
      const err = new Error('No comments');

      if ((Array.isArray(comments) && comments.length === 0)
        || (!Array.isArray(comments) && Object.entries(comments).length === 0)) {
        throw err;
      }

      if (Array.isArray(comments)) {
        comments = comments.filter((c) => Object.entries(c).length > 0);

        if (comments.length === 0) {
          throw err;
        }
      }

      return Question.updateOne(
        { _id: id },
        { $push: { comments } },
        {
          safe: true,
          runValidators: true,
        },
      );
    },

    updateComment: async (idQuestion, idComment, comment) => Question.updateOne(
      { _id: idQuestion, 'comments._id': idComment },
      { $set: { comments: comment } },
      {
        safe: true,
        runValidators: true,
      },
    ),

    removeComment: async (idQuestion, idComment) => Question.updateOne(
      { _id: idQuestion },
      { $pull: { comments: { _id: idComment } } },
      {
        safe: true,
        runValidators: true,
      },
    ),
  };

  return questionRepository;
};
