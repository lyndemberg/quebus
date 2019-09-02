const bcrypt = require('bcrypt');

const { SALT_HASH } = process.env;

module.exports = () => {
  const hashing = {
    hash: async (password) => bcrypt.hash(password, SALT_HASH),
    compare: async (password, hash) => bcrypt.compare(password, hash),
  };
  return hashing;
};
