const express = require('express');
const AdminController = require("../controllers/AdminController");
const { authenticateAdmin, isAdmin } = require('../middlewares/adminMiddleware');
const router = express.Router();
const adminSwagger = require('../swagger/adminSwagger');

router.swagger = adminSwagger;


//login & register
router.post('/login', AdminController.loginAdmin);
router.post('/register', AdminController.createAdmin);

//user management 
router.get("/allUsers", authenticateAdmin, isAdmin, AdminController.getAllUsers);
router.delete("/delete/:id", authenticateAdmin, isAdmin ,AdminController.deleteUser);

//guides management
router.get("/allguides", authenticateAdmin, isAdmin, AdminController.getAllGuides);
router.get('/guide/:id',authenticateAdmin,AdminController.getGuideById);
router.put('/approval/:id/status', authenticateAdmin, isAdmin, AdminController.updateGuideStatus);

module.exports = router;



