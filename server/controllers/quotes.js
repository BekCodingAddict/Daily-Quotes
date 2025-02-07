const Quote = require("../models/quote");

function getQuotes(req, res) {
  res.render("src/pages/quotes", { pageTitle: "📜Quotes" });
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
  res.redirect("/quotes");
}
module.exports = { getQuotes, getAddQuote, postNewQuote };
