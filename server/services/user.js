module.exports = (api) => {
  const userRepository = api.repositories.user;

  const userService = {
    save: async (user) => userRepository.save(user),
    findAll: async () => userRepository.findAll(),
    findById: async (id) => userRepository.findById(id),
    update: async (user) => userRepository.update(user),
    delete: async (id) => userRepository.delete(id),
  };

  return userService;
};
