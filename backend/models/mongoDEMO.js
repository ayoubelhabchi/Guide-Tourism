const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  conversationId: { type: String, unique: true }, // Unique identifier for the conversation
  messages: [{
    user: String,
    recipient: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
  }]
});

const Message = mongoose.model('Message', chatSchema);

module.exports = Message;
