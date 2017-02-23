const express = require("express");
const router = express.Router();
const youthController = require("../controllers/youthController");
const paymentController = require("../controllers/paymentController");

router.route("/youth")
    .post(youthController.createYouth)
    .get(youthController.showAllYouth);

router.route("/youth/:id")
    .get(youthController.showOneYouth);

router.route("/payments")
    .post(paymentController.createPayment);

module.exports = router;
