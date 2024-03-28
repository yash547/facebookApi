


exports.getName = async()=>{


    return "Adarsh";

};

exports.login=async(email,password)=>{


    if(email=="yashmishra547@gmail.com" && password=="admin")
    {
        return "login success"
    }
      
    return "Invalid email and password";

};