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
}

module.exports = youthController;