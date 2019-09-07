module.exports = (api) => {
  const Question = api.models.question;
  const genericRepository = api.commons.genericRepository(Question);

  const questionRepository = {
    save: async (question) => genericRepository.save(question),

    findAll: async () => genericRepository.findAll(),

    findById: async (id) => genericRepository.findById(id),

    update: async (question) => genericRepository.update(question),

    delete: async (id) => genericRepository.delete(id),
  };

  return questionRepository;
};
