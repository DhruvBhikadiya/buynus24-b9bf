const express = require('express');
const router = express.Router();
const FaqsController = require('../controllers/faqController');

router.post('/createFaq', FaqsController.createFaq);
router.get('/getAllFaqs', FaqsController.getAllFaqs);
router.put('/updateFaq/:id', FaqsController.updateFaq);
router.delete('/deleteFaq/:id', FaqsController.deleteFaq);

module.exports = router;