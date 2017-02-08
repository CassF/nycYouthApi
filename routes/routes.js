const express = require("express");
const router = express.Router();
const spartanController = require("../controllers/spartanController");

//"/spartans/new"
router.route("/spartans/new")
    .post(spartanController.registerSpartan);

router.route("/spartans")
    .get(spartanController.showAllSpartans);

//"/spartans/:id"
router.route("/spartans/:id")
      .get(spartanController.showOneSpartan)
      .put(spartanController.editSpartan);
// "/spartans/:id"
// router.route("/spartans/:id/edit")
//     .put(spartanController.editSpartan);

router.route("/instructors")
    .get(spartanController.getInstructor);
    
module.exports = router;

