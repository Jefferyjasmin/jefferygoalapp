const asyncHandler = require("express-async-handler");
const Goal = require("../Model/goalModel");
const User = require("../Model/userModel");

//@desc Get goal
//@route Get /api/goals
//@access public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  if (goals) {
    res.status(200).json(goals);
  } else {
    res.status(401);
    throw new Error("Goal not found");
  }
});

//@desc get single goal
//@route get /api/goal/:id
//@access Private

const singleGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not find");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  if (goal) {
    res.status(200).json(goal);
  } else {
    res.status(401);
    throw new Error("Goal not found");
  }
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
    user: req.user.id,
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

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  console.log(req.body.text);
  const updatedGaol = await Goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    {
      new: true,
    }
  );
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

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
  singleGoal,
};
