const Quiz = require('../models/quiz');

const getAllQuizzes = (req, res) => {
  Quiz.find()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const getQuizById = (req, res) => {
  const id = req.params.id;
  Quiz.findById(id)
    .then((quiz) => {
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ error: 'Quiz not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const createQuiz = (req, res) => {
  const { type, title, course, topic , dueTo } = req.body;
  const newQuiz = new Quiz({ type, title, course, topic , dueTo});
  newQuiz
    .save()
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const updateQuiz = (req, res) => {
  const id = req.params.id;
  const { type, title, course, topic , dueTo } = req.body;
  Quiz.findByIdAndUpdate(
    id,
    { type,title, course, topic, dueTo },
    { new: true }
  )
    .then((quiz) => {
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ error: 'Quiz not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const deleteQuiz = (req, res) => {
  const id = req.params.id;
  Quiz.findByIdAndDelete(id)
    .then((deletedQuiz) => {
      if (deletedQuiz) {
        res.json(deletedQuiz);
      } else {
        res.status(404).json({ error: 'Quiz not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
