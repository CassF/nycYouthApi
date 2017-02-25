const Youth = require("../models/youth");

class youthController {
    static createYouth(req, res) {
        Youth.create(req.body, function (err, youth) {
            if (err) {
                res.status(400).send(err.message);
            } else {
                res.status(200).send({
                    registeredYouth: youth
                })
            }
        });
    }

    static showAllYouth(req, res) {
        Youth.find((err, result) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    allYouth: result
                })
            }
        });
    }

    static showOneYouth(req, res) {
        Youth.findById({ _id: req.params.id }, (err, youth) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    youthsDetails: youth
                })
            }
        });
    }

    /** 
    * @method showAllFemales
    * @param {String} req - spartan details
    * @param {String} res - status response
    * @return {Object} - returns an existing spartan object from the database
**/
    static showAllFemales(req, res) {
        Youth.find({ female: true }, (err, result) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    femaleYouth: result
                })
            }
        });
    }

    /** 
* @method showAllMales
* @param {String} req - spartan details
* @param {String} res - status response
* @return {Object} - returns an existing spartan object from the database
**/
    static showAllMales(req, res) {
        Youth.find({ male: true }, (err, result) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    maleYouth: result
                })
            }
        });
    }

    static totalPayment(req, res) {
        Youth.aggregate([{ $group: { _id: null, amount: { $sum: "$balance" } } }], (err, docs) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    allPayments: docs
                })
            }
        });
    }
}

module.exports = youthController;