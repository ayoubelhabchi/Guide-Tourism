const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  guide_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guide",
    required: true,
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Tour", tourSchema);
