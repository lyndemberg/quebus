const express = require('express');
const consign = require('consign');

const api = express();

consign()
  .include('middlewares')
  .then('config/boot.js')
  .into(api);
