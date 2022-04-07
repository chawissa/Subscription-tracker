const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routes/api');

// const mongoURI = process.env.NODE_ENV === 'development'
//   ? 'mongodb://localhost/solo_project_dev'
//   : 'mongodb://localhost/solo_project_prod';
// mongoose.connect(mongoURI);

const mongoURI = 'mongodb://localhost/soloProj';
mongoose.connect(mongoURI);

const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ROUTE HANDLER TO RESPOND WITH THE MAIN APP
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/api', apiRouter);

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
