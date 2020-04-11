const express = require('express'); // Import package
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewares:
app.use(cors());
app.use(bodyParser.json()); // Used to parse/read JSON data

// // Import Routes / Acts as a controller to use the methods within models
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);
const timeRoutes = require('./routes/times');
app.use('/times', timeRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.sendStatus(200);
});

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
      { useNewUrlParser: true },
  () => {
    console.log('connection made to DB!');
  }
);

// Listen to server:
app.listen(3000);