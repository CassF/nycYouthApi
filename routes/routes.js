const express = require("express");
const router = express.Router();
const spartanController = require("../controllers/spartanController");

//"/spartans/new"
router.route("/register")
    .post(spartanController.registerSpartan);

router.route("/spartans")
    .get(spartanController.showAllSpartans);

//"/spartans/:id"
router.route("/spartan/:id")
    .get(spartanController.showOneSpartan);

// "/spartans/:id"
router.route("/spartan/:id/edit")
    .put(spartanController.editSpartan);

router.route("/instructors")
    .get(spartanController.getInstructor);
    
module.exports = router;