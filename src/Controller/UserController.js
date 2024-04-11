// here we have to import the UserService.js file
const userService = require('../Service/UserService')




// here we will defined the function.

exports.getName = async(req,res)=>{


    const userServiceResult = await userService.getName(); // here the getname function is 
    // defined into the userService.js file.

    res.status(200).json({"Message":userServiceResult});

};

exports.login = async(req,res)=>{

    /**
     *  
     *   req ---> request
     *    res ---> response
     * 
     */

    /**
     * here email and password input has been given into the 
     * login function as a argument and the login function call
     * has been done for the userService file.
     */
    const response = await userService.login(req.body.email,req.body.password);

       if(response=="login success")
       {

        res.status(200).json({"Status":1,"Message":response})

       }
       else
       {
        
        res.status(200).json({"Status":0,"Message":response})
    }
};