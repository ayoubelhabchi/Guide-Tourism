const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    availability: { type: Boolean },
});

module.exports = mongoose.model('Chat', chatSchema);
