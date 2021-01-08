const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
   
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("UserInfo", memberSchema);

module.exports = Register;