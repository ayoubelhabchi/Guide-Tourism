const User = require("../models/User");
const Guide = require("../models/Guide");
const cloudinary = require('../configs/cloudinary');
const Booking = require("../models/Booking");

exports.getUserProfile = async function(req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.role === "user") {
      return res.json(user);
    } else if (user.role === "guide") {
      const guideInfo = await Guide.findOne({ user_id: userId });

      if (!guideInfo) {
        return res.status(404).json({ error: "Guide information not found" });
      }

      const userProfile = {
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
          phone: user.phone,
          age: user.age,
          country: user.country,
          role: user.role,
        },
        guide: {
          id: guideInfo.id,
          bio: guideInfo.bio,
          specialization: guideInfo.specialization,
          profile_picture: guideInfo.profile_picture,
          identity: guideInfo.identity,
          certificate: guideInfo.certificate,
          status: guideInfo.status,
        },
      };

      return res.status(200).json({ data: userProfile });
    } else {
      return res.status(400).json({ error: "Invalid user role" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getGuidesByIds = async function(req, res) {
  try {
    const guideIds = req.body.guideIds;
    console.log("guideIds", guideIds);

    if (!Array.isArray(guideIds) || guideIds.length === 0) {
      return res.status(400).json({ error: "Invalid guide IDs" });
    }

    // Find all unique guide IDs
    const uniqueGuideIds = [...new Set(guideIds)];
    const guides = await Guide.find({ _id: { $in: uniqueGuideIds } }).populate({
      path: 'user_id',
      model: 'User',
      select: 'firstName',
    });

    if (!guides || guides.length === 0) {
      return res.status(404).json({ error: "Guides not found" });
    }

    const guideMap = new Map();
    guides.forEach(guide => {
      guideMap.set(guide._id.toString(), guide);
    });

    const guideData = guideIds.map(id => {
      const guide = guideMap.get(id);
      return guide ? {
        firstName: guide.user_id.firstName,
      } : null;
    });

    return res.status(200).json(guideData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.switchProfile = async function(req, res) {
  try {
    const { id } = req.params;
    const { user } = req;

    if (!id || !user) {
      return res.status(400).json({ error: "Invalid request" });
    }

    if (user._id.toString() !== id) {
      return res
        .status(403)
        .json({ error: "Forbidden: You can only switch your own profile" });
    }

    const guideData = req.body;

 
    if (!guideData.bio || !guideData.specialization) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    
    const { profile_picture, identity, certificate } = req.files || {};
    if (!profile_picture || !identity || !certificate) {
      return res.status(400).json({ error: "Missing required files" });
    }

   
    const uploadPromises = [
      cloudinary.uploader.upload(profile_picture[0].path, { folder: 'uploads/profile_picture' }),
      cloudinary.uploader.upload(identity[0].path, { folder: 'uploads/identity' }),
      cloudinary.uploader.upload(certificate[0].path, { folder: 'uploads/certificate' })
    ];
    const [profilePictureResult, identityResult, certificateResult] = await Promise.all(uploadPromises);

   
    await User.findByIdAndUpdate(id, { role: "guide" });


    const newGuide = new Guide({
      user_id: id,
      bio: guideData.bio,
      specialization: guideData.specialization,
      profile_picture: profilePictureResult.secure_url,
      identity: identityResult.secure_url,
      certificate: certificateResult.secure_url,
    });

    const savedGuide = await newGuide.save();

    res.status(200).json({
      message: "Your profile updated successfully. Wait for Admin Approval!",
      guide: savedGuide,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  try {
    if (!userId) {
      return res.status(400).json({ error: "Invalid request" });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ data: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getMyOrders = async(req, res)=>{
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ user: userId })
      .populate('tour')
      .populate('camping');

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Error fetching user orders" });
  }
}