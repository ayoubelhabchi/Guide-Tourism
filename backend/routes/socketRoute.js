const express = require('express');
const router = express.Router();


router.get('/chat/:token', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html')); 
    });



module.exports = router;
