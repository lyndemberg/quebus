module.exports = (api) => {
  const repository = api.repositories.question;

  const service = {
    save: async (question) => repository.save(question),

    findAll: async () => repository.findAll(),

    findById: async (id) => repository.findById(id),

    update: async (question) => repository.update(question),

    delete: async (id) => repository.delete(id),
  };

  return service;
};
