const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a tour name"],
  },
  price: {
    type: Number,
    required: [true, "Please add a tour price"],
  },
  description: {
    type: String,
  },
  plan: {
    type: String,
    required: [true, "Please add a tour plan"],
    enum: {
      values: ["silver", "gold", "diamond"],
      message: "You must select silver, gold or diamond",
    },
  },
});

const tourModel = mongoose.model("tour", tourSchema);
module.exports = tourModel;
