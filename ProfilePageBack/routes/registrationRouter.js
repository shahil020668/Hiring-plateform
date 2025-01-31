const express = require('express');
const { customer } = require('../controller/registerationController');
const router = express.Router();

router.post('/',customer);

module.exports = router;