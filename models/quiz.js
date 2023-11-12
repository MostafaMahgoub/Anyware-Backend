const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: 'Quiz',
  },
  title: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  dueTo: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
