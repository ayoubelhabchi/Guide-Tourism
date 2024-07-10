// controllers/tourController.js
const Tour = require('../models/Tour');
const cloudinary = require('../configs/cloudinary');
const Guide = require('../models/Guide');
const mongoose = require('mongoose');

exports.createTour = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: 'Tour image is required' });
        }

        const guide = await Guide.findOne({ user_id: req.user._id });

        if (!guide) {
            return res.status(404).json({ error: 'Guide not found' });
        }

        const resultImg = await cloudinary.uploader.upload(req.file.path, { folder: 'uploads' });

        const tour = new Tour({
            title: req.body.title,
            guide_id: guide._id,
            description: req.body.description,
            image: resultImg.secure_url, 
            category: req.body.category,
            duration: req.body.duration,
            price: req.body.price
        });
        await tour.save();

        res.status(200).send({ message: "Tour created successfully", data: tour });
    } catch (error) {
        console.log('error while creating tour :', error);
        res.status(400).send(error);
    }
};


exports.getGuideTours = async (req, res) => {
    try {
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to retrieve tours' });
        }

        const tours = await Tour.find({ guide_id: req.user._id });
        console.log("tours", tours);
        console.log("id", req.user._id); 

        if (tours.length === 0) {
            return res.status(404).json("No tours found.");
        }
        
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllTours = async(req,res) =>{
    try {
        const tours = await Tour.find()
        if (tours.length === 0) {
            return res.status(404).json("No tours found.");
        }
            return res.status(201).json(tours)
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        res.status(200).json(tour);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateTour = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'image', 'category', 'duration', 'price'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
      
        
        if (req.file && tour.image) {
            await cloudinary.uploader.destroy(getPublicId(tour.image));
        }

        
        if (req.file) {
            const resultImg = await cloudinary.uploader.upload(req.file.path, { folder: 'uploads' });
            tour.image = resultImg.secure_url;
        }

      
        updates.forEach(update => tour[update] = req.body[update]);
        await tour.save();

        res.status(200).json({ message: "Update successful!", data: tour });
    } catch (error) {
        console.error('Error updating tour:', error);
        res.status(400).json(error);
    }
};

function getPublicId(url) {
    const startIndex = url.lastIndexOf("/") + 1;
    const endIndex = url.lastIndexOf(".");
    return url.substring(startIndex, endIndex);
}


exports.deleteTour = async (req, res) => {
    try {
        
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to delete a tour' });
        }

        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        
        res.status(200).json({message:"tour deleted successfuly",data:tour});
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getGuideByTourId = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        console.log('Tour found:', tour);  

        if (!tour.guide_id || !mongoose.Types.ObjectId.isValid(tour.guide_id)) {
            return res.status(400).json({ error: 'Invalid guide_id in the tour' });
        }

        const guide = await Guide.findById(tour.guide_id)
                               .populate({
                                    path: 'user_id',
                                    model: 'User',
                                    select: 'firstName lastName email phone', 
                                });

        if (!guide) {
            return res.status(404).json({ error: 'Guide not found' });
        }

        const guideData = {
            firstName: guide.user_id.firstName,
            lastName: guide.user_id.lastName,
            email: guide.user_id.email,
            phone: guide.user_id.phone,
            specialization: guide.specialization, 
            bio: guide.bio,
            profile_picture: guide.profile_picture,
            rating: guide.rating
        };

        res.status(200).json(guideData);
    } catch (error) {
        console.error('Error fetching guide:', error); 
        res.status(500).json(error);
    }
};

