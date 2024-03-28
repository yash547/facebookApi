// express header/import declare
const express = require('express');

const router = express.Router();

// here  UserController.js file import is defined
const userController = require('../Controller/UserController');



router.get('/getUserName',userController.getName); // here i have created the api name
// along with the access the controller package of userController.js file.

router.get('/getUserN',userController.getName); // here i have created the api name
// along with the access the controller package of userController.js file.
// getName it is a function name which we have call from routes folder and it 
// is defiend into the UserController.js  file.


router.post('/LoginGmail',userController.login) // this line help us to create the post api.

module.exports=router;