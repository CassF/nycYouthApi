const Payment = require("../models/payment");
const Youth = require("../models/youth");

class PaymentLib {

    static createPayment(req) {
        return new Promise(
            (resolve, reject) => {
                Payment.create(req.body, function (err, payment) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        )
    }

    static addPaymentToBalance(req, res) {
        return new Promise(
            (reject, resolve) => {
                Youth.findByIdAndUpdate(req.body.youth_Id, { $inc: { balance: req.body.amount } }, function (err, youth) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        )
    }
    static showPayments(req, res) {
        let payment_Id = req.params.id
        Payment.find({ youth_Id: payment_Id }, (err, payments) => {
            if (err) {
                res.status(400).send(err.message);
            }
            else {
                res.status(200).send({
                    youthsPaymentDetails: payments
                })
            }
        });
    }

}

module.exports = PaymentLib;