const express = require('express');
const router = express.Router();
const CampingController=require("../controllers/CampingController");
const {authenticateAdmin,isAdmin} = require('../middlewares/adminMiddleware')
const { authenticateUser } = require("../middlewares/authMiddleware");
const campingSwagger = require('../swagger/campingSwagger');
const {uploadCamping} = require ('../middlewares/campingMulter');


router.swagger = campingSwagger;


router.post("/add", authenticateAdmin, isAdmin,uploadCamping.single("image") ,CampingController.createComping);
router.get("/show",/* authenticateAdmin, isAdmin,authenticateUser,*/ CampingController.getAllCampings);
router.put("/update/:campingId",authenticateAdmin, isAdmin,CampingController.updateCamping);
router.get("/get/:campingId",/*authenticateAdmin, isAdmin,*/authenticateUser,CampingController.getCamping);
router.delete("/delete/:id",authenticateAdmin, isAdmin,CampingController.deleteCampingById);
router.get("/sortCampingsAscending", authenticateAdmin, isAdmin,CampingController.sortCampingsAscending);
router.get("/sortCampingsDescending", authenticateAdmin, isAdmin,CampingController.sortCampingsDescending);
router.get('/filter-name', authenticateAdmin, isAdmin,CampingController.filterCampingByName);
module.exports = router;