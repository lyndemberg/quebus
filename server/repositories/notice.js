module.exports = (api) => {
  const Notice = api.models.notice;
  const genericRepository = api.commons.genericRepository(Notice);

  const noticeRepository = {
    save: async (notice) => genericRepository.save(notice),

    find: async (query = {}) => genericRepository.find(query),

    findById: async (id) => genericRepository.findById(id),

    update: async (notice) => genericRepository.update(notice),

    delete: async (id) => genericRepository.delete(id),
  };

  return noticeRepository;
};
