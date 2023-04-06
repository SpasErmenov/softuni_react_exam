const router = require('express').Router();

//const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');

//router.use(homeController);
router.use(authController);
//TODO: Add routes

module.exports = router;