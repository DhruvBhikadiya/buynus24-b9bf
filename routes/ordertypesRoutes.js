const express = require('express');
const router = express.Router();
const OrderTypesController = require('../controllers/ordertypesController');

router.post('/createOrderType', OrderTypesController.createOrderType);
router.get('/getAllOrderTypes', OrderTypesController.getAllOrderTypes);
router.put('/updateOrderType/:id', OrderTypesController.updateOrderType);
router.delete('/deleteOrderType/:id', OrderTypesController.deleteOrderType);

module.exports = router;