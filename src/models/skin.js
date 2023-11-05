const mongoose = require("mongoose");

const skinSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    enum: {
      values: [
        "dark red",
        "pale red",
        "red",
        "blue",
        "dark blue",
        "orange",
        "pale orange",
        "yellow",
        "pale green",
        "green",
        "grey",
        "white",
        "black",
        "pink",
        "pale pink",
        "dark pink",
        "purple",
        "dark purple",
      ],
      message: "Color not available",
    },
    required: true,
  },
});

const Skins = mongoose.model("skins", skinSchema);
const PurchasedSkins = mongoose.model("myskins", skinSchema);

module.exports = {
  Skins,
  PurchasedSkins,
};
