const asyncHandler = require("express-async-handler");
//@desc Get goal
//@route Get /api/goals
//@access public
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});
//@desc Post goal
//@route Post /api/goals
//@access public
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
});
//@desc Put goal
//@route Put /api/goals/:id
//@access Private
const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
//@desc Delete goal
//@route Delete /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
