const { where } = require("sequelize");
const Quote = require("../models/quote");
const User = require("../models/user");

async function getQuotes(req, res) {
  const quotes = await Quote.findAll({
    where: { userId: req.user.userId },
  });
  const user = await User.findOne({ where: { id: req.user.userId } });

  return res.render("src/pages/quotes", {
    pageTitle: "📜Quotes",
    activePage: "home",
    quotes: quotes,
    user: user,
  });

  // Quote.findAll()
  //   .then((quotes) => {
  //     res.render("src/pages/quotes", {
  //       pageTitle: "📜Quotes",
  //       activePage: "home",
  //       quotes: quotes,
  //       user: req.user,
  //     });
  //   })
  //   .catch((error) => console.log("Failed to Fetch All Quotes! Error:", error));
}

function getAddQuote(req, res) {
  res.render("src/pages/addQuote", { pageTitle: "📜 Add New Quote" });
}

function postNewQuote(req, res) {
  const quoteData = ({ quote, imageUrl, author, category } = req.body);
  Quote.create(quoteData)
    .then((result) =>
      console.log("New quote has been added!\n quote:", result["dataValues"])
    )
    .catch((error) => console.log(error));
  res.redirect("/home");
}
module.exports = { getQuotes, getAddQuote, postNewQuote };
