const httpStatusCode = require('http-status-codes');

module.exports = (api) => {
  const service = api.services.question;

  const controller = {
    save: async (req, res) => {
      try {
        const data = await service.save(req.body);
        res.status(httpStatusCode.CREATED)
          .json({
            message: 'OK', status: httpStatusCode.CREATED, data,
          });
      } catch (error) {
        res.status(httpStatusCode.CREATED)
          .json({
            message: error.message, status: httpStatusCode.BAD_REQUEST,
          });
      }
    },

    find: async (req, res) => {
      const data = await service.find(req.query);
      res.status(httpStatusCode.OK)
        .json({
          message: 'OK', status: httpStatusCode.OK, data,
        });
    },

    findById: async (req, res) => {
      try {
        const data = await service.findById(req.params.id);
        res.status(httpStatusCode.OK)
          .json({
            message: 'OK', status: httpStatusCode.OK, data,
          });
      } catch (error) {
        res.status(httpStatusCode.NOT_FOUND)
          .json({
            message: error.message, status: httpStatusCode.NOT_FOUND,
          });
      }
    },

    update: async (req, res) => {
      try {
        const data = await service.update(req.body);
        res.status(httpStatusCode.OK)
          .json({
            message: 'OK', status: httpStatusCode.OK, data,
          });
      } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST).json({
          message: error.message, status: httpStatusCode.BAD_REQUEST,
        });
      }
    },

    delete: async (req, res) => {
      try {
        await service.delete(req.params.id);
        res.status(httpStatusCode.NO_CONTENT).send();
      } catch (error) {
        res.status(httpStatusCode.NOT_FOUND)
          .json({
            message: error.message, status: httpStatusCode.NOT_FOUND,
          });
      }
    },
  };

  return controller;
};
