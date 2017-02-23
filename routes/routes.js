const express = require("express");
const router = express.Router();
const youthController = require("../controllers/youthController");
const paymentController = require("../controllers/paymentController");

router.route("/youth")
    .post(youthController.createYouth);

router.route("/youth/:id")
    .put(youthController.addPaymentToBalance);

router.route("/payments")
    .post(paymentController.createPayment);

module.exports = router;
