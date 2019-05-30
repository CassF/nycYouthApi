const mongoose = require("mongoose");

//create user schema
const RegistrantSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    telephoneNumber: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    emailAddress: {
        type: String
    },
    district: {
        type: String
    },
    localAssembly: {
        type: String
    },
    parentalConsent: {
        type: Boolean
    },
    medicalInfo: {
        type: String
    },
    dietaryRequirements: {

    },
    emergencyContact1Name: {
        type: String
    },
    emergencyContact1Number: {
        type: String
    },
    emergencyContact1Relationship: {
        type: String
    },
    emergencyContact2Name: {
        type: String
    },
    emergencyContact2Number: {
        type: String
    },
    emergencyContact2Relationship: {
        type: String
    },
    parentalPermission: {
        type: Boolean
    },
    mediaPermission: {
        type: Boolean
    },
    conditions: {
        type: Array
    },
    takingMedication: {
        type: Boolean
    },
    medication: {
        type: Array
    },
    selfAdministration: {
        type: Boolean
    },
    allergies: {
        type: Array
    },
    physicalAndSpecialNeeds: {
        type: String
    },
    medicalConsent: {
        type: Boolean
    },
    customer: {
        type: String
    },
    isNonCop: {
        type: Boolean
    }
});

module.exports = mongoose.model("registrant", RegistrantSchema);