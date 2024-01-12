const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')


router.get('/', homeController.home);
router.get('/lol', homeController.lol);

//exporting so indexjs can use router
module.exports = router;