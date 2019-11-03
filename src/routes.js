const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/session_controller');
const SpotController = require('./controllers/spot_controller');
const DashboardController = require('./controllers/dashboard_controller');
const BookingController = require('./controllers/booking_controller');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions',SessionController.store);
routes.get('/spots',SpotController.index);
routes.post('/spots',upload.single('thumbnail'),SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

    

    module.exports = routes;