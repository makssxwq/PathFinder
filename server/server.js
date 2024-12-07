// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/students', require('./routes/students'));

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));