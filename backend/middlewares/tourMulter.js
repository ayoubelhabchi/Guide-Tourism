// multer for tour images
const multerTour = require("multer");
const fs = require('fs');
const path = require('path');

const tourStorage = multerTour.diskStorage({
    destination: function (req, file, cb) {       
        const uploadPath = path.join('uploads', 'tour');
        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); 
    },
});

const uploadTour = multerTour({ storage: tourStorage });

module.exports = { uploadTour };
