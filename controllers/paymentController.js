const Payment = require("../lib/payment");

class PaymentController {
    static newPayment(req, res) {
        Payment.createPayment(req)
            .then((res) => {
                Payment.addPaymentToBalance(req, res)
            })
            .catch(err => {
                res.status(400).send(err.message);
            });
    }

}

module.exports = PaymentController;