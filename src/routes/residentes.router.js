const express = require('express');
const router = express.Router();
const ResidentController = require('../controllers/residentes.controller');

router.get('/', ResidentController.findAll);

router.get('/:id', ResidentController.findOne);

router.post('/', ResidentController.create);

router.put('/:id', ResidentController.update);

router.delete('/:id', ResidentController.delete);

module.exports = router;