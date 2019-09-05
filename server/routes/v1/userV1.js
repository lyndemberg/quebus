module.exports = (api) => {
  const userController = api.controllers.user;
  const URL_BASE = '/quebus/v1/user';

  api.route(`${URL_BASE}/auth`)
    .post((req, res) => {
      userController.auth(req, res);
    });

  api.route(`${URL_BASE}`)
    .get((req, res) => {
      userController.findAll(req, res);
    })
    .post((req, res) => {
      userController.save(req, res);
    });

  api.route(`${URL_BASE}/:id`)
    .get((req, res) => {
      userController.findById(req, res);
    })
    .put((req, res) => {
      userController.update(req, res);
    })
    .delete((req, res) => {
      userController.delete(req, res);
    });
};
