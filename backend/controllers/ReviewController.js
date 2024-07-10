const JWT = require('jsonwebtoken');
const Review = require('../models/Review')
const User = require('../models/User')



exports.extractUserId = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    const TokenId = token.replace('Bearer ', '');
    JWT.verify(TokenId, 'GAHDYSB', async (error, decoded) => {
        
        if (error) {
            return res.status(401).json({ error: 'Invalid token' });
        } else {
            req.userId = decoded.userid;

            try {
                const user = await User.findById(decoded.userid);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                next();
            } catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        }
    });
};


exports.reviewSave = async (req, res) => {
    try {
        const{ userId, tourId} = req.body;

        console.log("userId",userId, "tourId",tourId);
        const review = new Review({
            user_id: userId,
            tour_id: tourId, 
            rating: req.body.rating,
            comment: req.body.comment
        });

        await review.save();

        res.status(200).json({message: "Your Comment Is Submitted"});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Internal Server Error"});
    }
}
