module.exports = (api) => {
  const Notice = api.models.notice;
  const genericRepository = api.commons.genericRepository(Notice);

  const noticeRepository = {
    save: async (notice) => genericRepository.save(notice),

    find: async (query = {}) => Notice.find(query).populate('user').sort('-_id'),

    findById: async (id) => Notice.findById(id).populate('user').sort('-_id'),

    lastNotice: async () => Notice.findOne({}).populate('user').sort('-_id').limit(1),

    update: async (notice) => genericRepository.update(notice),

    delete: async (id) => genericRepository.delete(id),
  };

  return noticeRepository;
};
