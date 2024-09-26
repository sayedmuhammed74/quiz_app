const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const morgan = require('morgan');

// Import Connectioin
const connect = require('./database/connection');

// Create Application
const app = express();

app.use(morgan('tiny'));
// crooss doman data sharing
app.use(cors());
// parsing data
app.use(express.json());
// dotenv
config();

// Applcation part
const _port = process.env.PORT || 8000;

// routes
const questionRouter = require('./routes/questionRoute');
const resultRouter = require('./routes/resultRoute');

app.use('/api/questions', questionRouter);
app.use('/api/results', resultRouter);

app.get('/', (req, res) => {
  try {
    res.json('get requeest');
  } catch (error) {
    res.json(error);
  }
});

// Connect to DB
connect()
  .then(() => {
    console.log('Database Conncted Successfully');
  })
  .then(() =>
    // Start Server
    app.listen(_port, () => console.log(`server is runinng on port ${_port}`))
  )
  .catch((err) => console.log(err));
