const mongoose = require("mongoose");
const jobtypeSchema = new mongoose.Schema({
    job : {
        type:String,
        required:true,
        
    },
    logo : {
        type:String,
        required:false
    },

    desc:{
        type:String,
        required:true,
    },
   
})

const jobtype = new mongoose.model("JobtypeInfo", jobtypeSchema);

module.exports = jobtype;