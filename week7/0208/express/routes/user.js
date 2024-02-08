const express = require('express');
const controller = require('../controller/user');

const router = express.Router();

router.get('/', controller.main); //페이지
router.post('/register', controller.register); //

module.exports = router;