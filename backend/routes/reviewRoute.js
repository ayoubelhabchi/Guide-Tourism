const express = require('express');
const router = express.Router();
const { extractUserId, reviewSave } = require('../controllers/ReviewController');
const { authenticateUser} = require("../middlewares/authMiddleware");
const reviewSwagger = require('../swagger/reviewSwagger');
router.swagger = reviewSwagger;



router.post("/feedback",authenticateUser, reviewSave);

module.exports = router;
