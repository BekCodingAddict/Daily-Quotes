const Quote = require("../models/quote");

function getQuotes(req, res) {
  Quote.findAll()
    .then((quotes) => {
      res.render("src/pages/quotes", {
        pageTitle: "📜Quotes",
        activePage: "home",
        quotes: quotes,
      });
    })
    .catch((error) => console.log("Failed to Fetch All Quotes! Error:", error));
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
