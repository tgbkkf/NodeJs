var express = require('express');

var router = express.Router();

var ctrlStok = require('../controller/stokController');

router.get('/',ctrlStok.index)

module.exports = router;