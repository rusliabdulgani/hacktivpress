const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

/* GET users listing. */
router.get('/', controller.getAllUsers);
router.post('/signup', controller.signUp);
router.post('/signin', controller.signIn);

module.exports = router;
