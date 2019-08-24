module.exports = (api) => {
  const port = parseInt(process.env.PORT, 10) || 3000;
  api.set('port', port);

  api.listen(api.get('port'), () => {
    console.log(`Servidor rodando na porta: ${api.get('port')}`);
  });
};
