const RedatoresModel = require('../models/RedatoresModel');

const RedatoresController = {
  index: (req, res) => {
    const redatores = RedatoresModel.obterInformacoes();
    res.render('redatores',{redatores:redatores});
  }
}

module.exports = RedatoresController;