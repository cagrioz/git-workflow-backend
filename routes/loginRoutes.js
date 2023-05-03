//import the library and the controller
const express = require('express');
const loginController = require('../controllers/loginController.js');

const router = express.Router();

//route the request to the corresponding function
router.post('', loginController.getUserId);

router.get('/refresh_token', loginController.renewRefreshToken);

router.delete('/refresh_token', loginController.deleteRefreshToken);

module.exports = router;
