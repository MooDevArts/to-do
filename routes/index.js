const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')


router.get('/', homeController.home);

//exporting so indexjs can use router
module.exports = router;