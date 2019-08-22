const helmet = require('helmet');

module.exports = api => {
  api.use(helmet());
}
