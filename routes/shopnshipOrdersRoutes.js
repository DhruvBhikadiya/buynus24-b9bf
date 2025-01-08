const express = require('express');
const router = express.Router();
const ShopnshipOrdersController = require('../controllers/shopnshipOrdersController');

router.post('/createShopnshipOrder', ShopnshipOrdersController.createShopnshipOrder);
router.get('/getAllShopnshipOrders', ShopnshipOrdersController.getAllShopnshipOrders);
router.put('/updateShopnshipOrder/:id', ShopnshipOrdersController.updateShopnshipOrder);
router.get('/getShopnshipOrderByOrderId/:id', ShopnshipOrdersController.getShopnshipOrderByOrderId);
router.get('/getShopnshipOrderByCustomerId/:id', ShopnshipOrdersController.getShopnshipOrderByCustomerId);
router.delete('/deleteShopnshipOrder/:id', ShopnshipOrdersController.deleteShopnshipOrder);

module.exports = router;