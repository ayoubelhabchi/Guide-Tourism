const multer = require("multer");
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {       
        let folder;
        switch (file.fieldname) {
            case 'profile_picture':
                folder = 'profile_picture';
                break;
            case 'identity':
                folder = 'identity';
                break;
            case 'certificate':
                folder = 'certificate';
                break;
            default:
                folder = '';
        }     
        const uploadPath = path.join('uploads', folder);
        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); 
    },
});

module.exports = multer({ storage:storage});