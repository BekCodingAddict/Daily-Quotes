const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Quote = sequelize.define("quotes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quote: Sequelize.STRING,
  author: Sequelize.STRING,
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Quote;
