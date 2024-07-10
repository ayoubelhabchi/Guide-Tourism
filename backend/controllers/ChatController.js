const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const Message = require('../models/mongoDEMO'); // Assuming you have a Chat model for conversations
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);


function getUserIdFromToken(token) {
  try {
    const decoded = jwt.verify(token, 'GAHDYSB');
    return decoded.userid;
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
}

function initializeSocket(server) {
  const io = socketIO(server);

  io.on('connection', async (socket) => {
    console.log('User connected:', socket.id);

    socket.on('private message', async (data) => {
      console.log('Received private message:', data);

      if (!data.token) {
        console.error('Token missing in private message data:', data);
        return;
      }

      const token = data.token;
      const userId = getUserIdFromToken(token);

      if (!userId) {
        console.error('Invalid token or token missing.');
        return;
      }

      try {
        const conversationId = [userId, data.recipient].sort().join('-');
        const messages = await Message.findOneAndUpdate(
          { conversationId: conversationId },
          { $push: { messages: { user: userId, recipient: data.recipient, text: data.message } } },
          { upsert: true, new: true }
        );
        
        console.log('Private message saved to the database');

        io.to(data.recipient).emit('private message', { user: userId, message: data.message });
      } catch (err) {
        console.error('Error saving private message to database:', err);
      }
    });

    socket.on('get messages', async (data) => {
      try {
        const conversationId = [data.sender, data.receiver].sort().join('-');
        const chat = await Message.findOne({ conversationId: conversationId });
        if (chat) {
          io.to(socket.id).emit('retrieved messages', chat.messages);
        } else {
          io.to(socket.id).emit('retrieved messages', []);
        }
      } catch (err) {
        console.error('Error retrieving messages between users:', err);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
}

module.exports = initializeSocket;
