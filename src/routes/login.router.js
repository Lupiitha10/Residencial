const express = require('express');
const router = express.Router();
const Log = require('../controllers/Login.Controller');

router.post('/',Log.find);
router.put('/:id',Log.upadate);

module.exports = router;