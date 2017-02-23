const Payment = require("../lib/payment");

class PaymentController {
    static newPayment(req, res) {
        Payment.createPayment(req)
            .then((result) => {
                Payment.addPaymentToBalance(req, res)
            })
            .catch(err => {
                res.status(400).send(err.message);
            });
    }

}

module.exports = PaymentController;