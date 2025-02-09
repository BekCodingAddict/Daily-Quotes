const User = require("./user");
const Quote = require("./quote");

//One to Many:A user can have multiple quotes
User.hasMany(Quote, { foreignKey: "userId", onDelete: "CASCADE" });
Quote.belongsTo(User, { foreignKey: "id" });

module.exports = { User, Quote };
