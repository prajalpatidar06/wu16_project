const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    EmailVerified: { type: Boolean, default: false },
    Password: { type: String, required: true },
    EmailVerifyToken: { type: String },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  await user.save();
  return token;
};

UserSchema.statics.findByCredentials = async function (Email, Password) {
  const user = await User.findOne({ Email });
  if (!user) {
    throw new Error("Unable to find the user");
  }
  const isMatch = await bcrypt.compare(Password, user.Password);
  if (!isMatch) {
    throw new Error("Incorrect Password");
  }
  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
