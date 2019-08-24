module.exports = (api) => {
  const userService = api.services.user;

  const userController = {
    save: async (req, res) => {
      try {
        const data = await userService.save(req.body);
        res.status(201).json({ message: 'OK', status: 201, data });
      } catch (error) {
        res.status(400).json({ message: error.message, status: 400, data: {} });
      }
    },

    findAll: (req, res) => {
      const data = userService.findAll();
      res.status(200).json({ message: 'OK', status: 200, data });
    },

    findById: (req, res) => {
      try {
        const data = userService.findById(req.params.id);
        res.status(200).json({ message: 'OK', status: 200, data });
      } catch (error) {
        res.status(404).json({ message: error.message, status: 404, data: {} });
      }
    },

    update: async (req, res) => {
      try {
        const data = await userService.update(req.body);
        res.status(200).json({ message: 'OK', status: 200, data });
      } catch (error) {
        res.status(400).json({ message: error.message, status: 400, data: {} });
      }
    },

    delete: async (req, res) => {
      try {
        const data = await userService.delete(req.params.id);
        res.status(204);
      } catch (error) {
        res.status(404).json({ message: error.message, status: 404, data: {} });
      }
    },
  };

  return userController;
};
