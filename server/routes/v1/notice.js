const express = require('express');

module.exports = (api) => {
  const controller = api.controllers.notice;
  const role = api.commons.roles;
  const auth = api.middlewares.authorization;

  const URL_BASE = '/quebus/v1/notice';
  const router = express.Router();

  router.get(`${URL_BASE}`, auth([role.type.ADMIN]), async (req, res) => controller.find(req, res));
  router.post(`${URL_BASE}`, auth([role.type.ADMIN]), async (req, res) => controller.save(req, res));

  router.get(`${URL_BASE}/last`, auth([role.type.ADMIN, role.type.NORMAL_USER]), async (req, res) => controller.lastNotice(req, res));

  router.put(`${URL_BASE}/:id`, auth([role.type.ADMIN]), async (req, res) => controller.update(req, res));
  router.get(`${URL_BASE}/:id`, auth([role.type.ADMIN]), async (req, res) => controller.findById(req, res));
  router.delete(`${URL_BASE}/:id`, auth([role.type.ADMIN]), async (req, res) => controller.delete(req, res));

  api.use(router);
};
