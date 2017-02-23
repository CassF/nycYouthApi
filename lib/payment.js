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
                //console.log(resolveArray);
                Youth.findByIdAndUpdate(payment.youth_Id, { $inc: { balance: req.body.amount } }, function (err, res) {
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

module.exports = PaymentLib;