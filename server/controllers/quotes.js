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
}

function getAddQuote(req, res) {
  res.render("src/pages/addQuote", { pageTitle: "📜 Add New Quote" });
}

async function postNewQuote(req, res) {
  try {
    const userId = req.user.userId;
    const { quote, author, imageUrl, category } = req.body;

    const newQuote = await Quote.create({
      quote,
      author,
      imageUrl,
      category,
      userId,
    })
      .then((result) =>
        console.log("New quote has been added!\n quote:", result["dataValues"])
      )
      .catch((error) => console.log(error));

    return res.redirect("/home");
  } catch (error) {
    console.log("Error:", error);
    return res.render("src/pages/error", {
      pageTitle: "⁉ |Error - Something Went Wrong",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}
module.exports = { getQuotes, getAddQuote, postNewQuote };
