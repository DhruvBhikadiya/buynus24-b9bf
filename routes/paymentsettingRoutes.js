const express = require('express');
const router = express.Router();
const PaymentSettingsController = require('../controllers/paymentsettingController');

router.post('/createPaymentSetting', PaymentSettingsController.createPaymentSetting);
router.get('/getAllPaymentSettings', PaymentSettingsController.getAllPaymentSettings);
router.put('/updatePaymentSetting/:id', PaymentSettingsController.updatePaymentSetting);
router.delete('/deletePaymentSetting/:id', PaymentSettingsController.deletePaymentSetting);

module.exports = router;