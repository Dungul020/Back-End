const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  openHours: { type: String, required: true },
  images: { type: [String], required: true },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
