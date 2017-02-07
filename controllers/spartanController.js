const Spartan = require("../models/spartan");
const moment = require("moment");

class SpartanController {
    /** 
        * @method makeSpartan
        * @param {String} req - spartan details
        * @param {String} res - status response
        * creates a new class object
    **/
    static registerSpartan(req, res) {
        req.body.dob = moment.utc(req.body.dob, "YYYY-MM-DD");
        Spartan.create(req.body, (err, result) => {
            if (err) {
                res.status(400).send(err.message);
            } else {
                res.status(200).send(result);
            }
        });
    }

    /** 
        * @method showSpartanDetails
        * @param {String} req - spartan details
        * @param {String} res - status response
        * @return {Object} - returns an existing spartan object from the database
    **/
    static showAllSpartans(req, res) {
        Spartan.find({ instructor: false }, (err, result) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    spartanDetails: result
                })
            }
        });
    }

    /** 
        * @method showOneSpartans
        * @param {String} req - spartan details
        * @param {String} res - status response
        * @return {Object} - returns the details of the spartan object that has been clicked
    **/
    static showOneSpartan(req, res) {
        // spartanLib.getASpartansDetails(req)

        Spartan.findById({ _id: req.params.id }, (err, spartan) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    AspartansDetails: spartan
                })
            }
        });
    }
        /** 
        * @method editSpartan
        * @param {String} req - new spartan details
        * @return {Object} - returns the details of the spartan object that has been clicked
        **/
        static editSpartan(req, res) {
        Spartan.findById(req.params.id, (err, spartan) => {
            // Handle any possible database errors
            if (err) {
                res.status(400).send(err.message);
            } else {
                // Update each attribute with any possible attribute that may have been submitted in the body of the request
                // If that attribute isn't in the request body, default back to whatever it was before.
                spartan.firstName = req.body.firstName || spartan.firstName;
                spartan.lastName = req.body.lastName || spartan.lastName;
                spartan.dob = req.body.dob = req.body.dob = moment.utc(req.body.dob, "YYYY-MM-DD") || spartan.dob;
                spartan.course = req.body.course || spartan.course;
                spartan.address = req.body.address || spartan.address;
                spartan.email = req.body.email || spartan.email;
                spartan.phoneNumber = req.body.phoneNumber || spartan.phoneNumber;
                spartan.emergencyContactName = req.body.emergencyContactName || spartan.emergencyContactName;
                spartan.emergencyContactNo = req.body.emergencyContactNo || spartan.emergencyContactNo;
                spartan.instructor = req.body.instructor || spartan.instructor;
                spartan.admin = req.body.admin || spartan.admin;
                spartan.slackHandle = req.body.slackHandle || spartan.slackHandle;

                // Save the updated document back to the database
                spartan.save((err, spartan) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(200).send({
                            editedDetails: spartan
                        });
                    }
                })
            }
        })
    }
    /** 
    * @method show instructor id
    * @param {String} req - instructor details
    * @param {String} res - status response
    * @return {Object} - returns an existing spartan object from the database
    **/
    static getInstructor(req, res) {
        Spartan.find({ instructor: true }, (err, result) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send(result);
            }
        });
    }
}

// exports ClassController
module.exports = SpartanController;
