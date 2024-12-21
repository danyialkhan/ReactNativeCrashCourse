const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('fullName.firstName').isLength({min: 3}).withMessage('firstName must be at least 3 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be at least 3 characters long'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('capacity must be at least 1 characters long'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
], 
    captainController.registerCaptain
);

module.exports = router;