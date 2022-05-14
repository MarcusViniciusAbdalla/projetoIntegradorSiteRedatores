const RedatoresModel = require('../models/RedatoresModel');

const RedatoresController = {
  index: (req, res) => {
    const redatores = RedatoresModel.obterInformacoes();
    res.send(redatores);
  }
}

module.exports = RedatoresController;