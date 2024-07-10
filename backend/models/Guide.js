const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, required: true },
    specialization: { type: String, required: true },
    profile_picture: { type: String, required: true},
    identity: { type: String, required: true },
    certificate: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    rating: { type: Number }
});

const Guide = mongoose.models.Guide || mongoose.model('Guide', guideSchema);


module.exports = Guide;