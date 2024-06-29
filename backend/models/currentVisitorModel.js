const mongoose = require("mongoose");

const currentVisitorSchema = mongoose.Schema({
    visitorName:{
        type: String,
        required: true
    },
    employeeName:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    enterTime:{
        type: String,
    },
    exitTime:{
        type: String,
    },
    photo: {
        type: Boolean,
    }
},{timestamps: true});

const visitors = mongoose.model("visitors",currentVisitorSchema);

module.exports = {visitors};