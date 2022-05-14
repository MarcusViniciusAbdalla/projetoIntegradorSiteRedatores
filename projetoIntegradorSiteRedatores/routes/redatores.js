const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Rotas de Redatores');
});

module.exports = router;