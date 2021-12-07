const express = require('express');
const router = express.Router();
const createusers = require('../controllers/usuarios.controller');

router.post('/',createusers.create);

module.exports = router;