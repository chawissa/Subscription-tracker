const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = 3000;

// const mongoURI = process.env.NODE_ENV === 'development'
//   ? 'mongodb://localhost/solo_project_dev'
//   : 'mongodb://localhost/solo_project_prod';
// mongoose.connect(mongoURI);

const subscriptionController = require('./controllers/subscriptionController');

const mongoURI = 'mongodb://localhost/soloProj';
mongoose.connect(mongoURI);

const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.post('/', subscriptionController.createSub);
(req, res) => {
  console.log('new subscriptions added successfully');
  res.status(200).json(res.locals.subs);
};

// Unknonwn route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occured ' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
});
