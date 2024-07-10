const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: 'M6wETxUGnfTxn-RZfXxHR-Tj6PU' 
});

module.exports = cloudinary;
