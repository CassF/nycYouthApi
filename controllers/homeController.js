
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
const Registrant = require("../models/registrant");

class homeController {

    // static createCharge(req, res) {
    //     stripe.customers.create({
    //         email: req.body.stripeEmail
    //     }).then((customer) => {
    //         return stripe.customers.createSource(customer.id, {
    //             source: req.body.stripeToken
    //         });
    //     }).then((source) => {
    //         return stripe.charges.create({
    //             amount: 100,
    //             currency: 'gbp',
    //             customer: source.customer
    //         });
    //     }).then((charge) => {
    //         req.body.registrant.customer = source.customer;
    //         Registrant.create(req.body.registrant, function (err, registrant) {
    //             if(err) {
    //                 res.status(400).send(err.message);
    //             } else {
    //                 res.status(200).send({
    //                     resgisteredPerson: registrant
    //                 })
    //             }
    //         })
    //         res.send(charge);
    //     }).catch((err) => {
    //         res.send(err.message)
    //     });
    // }

    static createCharge(req, res) {
        let amount = 20000;
        stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken
        }).then(customer =>
            stripe.charges.create({
                amount,
                description: `${req.body.registrant.firstname} ${req.body.registrant.lastname} - ${req.body.registrant.district}`,
                currency: "gbp",
                customer: customer.id,
                receipt_email: req.body.stripeEmail

            })).then((charge) => {
                req.body.registrant.customer = charge.customer;
                Registrant.create(req.body.registrant, function (err, registrant) {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(200).send({
                            resgisteredPerson: registrant
                        })
                    }
                })
            }).catch((err) => {
                res.send(err.message)
            });
    }
}

module.exports = homeController;
