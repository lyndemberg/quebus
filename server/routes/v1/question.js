module.exports = (api) => {
  const controller = api.controllers.question;
  const URL_BASE = '/quebus/v1/question';

  api.route(`${URL_BASE}`)
    .get((req, res) => {
      controller.findAll(req, res);
    })
    .post((req, res) => {
      controller.save(req, res);
    });

  api.route(`${URL_BASE}/:id`)
    .put((req, res) => {
      controller.update(req, res);
    })
    .get((req, res) => {
      controller.findById(req, res);
    })
    .delete((req, res) => {
      controller.delete(req, res);
    });
};
