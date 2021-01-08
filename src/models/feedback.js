const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    // lastname : {
    //     type:String,
    //     required:true
    // },
    email : {
        type:String,
        required:true,
        unique:true
    },
    subject:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
    // check:{
    //     type:String,
    //     required:false
    // },
    // mobileNumber:{
    //     type:String,
    //     required:true,
    //     unique:false
    // },
    // feedback:{
    //     type:String,
    //     required:true
    // }
   
})

const Feedback = new mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;