const router = require("express").Router();
const {
  getQuotes,
  getAddQuote,
  postNewQuote,
} = require("../controllers/quotes");

router.get("/home", getQuotes);
router.get("/add-quote", getAddQuote);
router.post("/add-new-quote", postNewQuote);

module.exports = router;
