const mongoose = require("mongoose");
const moment = require("moment");

//create spartan schema
let SpartanSchema = mongoose.Schema({
   firstName: {
       type: String,
       required: true
   },

   lastName: {
       type: String,
       required: true
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
       type: String
   },

   email: {
       type: String,
       required: true,
       unique: true

   },

   phoneNumber: {
       type: String,
       required: true
   },

   emergencyContactName: {
       type: String,
   },

   emergencyContactNo: {
       type: String,
   },

   instructor: {
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
 },

   onBench: {
       type: Boolean,
       default: false
   }
});

module.exports = mongoose.model("SpartanModel", SpartanSchema);