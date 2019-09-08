module.exports = (api) => {
  const repository = api.repositories.question;

  const service = {
    save: async (question) => repository.save(question),

    find: async (query = {}) => repository.find(query),

    findById: async (id) => repository.findById(id),

    findByUserId: async (userId) => repository.findByUserId(userId),

    update: async (question) => repository.update(question),

    delete: async (id) => repository.delete(id),
  };

  return service;
};
