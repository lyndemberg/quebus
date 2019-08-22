const bodyParser = require('body-parser');

module.exports = api => {
  api.set('json spaces', 4);
  api.use(bodyParser.json({}));
  api.use(bodyParser.urlencoded({ extended: true }));
};
