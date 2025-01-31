const express = require('express');
const { rateUs } = require('../controller/ratingController');
const router = express.Router();

router.post('/',rateUs);

module.exports = router;