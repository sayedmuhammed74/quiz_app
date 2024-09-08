const Result = require('./../models/result.model');

// Get All Results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json({
      status: 'success',
      data: { results },
    });
  } catch (error) {
    res.status(400).json({
      status: 'success',
      message: error.message,
    });
  }
};

// Insert All Results
exports.storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achieved } = req.body;

    // check data is exist
    if (!username && !result) throw new Error('Data Note Provided!!');

    const newResult = await Result.create({
      username,
      result,
      attempts,
      points,
      achieved,
    });
    res.status(201).json({
      status: 'success',
      data: { result: newResult },
    });
  } catch (error) {
    res.status(400).json({
      status: 'success',
      message: error.message,
    });
  }
};

// Delete All Results
exports.deleteResult = async (req, res) => {
  res.json('delete Results');
};
