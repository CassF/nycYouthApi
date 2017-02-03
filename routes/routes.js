const express = require("express");
const router = express.Router();
const spartanController = require("../controllers/spartanController");

router.route("/register")
    .post(spartanController.registerSpartan);

router.route("/spartans")
    .get(spartanController.showAllSpartans);

router.route("/spartan/:id")
    .get(spartanController.showOneSpartan);

router.route("/spartan/:id/edit")
    .put(spartanController.editSpartan);

module.exports = router;