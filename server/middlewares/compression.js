const compression = require('compression');

module.exports = (api) => {
  api.use(compression());
};
