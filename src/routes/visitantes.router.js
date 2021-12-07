const express = require('express');
const router = express.Router();
const VisitController = require('../controllers/visitantes.controller');

router.get('/', VisitController.findAll);

router.get('/:id', VisitController.findOne);

router.post('/', VisitController.create);

router.put('/:id', VisitController.update);

router.delete('/:id', VisitController.delete);

module.exports = router;