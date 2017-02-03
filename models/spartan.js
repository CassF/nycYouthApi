const mongoose = require("mongoose");
const moment = require("moment");

//create spartan schema
let SpartanSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
        // validate: {
        //     validator: function (firstName) {
        //         let re = /^[a-zA-Z\s]/;
        //         return re.test(firstName)
        //     }
        // }
    },

    lastName: {
        type: String,
        required: true
        // validate: {
        //     validator: function (lastName) {
        //         let re = /^[a-zA-Z\s]/;
        //         return re.test(lastName)
        //     }
        // }
    },

    dob: {
        type: Date
    },
    course: {
        type: String
    },

    course_Id: {
        type: String
    },

    address: {
        type: String,
        // required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: function (email) {
        //         let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //         return re.test(email)
        //     }
        // }
    },

    phoneNumber: {
        type: String,
        required: true
    },

    emergencyContactName: {
        type: String,
        required: true
    },

    emergencyContactNo: {
        type: String,
        required: true
    },

    instructor: {
        type: Boolean,
        default: false
    },

    admin: {
        type: Boolean,
        default: false
    },

    slackHandle: {
        type: String
    },

    applicant: {
        type: Boolean,
        default: false
    },

    inTraining: {
        type: Boolean,
        default: false
    },
    clientSite: {
        type: Boolean,
        default: false

    }



});

module.exports = mongoose.model("spartans", SpartanSchema);