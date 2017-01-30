const Spartan = require("../models/spartan");
const spartanLib = require("../lib/spartan");
const moment = require("moment");

class SpartanController {
    /** 
        * @method makeSpartan
        * @param {String} req - spartan details
        * @param {String} res - status response
        * creates a new class object
    **/
    static makeSpartan(req, res) {
        spartanLib.createSpartan(req)
            .then(() => {
                res.status(200).send("Your new spartan has been created");
            })
            .catch(err => {
                res.status(400).send(err.message);
            });
    }

    /** 
        * @method showSpartanDetails
        * @param {String} req - spartan details
        * @param {String} res - status response
        * @return {Object} - returns an existing spartan object from the database
    **/
    static showAllSpartans(req, res) {
        spartanLib.getSpartanDetails()
            .then(result => {
                console.log(result);
                res.status(200).send({
                    spartanDetails: result
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err.message);
            });
    }
}

// exports ClassController
module.exports = SpartanController;
