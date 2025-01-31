const express = require('express');
const { submit } = require('../controller/bookingController');
const router = express.Router();

router.post('/',submit);


module.exports = router;