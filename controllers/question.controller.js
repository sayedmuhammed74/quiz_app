const Quiz = require('./../models/quiz.model');

const questions = [
  {
    question:
      'What is the output of the following code: console.log([1] == [1])?',
    options: ['true', 'false', 'undefined'],
  },
  {
    question:
      'Which of the following methods can be used to add an element to the end of an array?',
    options: ['pop()', 'shift()', 'push()'],
  },
  {
    question:
      "What will be the value of 'x' after the following code executes: var x = [1, 2, 3]; x.length = 2;",
    options: ['[1, 2]', '[1, 2, 3]', '[1, 2, 3, undefined]'],
  },
  {
    question:
      'Which of the following is a method to remove the last element from an array?',
    options: ['push()', 'pop()', 'slice()'],
  },
  {
    question:
      "What will be the output of 'console.log([1, 2, 3].map(x => x + 1));'?",
    options: ['[1, 2, 3]', '[1, 2, 3, 1]', '[2, 3, 4]'],
  },
];

const answers = [1, 2, 0, 1, 2];

// Get All Questions
exports.getAllQuestions = async (req, res) => {
  try {
    const quiz = await Quiz.findOne();
    res.status(200).json({
      status: 'success',
      data: {
        questions: quiz.questions,
        answers: quiz.answers,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

// Insert All Questions
exports.insertQuestions = async (req, res) => {
  try {
    const quiz = await Quiz.create({ questions, answers });
    res.status(201).json({
      status: 'success',
      data: {
        questions: quiz.questions,
        answers: quiz.answers,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

// Delete All Questions
exports.deleteQuestions = async (req, res) => {
  try {
    await Quiz.deleteMany();
    res.json('delete quiz');
  } catch (error) {
    res.json({ message: error.message });
  }
};
