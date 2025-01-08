const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboardController');

router.get('/adminDashboard', DashboardController.adminDashboard);
router.get('/customerDashboard/:id', DashboardController.customerDashboard);

module.exports = router;
