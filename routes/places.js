const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Place = require('../models/place');

// Create a new place
router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, location, openHours } = req.body;
    const images = req.files.map(file => file.path);
    const place = new Place({ name, description, location, openHours, images });
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a place by ID
router.get('/:id', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a place by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, description, location, openHours } = req.body;
    const images = req.files.map(file => file.path);
    const place = await Place.findByIdAndUpdate(req.params.id, {
      name, description, location, openHours, images
    }, { new: true });
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a place by ID
router.delete('/:id', async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.json({ message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
