const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize_instance');

const QuizSession = sequelize.define(
  'QuizSession',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total_questions: {
        type: DataTypes.INTEGER,
    },
    correct_answers: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  }
);

module.exports = QuizSession;