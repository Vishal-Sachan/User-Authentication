const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const detailController = require('../controllers/userController')
const educationController = require('../controllers/userController')

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/verify/:token', userController.tokenValidate)

module.exports = router;