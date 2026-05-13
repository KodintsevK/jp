const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize_instance');


const KanaType = [
  'hiragana',
  'katakana'
]

const Kana = sequelize.define(
  'Kana',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    symbol: { // あ, ア
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    romaji: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM(KanaType),
        allowNull: false
    },
    base: { // для нигори
        type: DataTypes.STRING
    },
    has_dakuten: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  }
);

module.exports = Kana;