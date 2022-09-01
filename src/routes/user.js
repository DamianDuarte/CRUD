// ************ Require's ************
const express = require('express');
const router = express.Router();
const validationsregister = require('../validations/validatorRegister');
// ************ Controller Require ************
const userController = require('../controllers/userController');

router.get('/register', userController.register); 
router.post('/register', validationsregister, userController.validations); 

module.exports = router;