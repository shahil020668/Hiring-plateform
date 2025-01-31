const express = require('express');
const { fetchService } = require('../controller/serviceController');

const router = express.Router();

router.get('/',fetchService);

module.exports = router;