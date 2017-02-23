const Payment = require("../models/payment");

class paymentController {

    static createPayment(req) {
        return new Promise(
            (resolve, reject) => {
                Payment.create(req.body, function (err, payment) {
                    console.log(payment);
                    if (err) {
                        reject(err);
                    } else {
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

}

module.exports = paymentController;