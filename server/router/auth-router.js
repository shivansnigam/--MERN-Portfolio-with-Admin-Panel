const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers");
const { signupSchema, loginSchema } = require("../validators/auth-validators");  // Ensure loginSchema is imported
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middlewares")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);  

router.route("/user").get(authMiddleware, authcontrollers.user)

module.exports = router;
