const express = require('express');
const router = express.Router();
const DocController = require('../controllers/documentos.controller');

router.get('/', DocController.findAll);

router.get('/:id', DocController.findOne);

router.post('/', DocController.create);

router.put('/:id', DocController.update);

router.delete('/:id', DocController.delete);

module.exports = router;