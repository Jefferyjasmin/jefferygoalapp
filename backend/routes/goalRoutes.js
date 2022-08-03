const express = require("express");
const router = express.Router();
const {
  getGoals,
  updateGoals,
  postGoals,
  deleteGoals,
} = require("../controller/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, postGoals);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoals);
// router.get("/", getGoals);
// router.post("/", postGoals);
// router.put("/:id", putGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
