const RedatoresModel = require('../models/RedatoresModel');

const RedatoresController = {
  index: (req, res) => {
    res.render('index');
  }
}

module.exports = RedatoresController;