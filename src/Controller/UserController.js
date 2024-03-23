// here we have to import the UserService.js file

const userService = require('../Service/UserService')




// here we will defined the function.

exports.getName = async(req,res)=>{


    const userServiceResult = await userService.getName(); // here the getname function is 
    // defined into the userService.js file.

    res.status(200).json({"Message":userServiceResult});

};