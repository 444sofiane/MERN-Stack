const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create Express App
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the database info
app.get('/', async (req, res) => {
  // Assume you have a model named 'User'
  // You can replace this with your actual model and query
  const User = mongoose.model('User', { name: String, age: Number, email: String });

  try {
    // Query the database (assuming 'users' is the collection)
    const users = await User.find({}).exec();

    // Render the HTML template with the data
    res.render('index', { users });
  } catch (error) {
    console.error(error);
    res.send('Error fetching data from MongoDB');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
