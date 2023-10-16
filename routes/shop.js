const path = require('path');

const express = require('express');

const shopControllers = require('../controllers/products')

const router = express.Router();

router.get('/', shopControllers.getShopProducts);

module.exports = router;
