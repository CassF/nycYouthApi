const Spartan = require("../models/spartan");
const moment = require("moment");

//SpartanLib class that has promises to handle new and create spartans
class SpartanLib {

    /** 
        * @method createSpartan
        * @param {String} req - spartan details
        * creates a spartan object and stores it in the database
    **/

    // CREATE
    static createSpartan(req) {
        return new Promise(
            (resolve, reject) => {
                // moment allows user to input the date using the "YYYY/MM/DD" format
                req.body.dob = moment(req.body.dob).format("YYYY/MM/DD");
                Spartan.create(req.body, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        )
    }

    /** 
        * @method getSpartanDetails
        * retrieves a spartan object from the database where instructor boolean is false and displays it
    **/
    // SHOW ALL SPARTANS
    static getSpartanDetails() {
        return new Promise(
            (resolve, reject) => {
                Spartan.find({ instructor: false }, (err, result) => {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(result);
                    }
                });
            }
        )
    }

    /** 
    * @method getSpartanDetails
    * @param {String} req - spartan id
    * retrieves a spartan object from the database and displays it
    **/
    // SHOW DETAILS OF ONE SPARTAN
    static getASpartansDetails(req) {
        return new Promise(
            (resolve, reject) => {
                Spartan.findById({ _id: req.params.id }, (err, spartan) => {
                    if (err) reject(err);
                    if (!spartan) reject("spartan not found");
                    resolve(spartan);
                });
            }
        )
    }

    /** 
    * @method editOneSpartan
    * @param {String} req - spartan id
    * retrieves a spartan object from the database
    * displays a form to edit details of the spartan
    * saves the new details to the database
    **/
    // EDIT DETAILS OF ONE SPARTAN
    static editOneSpartan(req, res) {
        return new Promise(
            (resolve, reject) => {
                Spartan.findById(req.params.id, (err, spartan) => {
                    // Handle any possible database errors
                    if (err) {
                        reject(err)
                    } else {
                        // Update each attribute with any possible attribute that may have been submitted in the body of the request
                        // If that attribute isn't in the request body, default back to whatever it was before.
                        spartan.firstName = req.body.firstName || spartan.firstName;
                        spartan.lastName = req.body.lastName || spartan.lastName;
                        spartan.dob = req.body.dob = moment(req.body.dob).format("YYYY/MM/DD") || spartan.dob;
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
                                reject(err)
                            } else {
                                resolve(spartan);
                            }
                        });
                    }
                });
            }
        )

    }
}

module.exports = SpartanLib;