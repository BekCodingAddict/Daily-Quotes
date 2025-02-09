const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Quote = require("./quote");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//One to Many:A user can have multiple quotes
User.hasMany(Quote, { foreignKey: "userId", onDelete: "CASCADE" });
Quote.belongsTo(User, { foreignKey: "id" });

module.exports = User;
