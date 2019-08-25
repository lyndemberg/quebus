const httpStatus = require('http-status-codes');

module.exports = (api) => {
  const userService = api.services.user;

  const userController = {
    save: async (req, res) => {
      try {
        const data = await userService.save(req.body);
        res.status(httpStatus.CREATED).json({ message: 'OK', status: httpStatus.CREATED, data });
      } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
          message: error.message, status: httpStatus.BAD_REQUEST, data: {},
        });
      }
    },

    findAll: async (req, res) => {
      const data = await userService.findAll();
      res.status(httpStatus.OK).json({ message: 'OK', status: httpStatus.OK, data });
    },

    findById: async (req, res) => {
      try {
        const data = await userService.findById(req.params.id);
        res.status(httpStatus.OK).json({ message: 'OK', status: httpStatus.OK, data });
      } catch (error) {
        res.status(httpStatus.NOT_FOUND).json({
          message: error.message, status: httpStatus.NOT_FOUND, data: {},
        });
      }
    },

    update: async (req, res) => {
      try {
        const data = await userService.update(req.body);
        res.status(httpStatus.OK).json({ message: 'OK', status: httpStatus.OK, data });
      } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
          message: error.message, status: httpStatus.BAD_REQUEST, data: {},
        });
      }
    },

    delete: async (req, res) => {
      try {
        const data = await userService.delete(req.params.id);
        res.status(httpStatus.NO_CONTENT);
      } catch (error) {
        res.status(httpStatus.NOT_FOUND).json({
          message: error.message, status: httpStatus.NOT_FOUND, data: {},
        });
      }
    },
  };

  return userController;
};
