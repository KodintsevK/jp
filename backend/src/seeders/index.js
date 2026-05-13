const seedKana = require("./Kana");

const seedDatabase = async () => {
  await seedKana();
};

module.exports = seedDatabase;