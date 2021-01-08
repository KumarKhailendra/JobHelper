const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:false,
    },
   
    email : {
        type:String,
        required:true,
        unique:false
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:false
    },
    jobRole:{
        type:String,
        required:false
    },
    workAddress:{
        type:String,
        required:true
    },
    homeAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:false
    },
    pinCode:{
        type:String,
        required:true
    }
})

const Employee = new mongoose.model("EmployeeInfo", EmployeeSchema);

module.exports = Employee;