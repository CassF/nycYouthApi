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
                // moment allows user to input the date using the 'DD/MM/YYYY' format
                req.body.dob = moment(req.body.dob, 'DD/MM/YYYY', false).format()
                Spartan.create(req.body, (err, result) => {
                    console.log("createSpartan");
                    console.log(req.body);
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        )
    }

    /** 
        * @method getSpartanDetails
        * retrieves a spartan object from the database and displays it
    **/

    // SHOW
    static getSpartanDetails() {
        return new Promise(
            (resolve, reject) => {
                Spartan.find((err, result) => {
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

}

module.exports = SpartanLib;