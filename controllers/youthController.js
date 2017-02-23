const Youth = require("../models/youth");

class youthController {
    //promise to handle the creation of a new user
    static createYouth(req) {
        return new Promise(
            (resolve, reject) => {
                Youth.create(req.body, function (err, youth) {
                    console.log(youth);
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        )
    }

    static addPaymentToBalance(req, result) {
        return new Promise(
            (reject, resolve) => {
                //console.log(resolveArray);
                Youth.findByIdAndUpdate(result.id, { $inc: { balance: req.body.amount } }, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                        console.log("findbyidandupdate worked");
                    }
                });
            }
        )
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
}

module.exports = youthController;