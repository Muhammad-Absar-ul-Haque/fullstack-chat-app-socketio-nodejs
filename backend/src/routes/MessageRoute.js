const express = require("express");
const protectRoute = require("../middlewares/AuthMiddleware");
const MessageController = require("../controllers/MessageController");
const router = express.Router();

router.get("/users", protectRoute, MessageController.getUserForSlidebar);
router.get("/:id", protectRoute, MessageController.getMessages);
router.post("/send/:id", protectRoute, MessageController.sendMessage);
module.exports = router;
