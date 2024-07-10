const express = require("express");
const router = express.Router();
const tourController = require('../controllers/TourController');
const {authenticateUser,isGuide} = require('../middlewares/authMiddleware');
const {uploadTour} = require("../middlewares/tourMulter");
const tourSwagger = require('../swagger/tourSwagger');
router.swagger = tourSwagger;

router.post('/create',authenticateUser,isGuide,uploadTour.single("image"), tourController.createTour);
router.get('/allGuideTours', authenticateUser,tourController.getGuideTours);
router.get('/allTours',tourController.getAllTours )
router.get('/getTour/:id', authenticateUser,tourController.getTourById);
router.put('/updateTour/:id', authenticateUser, isGuide, uploadTour.single('image'), tourController.updateTour);
router.get('/tour/:id/guide',tourController.getGuideByTourId);
router.delete('/deleteTour/:id', authenticateUser,isGuide,tourController.deleteTour);

module.exports = router;
