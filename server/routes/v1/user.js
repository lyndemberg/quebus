const express = require('express');

module.exports = (api) => {
  const userController = api.controllers.user;
  const auth = api.middlewares.authorization;
  const role = api.commons.roles;

  const URL_BASE = '/quebus/v1/user';
  const router = express.Router();

  router.post(`${URL_BASE}/auth`, async (req, res) => userController.auth(req, res));

  router.get(`${URL_BASE}`, async (req, res) => userController.find(req, res));
  router.post(`${URL_BASE}`, async (req, res) => userController.save(req, res));

  router.get(`${URL_BASE}/:id`, auth([role.type.NORMAL_USER]), async (req, res) => userController.findById(req, res));
  router.put(`${URL_BASE}/:id`, auth([role.type.NORMAL_USER]), async (req, res) => userController.update(req, res));
  router.delete(`${URL_BASE}/:id`, auth([role.type.ADMIN]), async (req, res) => userController.delete(req, res));

  api.use(router);
};
