const mongoose = require("mongoose");
const moment = require("moment");

//create spartan schema
let SpartanSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        // validate: {
        //     validator: function (firstName) {
        //         let re = /^[a-zA-Z\s]+$/;
        //         return re.test(firstName)
        //     }
        // }
    },

    lastName: {
        type: String,
        required: true,
        // validate: {
        //     validator: function (lastName) {
        //         let re = /^[a-zA-Z\s]+$/;
        //         return re.test(lastName)
        //     }
        // }
    },

    dob: {
        type: Date
        // required: true
    },

    class: {
        type: String
    },

    classId: {
        type: String,
        unique: true
    },

    address: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
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
        type: String
    },

    emergencyContactNo: {
        type: String
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
    }

    // status: {
    //       applicant:1, 
    //       inTraining:2, 
    //       clientSite:3
    // }
    

});

module.exports = mongoose.model("spartans", SpartanSchema);