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

    // static showIndividualPayments(req, res) {
    //     Payment.showPayments(req, res)
    //         .then(payments => {
    //             console.log(payments);
    //             res.status(200).send({
    //                 success: "worked"
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(400).send(err.message);
    //         });
    // }

}

module.exports = PaymentController;