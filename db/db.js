const mongoose= require('mongoose');

const dbconnection=mongoose.connect('mongodb://127.0.0.0.1:27017/SignUp');

module.exports=dbconnection;