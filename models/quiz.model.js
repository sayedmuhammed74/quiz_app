const mongoose = require('mongoose');

// Define the schema for questions
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [], required: true }, // Array of options
});

// Define the schema for the quiz
const quizSchema = new mongoose.Schema({
  questions: { type: [questionSchema], required: true },
  answers: {
    type: [],
  }, // Array of answer indices
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
