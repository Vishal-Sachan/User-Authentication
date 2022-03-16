const express = require('express')
const router = express.Router();
const educationController = require('../controllers/education-Controller')

router.post('/view', educationController.ViewEducation)
router.post('/add', educationController.AddEducation)
router.post('/update', educationController.UpdateEducation)
router.post('/delete', educationController.DeleteEducation)

module.exports = router;