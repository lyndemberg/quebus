const bcrypt = require('bcrypt');

module.exports = () => {
  const hashing = {
    hash: async (password) => bcrypt.hash(password, Math.random()),
    compare: async (password, hash) => bcrypt.compare(password, hash),
  };
  return hashing;
};
