const e = require("express");

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


exports.createdUser =async(firstName,lastName,email,password)=>{

fName=firstName
lName=lastName
emails=email
pass=password
return "Record Created";
};