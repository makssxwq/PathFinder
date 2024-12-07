const express = require('express');
const router = express.Router();
const { getPredictedScore } = require('../controllers/predictionController');
const Student = require('../models/Student');

router.get('/:id/prediction', async (req, res) => {
  const student = await Student.findById(req.params.id);
  const predictedScore = await getPredictedScore(student.attendance, student.study_hours);
  res.json({ ...student.toObject(), predicted_score: predictedScore });
});

module.exports = router;