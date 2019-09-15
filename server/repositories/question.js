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

    // addComments: async (id, ...comments = []) => {

    //   if (comments.length == 0) {
    //     throw new Error('No comments');
    //   }
    //   Question.update(
    //     { _id: id },
    //     {}
    //   )
    // }
  };

  return questionRepository;
};
