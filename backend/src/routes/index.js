const express = require("express");
const router = express.Router();
const wordController  = require('../controllers/wordController');
const quizController  = require('../controllers/quizController');

const w_C = new wordController();
const q_C = new quizController();

router.post('/word', w_C.saveWord);
router.get('/word', w_C.getWord);


router.post('/api/quiz', q_C.createQuiz);
router.get('/api/quiz', q_C.getQuizList);
router.get('/api/quiz/:quiz_id', q_C.getQuiz);
router.get('/api/quiz/:quiz_id/result', q_C.getQuizResult);
router.post('/api/quiz/question/:id/answer', q_C.answerQuestion);

module.exports = router;