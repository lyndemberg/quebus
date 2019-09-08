const { Router } = require('express');

module.exports = (api) => {
  const router = Router();

  router.get('/', (req, res) => {
    res.json({ message: 'QUEBUS - Sistema colaborativo de troca de informações para uso interno em empresas' });
  });
  api.use('/quebus', router);
};
