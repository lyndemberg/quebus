const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

module.exports = (api) => {
  const userRepository = api.repositories.user;
  const hashing = api.commons.hash;

  const userService = {

    auth: async (username, password) => {
      const user = await userRepository.findByUsername(username);
      if (user.password && !await hashing.compare(password, user.password)) {
        throw new Error('Invalid password!');
      }

      const token = jwt.sign({ id: user._id, roles: user.roles }, JWT_SECRET, {
        expiresIn: Number.parseInt(JWT_EXPIRES_IN, 10),
      });

      user.password = undefined;
      return { user, token };
    },

    save: async (user) => {
      user.password = await hashing.hash(user.password);
      userRepository.save(user);
    },

    find: async (query = {}) => userRepository.find(query),

    findById: async (id) => userRepository.findById(id),

    update: async (user) => userRepository.update(user),

    delete: async (id) => userRepository.delete(id),
  };

  return userService;
};
