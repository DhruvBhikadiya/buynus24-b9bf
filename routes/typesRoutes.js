const express = require('express');
const router = express.Router();
const TypesController = require('../controllers/typesController');

router.post('/createType', TypesController.createType);
router.get('/getAllTypes', TypesController.getAllTypes);
router.put('/updateType/:id', TypesController.updateType);
router.delete('/deleteType/:id', TypesController.deleteType);

module.exports = router;