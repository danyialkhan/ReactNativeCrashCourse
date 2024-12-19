const express = require('express');
const  {body} = require('express-validator');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Message'),
    body('fullName.firstName').isLength({min: 3}).withMessage("first name must be 3 characters long."),
    body('password').isLength({min: 6}).withMessage("password must be at-least 6 chars long."), 
]  , userController.registerUser
);
 



module.exports = router;