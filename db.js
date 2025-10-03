
//connection to MondoB
const mongoose = require('mongoose') //common JS module/ the Default

//import mongoose from 'mongoose' //ECMAScript module
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");
    
}
module.exports={connectDB, mongoose}; 
