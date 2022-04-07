const User = require("../models/users");
const bcrypt = require("bcrypt");
const { regex } = require("../utils/regex");

module.exports.sign_up = async (req, res) => {
  try {
    if (!regex("email", req.body.Email)) {
      return res.send({ success: false, message: "Email is not valid" });
    }
    const isEmailPresent = await User.countDocuments({ Email: req.body.Email });
    if (isEmailPresent) {
      return res.send({ success: false, message: "Email already registered" });
    }
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(user.Password, salt);
    await user.save();
    const token = await user.generateAuthToken();
    return res.send({
      message: true,
      message: "User sign-up successfully",
      user,
      token,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports.sign_in = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.Email,
      req.body.Password
    );
    if (user) {
      const token = await user.generateAuthToken();
      return res.send({
        success: true,
        message: "User sign-in successfully",
        user,
        token,
      });
    } else {
      return res.send({
        success: false,
        message: "User not exist",
      });
    }
  } catch (err) {
    return res.status(400).send({ success: false, message: err.message });
  }
};

module.exports.me = (req, res) => {
  try {
    return res.send({ success: true, user: req.user });
  } catch (err) {
    return res.status(400).send({ success: false, message: err.message });
  }
};
