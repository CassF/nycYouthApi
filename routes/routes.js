const express = require("express");
const router = express.Router();
const spartanController = require("../controllers/spartanController");

//"/spartans/new"
router.route("/spartans")
    .post(spartanController.registerSpartan)
    .get(spartanController.showAllSpartans);

//"/spartans/:id"
router.route("/spartans/:id")
      .get(spartanController.showOneSpartan)
      .put(spartanController.editSpartan);

router.route("/instructors")
    .get(spartanController.getInstructor);
    
module.exports = router;