const express = require('express');
const router = express.Router();

const {fetchDetails} = require('../controller/profileController')

router.get('/',fetchDetails);
// router.get('/availbility',availability);


module.exports = router;