const sequelize = require("./sequelize_instance");

require("./../models/Word");
const QuizSession = require("./../models/QuizSession");
const QuizQuestion = require("../models/QuizQuestion");

const Kana = require("./../models/Kana");

QuizSession.hasMany(QuizQuestion, {
  foreignKey: 'session_id'
});

QuizQuestion.belongsTo(QuizSession, {
  foreignKey: 'session_id'
});

Kana.hasMany(QuizQuestion, {
  foreignKey: 'kana_id'
});

QuizQuestion.belongsTo(Kana, {
  foreignKey: 'kana_id'
});


const kanas = require("../seeders/kana");

sequelize.sync().then(() => {
  console.log('Database synced');
});


const connectDB = async  () => {
    try {
        const { count, rows } = await Kana.findAndCountAll();
        if (count === 0) {
            await Kana.bulkCreate(kanas)
        }
        await sequelize.authenticate();
        console.log('Подключение к базе успешно установленно.');
    } catch (error) {
        console.error('Не получилось установить свзяь с базой:', error);
    }
}

module.exports = connectDB