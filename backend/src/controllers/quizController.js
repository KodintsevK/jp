const Kana = require("../models/Kana");
const QuizQuestion = require("../models/QuizQuestion");
const QuizSession = require("../models/QuizSession");
const sequelize = require("./../db/sequelize_instance");

class quizController {
    constructor() {

    }

    async createQuiz(req, res){
        try {
            console.log(req.body);
            
            const {
                count = 10
            } = req.body;

            const kanaList = await Kana.findAll({
                order: sequelize.random(),
                limit: count
            });

            if (!kanaList.length) {
                return res.status(404).json({
                    message: 'Kana not found'
                });
            }

            // Создаем сессию
            const session = await QuizSession.create({
                total_questions: kanaList.length,
                correct_answers: 0
            });

            const questions = kanaList.map((kana, index) => ({
                session_id: session.id,
                kana_id: kana.id,
                order: index + 1,
                question_type: 'input'
            }));

            await QuizQuestion.bulkCreate(questions);

            // Получаем созданные вопросы
            const createdQuestions = await QuizQuestion.findAll({
                where: {
                    session_id: session.id
                },
                include: [
                    {
                        model: Kana,
                        attributes: ['id', 'symbol']
                    }
                ],
                order: [['order', 'ASC']]
            });

            return res.json({
                session_id: session.id,
                total_questions: session.total_questions,

                questions: createdQuestions.map(question => ({
                    id: question.id,
                    order: question.order,
                    symbol: question.Kana.symbol,
                    question_type: question.question_type
                }))
            });


        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    async getQuiz(req,res){
        try {
            const { quiz_id } = req.params; 
            const createdQuestions = await QuizQuestion.findAll({
                where: {
                    session_id: quiz_id
                },
                include: [
                    {
                        model: Kana,
                        attributes: ['id', 'symbol']
                    }
                ],
                order: [['order', 'ASC']]
            });

            return res.json({
                session_id: quiz_id,
                total_questions: createdQuestions.length,

                questions: createdQuestions.map(question => ({
                    id: question.id,
                    order: question.order,
                    symbol: question.Kana.symbol,
                    question_type: question.question_type
                }))
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
    async getQuizList(req, res){
        try {
            const quizSessions = await QuizSession.findAll({
                order: [['createdAt', 'DESC']]
            });

            return res.json(quizSessions);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    async answerQuestion(req, res){
        try {
            const { id } = req.params;
            const { answer } = req.body;

            if (!answer) {
                return res.status(400).json({
                    message: 'Answer is required'
                });
            }

            const question = await QuizQuestion.findByPk(id, {
                include: [
                    {
                        model: Kana,
                        attributes: ['id', 'romaji', 'symbol']
                    },
                    {
                        model: QuizSession
                    }
                ]
            });

            if (!question) {
                return res.status(404).json({
                    message: 'Question not found'
                });
            }

            // уже отвечено — защита от повторной записи
            if (question.user_answer !== null && question.user_answer !== undefined) {
                return res.status(409).json({
                    message: 'Question already answered'
                });
            }

            const normalizedUser = answer.trim().toLowerCase();
            const normalizedCorrect = question.Kana.romaji.toLowerCase();

            const isCorrect = normalizedUser === normalizedCorrect;

            // обновляем вопрос
            await question.update({
                user_answer: answer,
                is_correct: isCorrect
            });

            // обновляем сессию
            if (isCorrect) {
                await QuizSession.increment(
                    { correct_answers: 1 },
                    { where: { id: question.session_id } }
                );
            }

            return res.json({
                question_id: question.id,
                symbol: question.Kana.symbol,
                correct_answer: question.Kana.romaji,
                user_answer: answer,
                is_correct: isCorrect
            });
        } catch (e) {
            console.error(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    async getQuizResult(req, res) {
    try {
        const { quiz_id } = req.params;

        const session = await QuizSession.findByPk(quiz_id);

        if (!session) {
            return res.status(404).json({
                message: 'Session not found'
            });
        }

        const questions = await QuizQuestion.findAll({
            where: {
                session_id: quiz_id
            },
            include: [
                {
                    model: Kana,
                    attributes: ['symbol', 'romaji']
                }
            ],
            order: [['order', 'ASC']]
        });

        const total = questions.length;
        const correct = questions.filter(q => q.is_correct === true).length;
        const wrong = total - correct;

        const accuracy = total
            ? Math.round((correct / total) * 100)
            : 0;

        return res.json({
            session_id: session.id,
            total_questions: total,
            correct_answers: correct,
            wrong_answers: wrong,
            accuracy,

            questions: questions.map(q => ({
                id: q.id,
                symbol: q.Kana.symbol,
                correct_answer: q.Kana.romaji,
                user_answer: q.user_answer,
                is_correct: q.is_correct,
                order: q.order,
                question_type: q.question_type
            }))
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}
}

module.exports = quizController