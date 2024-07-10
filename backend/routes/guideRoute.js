const express = require("express");
const router = express.Router();
const GuideController = require("../controllers/GuideController");
const { authenticateUser } = require("../middlewares/authMiddleware");



router.get("/show-profile/:id", authenticateUser, GuideController.showProfile);
router.get("delete-guide/:id", authenticateUser,GuideController.deleteGuide);

module.exports = router;
