const express = require('express');
const router = express.Router();
const homeController = require('../controller/home'); // '../controller/home' olmalı

router.get('/', homeController.getHome);
router.get('/about', homeController.getUberUns);
router.get('/ubungen', homeController.getUbungen);
router.post('/ubungen', homeController.postUbungen);
router.post('/reset', homeController.resetTest);

module.exports = router;
