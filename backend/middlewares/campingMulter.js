// multer for tour images
const multerCamping = require("multer");
const fs = require('fs');
const path = require('path');

const campingStorage = multerCamping.diskStorage({
    destination: function (req, file, cb) {       
        const uploadPath = path.join('uploads', 'camping');
        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); 
    },
});

const uploadCamping = multerCamping({ storage: campingStorage });

module.exports = { uploadCamping };
