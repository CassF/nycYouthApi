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
                        resolve();
                    }
                });
            }
        )
    }

}

module.exports = paymentController;