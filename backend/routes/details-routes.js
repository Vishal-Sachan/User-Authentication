const express = require('express')
const router = express.Router();
const detailController = require('../controllers/personal-detail-Controller')

router.get('/view', detailController.ViewDetail)
router.post('/add', detailController.AddDetail)
router.post('/update', detailController.UpdateDetail)
router.post('/delete', detailController.DeleteDetail)

module.exports = router;