const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Model/userModel");
const asyncHandler = require("express-async-handler");

//@desc Register new users
//@route Post /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "please complete all fields" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Has password

  const salt = await bcrypt.genSalt(10);
  const hashedPassowrd = await bcrypt.hash(password, salt);
  // create users
  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassowrd,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Authenticate a users
//@route Post /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // find users by email
  const user = await User.findOne({ email });
  // check password
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid");
  }
});

//@desc Get user data
//@route Get /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  return res.status(200).json(req.user);
});
// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
