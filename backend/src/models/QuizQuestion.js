const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize_instance');
const QuizSession = require('./QuizSession');
const Kana = require('./Kana');


const QuestionType = [
    'input',
    'select'
]

const QuizQuestion = sequelize.define(
  'QuizQuestion',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    session_id: {
        type: DataTypes.INTEGER,
        references: {
            model: QuizSession,
            key: 'id'
        }
    },
    kana_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Kana,
            key: 'id'
        }
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    question_type : {
        type: DataTypes.ENUM(QuestionType),
        allowNull: false
    },
    user_answer: {
        type: DataTypes.STRING
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
    }
  }
);



module.exports = QuizQuestion;