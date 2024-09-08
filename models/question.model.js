const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  question: {
    type: [],
    require: true,
  },
  answers: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const questionModel = model('Question', questionSchema);

module.exports = questionModel;
