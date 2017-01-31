const express = require("express");
const router = express.Router();
const spartanController = require("../controllers/spartanController");


router.route("/register")
    .post(spartanController.makeSpartan);

router.route("/spartan")
    .get(spartanController.showAllSpartans);

router.route("/spartan/:id")
    .get(spartanController.showOneSpartans);

router.route("/spartan/:id/edit")
    .put(spartanController.editSpartan);

module.exports = router;