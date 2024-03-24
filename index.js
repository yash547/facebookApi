// express header/import declare
const express = require("express");
// cors header/import declare
const cors = require("cors");
// body-parser header/import declare
// when ever the input are required to insert into the api 
// then we requied the body-parser to be declare or import.
const bodyparser = require("body-parser");

// declare header/import config
// here the central access is defined
const config = require("config");

// here we have acccess the default.json file inside the 
// json variable applicationPort
const port = config.get("applicationPort");

// here i have declare the userRoutes from Routes folder (package)
const userRoutes = require("./src/routes/UserRoutes");

const app = express(); // object created

app.use(cors());

// here i have set the limit of 50 mb
app.use(bodyparser.json({limit:"50mb"})); 


app.use(

    bodyparser.urlencoded({
        extended:false,
    })

);


app.use("/",userRoutes); // here i have provided the userRoutes.js file access

// it used to run the node project with the help of port number.
app.listen(port,()=>{
    console.log('App running on port',port)
});
