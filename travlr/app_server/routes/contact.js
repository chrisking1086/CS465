var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact');

/* GET contact view */
router.get('/', controller.contact);

module.exports = router;