const tourModel = require("../models/tour.model");

let tours = [];

exports.getTours = async (req, res) => {
  try {
    const Tours = await tourModel.find();
    return res.status(200).json({
      data: Tours,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const Tourid = req.params.id;
    const tour = await tourModel.findById(Tourid);
    if (!tour)
      return res.status(404).json({ message: `tour with ${Tourid}not found` });
    return res.status(200).json({ data: tour });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
exports.postTour = async (req, res) => {
  try {
    const reBody = req.body;
    const result = await tourModel.create(reBody);
    return res.status(201).json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tourid = req.params.id;
    const reqbody = req.body;
    const tour = await tourModel.findByIdAndUpdate(
      tourid,
      reqbody,
      { new: true, runValidators: true }
    );
    return res.status(200).json({
      data: tour,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
exports.deleteTourById = (req, res) => {
  try{
    const Tourid = req.params.id;
    const tour = tourModel.findByIdAndDelete(Tourid);
    return res.status(204).json({
      data: tour,
    });
  }catch(error){
    return res.status(500).json({
      message: error.message,
    });
  }
};
