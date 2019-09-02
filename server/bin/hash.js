const bcrypt = require('bcrypt');
const { SECRET } = process.env;

module.exports = () => {
  const hash = {
    hash: async (password) => bcrypt.hash(password, Math.random()),
    compare: async (password, hash) => bcrypt.compare(password, hash),
  }
  return hash;
}
