const fs =  require("fs");
const Camping = require("../models/Camping");

module.exports.createComping = async (req, res) => {
  const {
    name,
    location,
    start_date,
    end_date,
    group_member,
    isPrivate,
    price,
    description,
  } = req.body;
  try {
   
    if (!req.file) {
      return res.status(400).send({ error: 'Tour image is required' });
  }
    const existingCamping = await Camping.findOne({ name });
    if (existingCamping) {
      return res.status(400).json({ error: 'A camping event already exists' });
    }
    const imagePath = req.file.path;

    const newCamping = new Camping({
      name,
      location,
      start_date,
      end_date,
      image: imagePath, 
      group_member,
      isPrivate,
      price,
      description,
    });

    await newCamping.save();

    res.status(200).json({
      message: 'Camping event added successfully',
      data: newCamping.toObject({ getters: true, versionKey: false }),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.getAllCampings = async (req, res) => {
  try {
    const campings = await Camping.find();
    res.status(200).json(campings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateCamping = async (req, res) => {
  try {
    const campingId = req.params.campingId;
    const updates = req.body;
    const updatedImage = req.file; 
    let camping = await Camping.findById(campingId);
    if (!camping) {
      return res.status(404).send({ error: "Camping not found" });
    }
    camping.set(updates);
    if (updatedImage) {
      if (camping.image) {
        fs.unlinkSync(camping.image); 
      }
     
      camping.image = updatedImage.path;
    }
    const updatedCamping = await camping.save();

    res.status(200).json({ message: "Camping edited successfully", data: updatedCamping });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports.getCamping = async (req, res) => {
  try {
    const camping = req.params.campingId;
    const camp = await Camping.findById(camping)
    if (!camp) {
      return res.status(404).send({ error: "Camping not found" });
    }
    res
      .status(200)
      .json(camp);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.deleteCampingById = async (req, res) => {
  try {
    const camping = await Camping.findByIdAndDelete(req.params.id);
    if (!camping) {
      return res.status(404).json({ message: "Product not found" });
    }
    //res.json(camping);
    res.status(200).json({ message: "Camping deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.sortCampingsAscending = async (req, res) => {
  try {
    const sortedCampings = await Camping.find().sort({ price: 1 }).exec();
    res
      .status(200)
      .json({ message: "sort Ascending  done success", data: sortedCampings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.sortCampingsDescending = async (req, res) => {
  try {
    const sortedCampingsDescending = await Camping.find()
      .sort({ price: -1 })
      .exec();
    res.status(200).json({
      message: "sort Decending  done success",
      data: sortedCampingsDescending,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.filterCampingByName = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    const filter = { name: name };
    const filteredCampings = await Camping.find(filter);
    if (filteredCampings.length === 0) {
      return res.status(404).json({ message: "Camping not found." });
    }
    res
      .status(200)
      .json({ message: "filter done successfuly ", data: filteredCampings });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: err.message });
  }
};
