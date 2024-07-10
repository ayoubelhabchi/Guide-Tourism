const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    rating: { type: Number },
    comment: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;