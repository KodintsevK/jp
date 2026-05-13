const sequelize = require("./sequelize_instance");

const seedDatabase = require("../seeders");
const initModels = require("./initModels");

initModels();

const connectDB = async  () => {
    try {
        await sequelize.authenticate();
        console.log('Подключение к базе успешно установленно.');

        await sequelize.sync();
        console.log("База синхронизированна");

        await seedDatabase();
        console.log("Сиды кан установленны");
    } catch (error) {
        console.error('Не получилось установить свзяь с базой:', error);
    }
}

module.exports = connectDB