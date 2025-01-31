const express = require('express');
const { fetchReview } = require('../controller/reviwController');
const router = express.Router();


router.get('/',fetchReview);


module.exports = router;