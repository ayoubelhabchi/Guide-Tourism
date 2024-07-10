const express = require("express");
const BookingController = require("../controllers/BookingController");
const { authenticateUser } = require("../middlewares/authMiddleware");
const router = express.Router();

const bookingSwagger = require('../swagger/bookingSwagger');
router.swagger = bookingSwagger;



router.post("/book", BookingController.getCheckoutSession);
router.post("/payment-success",authenticateUser, BookingController.paymentSuccess);
router.post("/payment-failed",authenticateUser, BookingController.paymentFailed);

module.exports = router;
