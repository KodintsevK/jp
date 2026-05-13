const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize_instance');

const Word = sequelize.define(
  'Word',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    meaning: {
        type: DataTypes.STRING,
        allowNull: false
    },
    writing: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }
);

module.exports = Word;