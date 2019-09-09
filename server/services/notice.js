module.exports = (api) => {
  const repository = api.repositories.notice;

  const service = {
    save: async (notice) => repository.save(notice),

    find: async (query = {}) => repository.find(query),

    findById: async (id) => repository.findById(id),

    lastNotice: async () => repository.lastNotice(),

    update: async (notice) => repository.update(notice),

    delete: async (id) => repository.delete(id),
  };

  return service;
};
