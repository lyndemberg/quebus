module.exports = (api) => {
  const Question = api.models.question;
  const genericRepository = api.commons.genericRepository(Question);

  const questionRepository = {
    save: async (question) => genericRepository.save(question),

    find: async (query = {}) => genericRepository.find(query),

    findById: async (id) => genericRepository.findById(id),

    findByUserId: async (userId) => Question.find({ user: userId }),

    update: async (question) => genericRepository.update(question),

    delete: async (id) => genericRepository.delete(id),
  };

  return questionRepository;
};
