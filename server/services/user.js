module.exports = (api) => {
  const userRepository = api.repositories.user;
  const { hash } = api.bin;

  const userService = {

    auth: async (username, password) => {
      const user = await userRepository.findByUsername(username);
      if (user.password && !await hash.compare(password, user.password)) {
        throw new Error('Invalid password!');
      }
      return user;
    },

    save: async (user) => {
      user.password = await hash.hash(user.password);
      userRepository.save(user);
    },

    findAll: async () => userRepository.findAll(),

    findById: async (id) => userRepository.findById(id),

    update: async (user) => userRepository.update(user),

    delete: async (id) => userRepository.delete(id),
  };

  return userService;
};
