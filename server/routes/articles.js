const express = require('express');
const router = express.Router();
const controller = require('../controllers/articles')

/* GET users listing. */
router.get('/', controller.getAllArticles);
router.post('/', controller.createArticles);

module.exports = router;
