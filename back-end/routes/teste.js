const express = require('express');
const router = express.Router()

//Ligando a rota ao controller
const controller = require('../controllers/teste');

//Chamando o método ola_mundo() do controller
router.get('/', controller().ola_mundo);

module.exports = router;