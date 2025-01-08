const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/addressController');

router.post('/createAddress', AddressController.createAddress);
router.get('/getAllAddress', AddressController.getAllAddress);
router.get('/getAddressById/:id', AddressController.getAddressById);
router.get('/getAddressByUser/:userId', AddressController.getAddressByUser);
router.put('/updateAddress/:id', AddressController.updateAddress);
router.delete('/deleteAddress/:id', AddressController.deleteAddress);

module.exports = router;