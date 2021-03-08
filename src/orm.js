let Sequelize = require("sequelize");

const con = new Sequelize(
    "",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        }
    });
module.exports = con;

