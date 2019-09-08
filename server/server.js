const express = require('express');
const consign = require('consign');

const api = express();

consign()
  .include('config/db/mongoConnection.js')
  .then('commons')
  .then('models')
  .then('repositories')
  .then('services')
  .then('controllers')
  .then('middlewares')
  .then('routes')
  .then('config/boot.js')
  .into(api);
