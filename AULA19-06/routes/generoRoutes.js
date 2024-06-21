const generoController = require('../controllers/generoController');
const express = require('express');
const router = express.Router();

router.get('/generos', generoController.listarGeneros);
router.post('/generos/cadastro', generoController.cadastrarGenero);


module.exports = router;