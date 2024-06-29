const mongoose = require("mongoose");

const rootSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const roots = mongoose.model("root",rootSchema);

module.exports = {roots};