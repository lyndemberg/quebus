const httpStatus = require('http-status-codes');

module.exports = (api) => {
  const userService = api.services.user;

  const userController = {

    auth: async (req, res) => {
      const { username, password } = req.body;

      if (!username || !password) {
        res.status(httpStatus.BAD_REQUEST)
          .json({
            message: 'Required password and username!', status: httpStatus.BAD_REQUEST,
          });
      }

      try {
        const data = await userService.auth(req.body.username, req.body.password);
        res.status(httpStatus.OK)
          .json({
            message: 'OK', status: httpStatus.OK, data,
          });
      } catch (error) {
        res.status(httpStatus.NOT_FOUND)
          .json({
            message: error.message, status: httpStatus.NOT_FOUND,
          });
      }
    },

    save: async (req, res) => {
      try {
        const data = await userService.save(req.body);
        res.status(httpStatus.CREATED)
          .json({
            message: 'OK', status: httpStatus.CREATED, data,
          });
      } catch (error) {
        res.status(httpStatus.BAD_REQUEST)
          .json({
            message: error.message, status: httpStatus.BAD_REQUEST,
          });
      }
    },

    findAll: async (req, res) => {
      const data = await userService.findAll();
      res.status(httpStatus.OK)
        .json({
          message: 'OK', status: httpStatus.OK, data,
        });
    },

    findById: async (req, res) => {
      try {
        const data = await userService.findById(req.params.id);
        res.status(httpStatus.OK)
          .json({
            message: 'OK', status: httpStatus.OK, data,
          });
      } catch (error) {
        res.status(httpStatus.NOT_FOUND)
          .json({
            message: error.message, status: httpStatus.NOT_FOUND,
          });
      }
    },

    update: async (req, res) => {
      try {
        const data = await userService.update(req.body);
        res.status(httpStatus.OK)
          .json({
            message: 'OK', status: httpStatus.OK, data,
          });
      } catch (error) {
        res.status(httpStatus.BAD_REQUEST)
          .json({
            message: error.message, status: httpStatus.BAD_REQUEST,
          });
      }
    },

    delete: async (req, res) => {
      try {
        res.status(httpStatus.NO_CONTENT);
      } catch (error) {
        res.status(httpStatus.NOT_FOUND)
          .json({
            message: error.message, status: httpStatus.NOT_FOUND,
          });
      }
    },
  };

  return userController;
};
