const { Router } = require('express');
const router = Router();

// Questions Controllers
const {
  getAllQuestions,
  insertQuestions,
  deleteQuestions,
} = require('../controllers/question.controller');

// Questions Routes API
router
  .route('/')
  .get(getAllQuestions)
  .post(insertQuestions)
  .delete(deleteQuestions);

module.exports = router;
