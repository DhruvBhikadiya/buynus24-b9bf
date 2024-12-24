const express = require('express');
const router = express.Router();
const ShopnshipItemsController = require('../controllers/shopnshipItemsController');

router.post('/createShopnshipItem', ShopnshipItemsController.createShopnshipItem);
router.get('/getAllShopnshipItems', ShopnshipItemsController.getAllShopnshipItems);
router.put('/updateShopnshipItem/:id', ShopnshipItemsController.updateShopnshipItem);
router.get('/getShopnshipItemByOrderId/:id', ShopnshipItemsController.getShopnshipItemByOrderId);
router.delete('/deleteShopnshipItem/:id', ShopnshipItemsController.deleteShopnshipItem);

module.exports = router;