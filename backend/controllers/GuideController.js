
// const Guide = require("../models/Guide");
// const User = require("../models/User");

// const GuideController = {

//   applyForGuide: async (req, res) => {
//     try {
//       const { userId } = req.body;
//       const { bio, specialization, profile_picture, identity, certificate } = req.body;
      
//       await User.findByIdAndUpdate(userId, { role: 'guide' });
      
//       const newGuide = {
//         user_id: userId,
//         bio,
//         specialization,
//         profile_picture,
//         identity,
//         certificate,
//       };

//       await Guide.create(newGuide);
//       res.status(200).send(newGuide);
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   },

//   updateGuide: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const updatedData = req.body;
//       const updatedGuide = await Guide.findByIdAndUpdate(id, updatedData, { new: true });
//       res.status(200).send(updatedGuide);
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   },

//   deleteGuide: async (req, res) => {
//     try {
//       const { id } = req.params;
//       await Guide.findByIdAndDelete(id);
//       res.status(200).send("Guide deleted successfully");
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   },

// };

// module.exports = GuideController;
