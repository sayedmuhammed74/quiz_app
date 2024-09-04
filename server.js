const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const morgan = require('morgan');

app.use(morgan('tiny'));
// crooss doman data sharing
app.use(cors());
// parsing data
app.use(express.json());
// dotenv
config();

// Applcation part
const _port = process.env.PORT || 8080;

// routes
app.get('/', (req, res) => {
  try {
    res.json('get requeest');
  } catch (error) {
    res.json(error);
  }
});
app.listen(_port, () => console.log(`server is runinng on port ${_port}`));
