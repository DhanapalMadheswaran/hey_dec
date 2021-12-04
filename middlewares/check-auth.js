const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (req.headers.authorization.startsWith("Bearer ")) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
      req.userData = { email: decodedToken.email, userId: decodedToken.userId };
      next();
    } else {
      res.status(401).json({ message: "Auth failed!" });
    }
  } catch (error) {
    res.status(401).json({ message: "Token Expired!" });
  }
};
