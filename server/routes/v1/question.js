const express = require('express');

module.exports = (api) => {
  const controller = api.controllers.question;
  const role = api.commons.roles;
  const auth = api.middlewares.authorization;

  const URL_BASE = '/quebus/v1/question';
  const router = express.Router();

  router.get(`${URL_BASE}`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.find(req, res));
  router.post(`${URL_BASE}`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.save(req, res));

  router.put(`${URL_BASE}/:id`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.update(req, res));
  router.get(`${URL_BASE}/:id`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.findById(req, res));
  router.delete(`${URL_BASE}/:id`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.delete(req, res));

  router.post(`${URL_BASE}/:id/comments`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.addComment(req, res));
  router.put(`${URL_BASE}/:idQuestion/comments/:idComment`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.updateComment(req, res));
  router.delete(`${URL_BASE}/:idQuestion/comments/:idComment`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.removeComment(req, res));

  router.post(`${URL_BASE}/:idQuestion/comments/:idComment/evaluation`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.addEvaluation(req, res));
  router.put(`${URL_BASE}/:idQuestion/comments/:idComment/evaluation/:idEvaluation`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.updateEvaluation(req, res));
  router.delete(`${URL_BASE}/:idQuestion/comments/:idComment/evaluation/:idEvaluation`, auth([role.type.NORMAL_USER, role.type.ADMIN]), async (req, res) => controller.removeEvaluation(req, res));
  api.use(router);
};
