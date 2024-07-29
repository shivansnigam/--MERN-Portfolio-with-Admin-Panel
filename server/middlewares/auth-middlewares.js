const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const secretKey = "WORDBESTMERNSERCIES";

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, TOKEN NOT PROVIDED" });
    }
    

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, secretKey);
        const userData = await User.findOne({ email: isVerified.email }).select({
            password: 0,
        });
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized, invalid token" });
    }
};

module.exports = authMiddleware;
