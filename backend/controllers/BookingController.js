const Booking = require("../models/Booking");
const Tour = require("../models/Tour");
const Camping = require("../models/Camping");
const User = require("../models/User");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.getCheckoutSession = async (req, res) => {
  try {
    const { userId, tourId, campingId, amount } = req.body;

    let bookingData = { user: userId, amount, paymentStatus: "pending" };
    let productDetails = {};

    if (tourId) {
      const tour = await Tour.findById(tourId);
      if (!tour) return res.status(404).json({ message: "Tour not found" });

      bookingData.tour = tourId;
      productDetails = {
        name: tour.title,
        description: tour.description,
        price: tour.price,
      };
    }

    if (campingId) {
      const camping = await Camping.findById(campingId);
      if (!camping)
        return res.status(404).json({ message: "Camping not found" });

      bookingData.camping = campingId;
      productDetails = {
        name: camping.name,
        description: camping.description,
        price: camping.price,
      };
    }

    // console.log("tour",bookingData);

    const booking = new Booking(bookingData);
    await booking.save();

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://127.0.0.1/success.html",
      cancel_url: "http://127.0.0.1/cancel.html",
      customer_email: user.email,
      client_reference_id: booking._id.toString(),
      line_items: [
        {
          price_data: {
            currency: "mad",
            product_data: {
              name: productDetails.name,
              description: productDetails.description,
            },
            unit_amount: productDetails.price * 100,
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        description: "Payment for booking",
      },
    });

    booking.paymentStatus = "pending";
    await booking.save();

    res
      .status(200)
      .json({
        url: session.url,
        message: "Checkout session created successfully",
      });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Error creating checkout session" });
  }
};

exports.paymentSuccess = (req, res) => {
  res.status(200).json({ message: "Payment succeeded" });
};

exports.paymentFailed = (req, res) => {
  res.status(500).json({ message: "Payment failed" });
};
