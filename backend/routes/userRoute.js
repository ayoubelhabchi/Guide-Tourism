const express = require("express");
const router = express.Router();
const UserController = require('../controllers/UserController');
const multerMiddleware = require("../middlewares/MulterConfig");
const { authenticateUser,isGuide } = require("../middlewares/authMiddleware");

const userSwagger = require('../swagger/userSwagger');
router.swagger = userSwagger;




router.get("/user-profile",authenticateUser,  UserController.getUserProfile);
router.post('/guides-by-ids', UserController.getGuidesByIds);

router.put("/switch-profile/:id",authenticateUser,multerMiddleware.fields([
      { name: "profile_picture", maxCount: 1 },
      { name: "identity", maxCount: 1 },
      { name: "certificate", maxCount: 1 },
    ]),UserController.switchProfile
  );
router.put("/update/:id", authenticateUser,/* isGuide,*/ UserController.updateUser);

router.get("/myorders",authenticateUser, UserController.getMyOrders);

module.exports = router;
