const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
    photo: {
        type: Boolean
    }
});

const users = mongoose.model("users",userSchema);

module.exports = {users};