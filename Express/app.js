const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const axios = require('axios');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  const User = mongoose.model('User', { name: String, age: Number, email: String });

  try {
    const users = await User.find({}).exec();
    
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=d9c73d8a3b244db48fb100533232811&q=Strasbourg&aqi=no');
    const result = response.data;

    //render
    console.log(result);
    res.render('index', { users, result });
  } catch (error) {
    console.error(error);
    res.send('Error fetching data from MongoDB');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
