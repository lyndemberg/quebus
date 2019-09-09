module.exports = (api) => {
  const Notice = api.models.notice;
  const genericRepository = api.commons.genericRepository(Notice);

  const noticeRepository = {
    save: async (notice) => genericRepository.save(notice),

    find: async (query = {}) => genericRepository.find(query).sort('-_id'),

    findById: async (id) => genericRepository.findById(id),

    lastNotice: async () => Notice.find({}).sort('-_id').limit(1),

    update: async (notice) => genericRepository.update(notice),

    delete: async (id) => genericRepository.delete(id),
  };

  return noticeRepository;
};
