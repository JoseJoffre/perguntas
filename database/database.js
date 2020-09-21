const { Sequelize } = require("sequelize");


const connection = new Sequelize("guia_perguntas", "root", "Zmhx8wqc.93", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;