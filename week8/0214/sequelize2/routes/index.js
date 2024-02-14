const express = require('express');
const { main, post, detail } = require('../controller');

const router = express.Router();

router.get('/', main); //메인페이지
router.get('/post', post); //게시판페이지
router.get('/post/:id', detail); //상세페이지

module.exports = router;
