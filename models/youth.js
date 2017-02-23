const mongoose = require("mongoose");

//create user schema
let YouthSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("youth", YouthSchema);