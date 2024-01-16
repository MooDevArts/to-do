const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')


router.get('/', homeController.home);
router.get('/lol', homeController.lol);
router.post('/add-task', homeController.addTask);
router.get('/delete-task/:id', homeController.delTask);
router.get('/filter-tasks', homeController.filterTasks);
router.get('/filter-category/:category', homeController.filterCat);

//exporting so indexjs can use router
module.exports = router;