const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const protectRoute = require("../middlewares/AuthMiddleware");

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.put("/update-profile", protectRoute, AuthController.updateProfile);
router.get("/check", protectRoute, AuthController.checkAuth);
module.exports = router;
