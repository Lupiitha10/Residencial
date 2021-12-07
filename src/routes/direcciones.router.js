const express = require('express');
const router = express.Router();
const DirController = require('../controllers/direcciones.controller');

router.get('/', DirController.findAll);

router.get('/:id', DirController.findOne);

router.post('/', DirController.create);

router.put('/:id', DirController.update);

router.delete('/:id', DirController.delete);

module.exports = router;