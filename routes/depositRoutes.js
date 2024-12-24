const express = require('express');
const router = express.Router();
const DepositsController = require('../controllers/depositController');

router.post('/createDeposit', DepositsController.createDeposit);
router.get('/getAllDeposits', DepositsController.getAllDeposits);
router.get('/getDepositsByCustomerId/:id', DepositsController.getDepositsByCustomerId);
router.put('/updateDeposit/:id', DepositsController.updateDeposit);
router.delete('/deleteDeposit/:id', DepositsController.deleteDeposit);

module.exports = router;