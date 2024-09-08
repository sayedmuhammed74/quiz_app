const { Schema, model } = require('mongoose');

const resultSchema = new Schema({
  username: {
    type: String,
  },
  result: {
    type: Array,
    default: [],
  },
  attempts: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  achieved: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const resultModel = model('Result', resultSchema);

module.exports = resultModel;
