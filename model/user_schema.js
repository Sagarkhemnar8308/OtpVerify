const mongoose= require('mongoose');

const userschema=mongoose.Schema({
   phonenumber:{
    type:Number,
    required:true,
   },
});

const usermodel = mongoose.model('list of user exist',userschema);

module.exports=usermodel;