const { Router } = require('express');
const router = Router();

// Result Controllers
const {
  getAllResults,
  storeResult,
  deleteResult,
} = require('../controllers/result.controller');

// Result Routes API
router.route('/').get(getAllResults).post(storeResult).delete(deleteResult);

module.exports = router;
