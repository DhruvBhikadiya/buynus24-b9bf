const express = require('express');
const router = express.Router();
const RefundsController = require('../controllers/refundController');

router.post('/createRefund', RefundsController.createRefund);
router.get('/getAllRefunds', RefundsController.getAllRefunds);
router.get('/getRefundsByCustomerId/:id', RefundsController.getRefundsByCustomerId);
router.put('/updateRefund/:id', RefundsController.updateRefund);
router.delete('/deleteRefund/:id', RefundsController.deleteRefund);

module.exports = router;