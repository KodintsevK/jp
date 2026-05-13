const QuizSession = require("../models/QuizSession");
const QuizQuestion = require("../models/QuizQuestion");
const Kana = require("../models/Kana");

const initModels = () => {
  QuizSession.hasMany(QuizQuestion, {
    foreignKey: "session_id",
  });

  QuizQuestion.belongsTo(QuizSession, {
    foreignKey: "session_id",
  });

  Kana.hasMany(QuizQuestion, {
    foreignKey: "kana_id",
  });

  QuizQuestion.belongsTo(Kana, {
    foreignKey: "kana_id",
  });
};

module.exports = initModels;