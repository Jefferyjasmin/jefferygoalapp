const asyncHandler = require("express-async-handler");
const Goal = require("../Model/goalModel");

//@desc Get goal
//@route Get /api/goals
//@access public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
//@desc Post goal
//@route Post /api/goals
//@access public
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});
//@desc Put goal
//@route Put /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not find");
  }

  const updatedGaol = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGaol);
});
//@desc Delete goal
//@route Delete /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not find");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id  });
});
module.exports = {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
};
