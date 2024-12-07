const axios = require('axios');

const getPredictedScore = async (attendance, study_hours) => {
  try {
    const response = await axios.post('http://localhost:8000/predict', {
      attendance,
      study_hours,
    });
    return response.data.predicted_score;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

module.exports = { getPredictedScore };