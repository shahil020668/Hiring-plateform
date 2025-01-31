const express = require('express');
const { portDetails } = require('../controller/portfolioController');
const router = express.Router();



router.get('/',portDetails);


module.exports = router;