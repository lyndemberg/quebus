module.exports = (api) => {
  const User = api.models.user;
  const genericRepository = api.bin.genericRepository(User);

  const userRepository = {
    save: async (user) => genericRepository.save(user),
    findAll: async () => genericRepository.findAll(),
    findById: async (id) => genericRepository.findById(id),
    update: async (user) => genericRepository.update(user),
    delete: async (id) => genericRepository.delete(id),
  };

  return userRepository;
};
