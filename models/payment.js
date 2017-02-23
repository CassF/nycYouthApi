const mongoose = require("mongoose");

//create user schema
let PaymentSchema = mongoose.Schema({
    youth_Id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("payment", PaymentSchema);