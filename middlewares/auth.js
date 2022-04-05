const jwt = require("jsonwebtoken");
const User = require("../models/users");

const getAuthenticatedUser = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded._id);
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
};

const authUser = async (req, res, next) => {
  try {
    const Authorization = req.header("Authorization");
    if (!Authorization) {
      return res.status(401).send("Auth-key not found");
    }
    const token = Authorization.replace("Bearer ", "");
    req.token = token;
    req.user = await getAuthenticatedUser(token);
    next();
    return;
  } catch (err) {
    return res
      .status(401)
      .send({ error: "Please authenticate", message: e.message });
  }
};

module.exports = authUser;
