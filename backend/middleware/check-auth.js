const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "nodeRestApi");
        req.userData = {
          email: decodedToken.email,
          userId: decodedToken.userId,
          name: decodedToken.name,
          lastname : decodedToken.lastname,
          permissionLevel: decodedToken.permissionLevel,
        };
        next();
    } catch (error) {
        res.status(401).json({message: "You are not authenticated!"});
    }
};
