const Payment = require("../models/payment");
const Youth = require("../models/youth");

class PaymentLib {

    static createPayment(req) {
        return new Promise(
            (resolve, reject) => {
                Payment.create(req.body, function (err, payment) {
                    console.log(payment);
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

}

module.exports = PaymentLib;