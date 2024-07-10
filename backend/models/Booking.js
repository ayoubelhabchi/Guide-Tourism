// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tour: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
  camping: { type: mongoose.Schema.Types.ObjectId, ref: "Camping" },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' }
});

module.exports = mongoose.model("Booking", bookingSchema);
