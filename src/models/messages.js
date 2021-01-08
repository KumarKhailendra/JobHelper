const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:false
    },
    subject : {
        type:String,
        required:false
    },
    message:{
        type:String,
        required:true
    }
})

const Message = new mongoose.model("MessagesInfo", messageSchema);

module.exports = Message;