const mongoose = require('mongoose');
const OPTIONS_MONGODB = require('./optionsMongoDB');

const { MONGODB_URI, NODE_ENV } = process.env;

let singleConnection;

module.exports = () => {
  if (!singleConnection) {
    console.log('CONEXÃO COM O MONGODB SERÁ CRIADA');
    singleConnection = mongoose.createConnection(MONGODB_URI, OPTIONS_MONGODB[NODE_ENV]);
  }

  mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados!');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Erro na conexão: ${err}`);
  });

  mongoose.connection.on('disconnect', () => {
    console.log('Desconectado :(');
  });

  return singleConnection;
};
