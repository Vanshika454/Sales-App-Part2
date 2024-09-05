const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.post('/', salesController.createSale);
router.get('/top', salesController.getTopSales);
router.get('/today-revenue', salesController.getTodayRevenue);

module.exports = router;