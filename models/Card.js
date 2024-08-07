const DataTypes = require("sequelize");
const db = require("../src/db");

const Card = db.define('card', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coluna: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Card;