const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
    await mongoose.connect(DB_CONNECTION_STRING, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
