const userModel = require('../Model/userModel');


exports.addContent=async(userData)=>{
    
    return await userModel.create(userData);

}