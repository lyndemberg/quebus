const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

module.exports = (api) => {
  const userRepository = api.repositories.user;
  const hashing = api.bin.hash;

  const userService = {

    auth: async (username, password) => {
      const user = await userRepository.findByUsername(username);
      if (user.password && !await hashing.compare(password, user.password)) {
        throw new Error('Invalid password!');
      }

      const token = jwt.sign({ id: user._id, roles: user.roles }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });

      user.password = undefined;
      return { user, token };
    },

    save: async (user) => {
      user.password = await hashing.hash(user.password);
      userRepository.save(user);
    },

    findAll: async () => userRepository.findAll(),

    findById: async (id) => userRepository.findById(id),

    update: async (user) => userRepository.update(user),

    delete: async (id) => userRepository.delete(id),
  };

  return userService;
};
