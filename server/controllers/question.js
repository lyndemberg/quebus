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

    addComment: async (req, res) => {
      try {
        const data = await service.addComment(req.params.id, req.body);
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

    updateComment: async (req, res) => {
      try {
        const data = await service
          .updateComment(req.params.idQuestion, req.params.idComment, req.body.comment);
        res.status(httpStatusCode.OK)
          .json({
            message: 'OK', status: httpStatusCode.OK, data,
          });
      } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST)
          .json({
            message: error.message, status: httpStatusCode.BAD_REQUEST,
          });
      }
    },


    removeComment: async (req, res) => {
      try {
        await service.removeComment(req.params.idQuestion, req.params.idComment);
        res.status(httpStatusCode.NO_CONTENT).send();
      } catch (error) {
        res.status(httpStatusCode.NOT_FOUND)
          .json({
            message: error.message, status: httpStatusCode.NOT_FOUND,
          });
      }
    },

    addEvaluation: async (req, res) => {
      try {
        const data = await service.addEvaluation(req.params.idQuestion, req.params.idComment, req.body);
        res.status(httpStatusCode.OK)
          .json({
            message: 'OK', status: httpStatusCode.OK, data,
          });
      } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST)
          .json({
            message: error.message, status: httpStatusCode.BAD_REQUEST,
          });
      }
    },

    updateEvaluation: async (req, res) => {
      try {
        const data = await service.updateEvaluation(req.params.idQuestion, req.params.idComment, req.params.idEvaluation, req.body.evaluation);
        res.status(httpStatusCode.OK)
          .json({
            message: 'OK', status: httpStatusCode.OK, data,
          });
      } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST)
          .json({
            message: error.message, status: httpStatusCode.BAD_REQUEST,
          });
      }
    },

    removeEvaluation: async (req, res) => {
      try {
        await service.removeEvaluation(req.params.idQuestion, req.params.idComment, req.params.idEvaluation);
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
