const express = require("express");
const router = express.Router();
const youthController = require("../controllers/youthController");
const paymentController = require("../controllers/paymentController");
const paymentLib = require("../lib/payment");
const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");

router.route("/home")
.post(homeController.createCharge);

router.route("/security")
    .post(loginController.verifyPassword);

router.route("/youth")
    .post(youthController.createYouth)
    .get(youthController.showAllYouth);

router.route("/youth/females")
    .get(youthController.showAllFemales);

router.route("/youth/males")
    .get(youthController.showAllMales);

router.route("/youth/:id")
    .get(youthController.showOneYouth);

router.route("/payments")
    .post(paymentController.newPayment);

router.route("/payments/:id")
    .get(paymentLib.showPayments);

router.route("/totalpayment")
    .get(youthController.totalPayment);

module.exports = router;
