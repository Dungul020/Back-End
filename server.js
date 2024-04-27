const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect('mongodb+srv://kwenzodungulu:kwenzo0200@devapi.m4lb2wr.mongodb.net/?retryWrites=true&w=majority&appName=devAPI')
.then(() => {
 console.log('Connected to MongoDB');
}).catch((error) => {
 console.error('MongoDB connection error:', error);
});

const placeSchema = new mongoose.Schema({
 name: String,
 description: String,
 location: String,
 openHours: String,
 images: [String]
});

const Place = mongoose.model('Place', placeSchema);

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
    cb(null, 'uploads/');
 },
 filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
 }
});

const upload = multer({ storage: storage });

app.post('/places', upload.array('images'), async (req, res) => {
 // Implement logic to create a new place
});

app.get('/places', async (req, res) => {
 // Implement logic to read all places
});

app.get('/places/:id', async (req, res) => {
 // Implement logic to read a single place by ID
});

app.put('/places/:id', upload.array('images'), async (req, res) => {
 // Implement logic to update a place by ID
});

app.delete('/places/:id', async (req, res) => {
 // Implement logic to delete a place by ID
});

app.listen(port, () => console.log(`Server running on port ${port}`));



  
