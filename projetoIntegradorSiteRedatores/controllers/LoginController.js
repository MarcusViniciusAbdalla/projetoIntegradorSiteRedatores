const LoginModel = require('../models/LoginModel');

const LoginController = {
  index: (req, res) => {
    res.render('index');
  }
}

module.exports = LoginController;