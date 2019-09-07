const express = require('express');
const consign = require('consign');

const api = express();

consign()
  .include('middlewares')
  .then('config/db/mongoConnection.js')
  .then('commons')
  .then('models')
  .then('repositories')
  .then('services')
  .then('controllers')
  .then('routes')
  .then('config/boot.js')
  .into(api);
