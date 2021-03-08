let {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");

const Professor = con.define("Professor",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Professor;