const e = require("express");
const userRepository = require("../Repository/userRepository");

var fName=null
var lName=null
var emails=null
var pass=null



exports.getName = async()=>{


    return "Adarsh";

};

exports.login=async(email,password)=>{

    if((email===emails) && (password===pass))
    {
   
        return "login success"
    }
      
    return "Invalid email and password";

};


exports.createdUser =async(Data)=>{

    const DataModefied = {
        firstname:Data.fName,
    };

await userRepository.addContent(DataModefied);

return "Record Created";
};