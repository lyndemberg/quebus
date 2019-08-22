const morgan = require('morgan');

module.exports = api => {
  api.use(morgan('common'));
}
