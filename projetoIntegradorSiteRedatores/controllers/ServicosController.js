const ServicosModel = require('../models/ServicosModel');

const ServicosController = {
  index: (req, res) => {
    const servicos = ServicosModel.obterInformacoes();
    res.render('servicos',{servicos:servicos});
  }
}

module.exports = ServicosController;