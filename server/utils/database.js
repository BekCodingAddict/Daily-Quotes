const Sequelize = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   "daily-quotes",
//   process.env.MYSQL_ROOT_USERNAME,
//   process.env.MYSQL_PASSWORD,
//   {
//     dialect: "mysql",
//     host: "localhost",
//   }
// );

const sequelize = new Sequelize("daily-quotes", "root", "Experte001$", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
