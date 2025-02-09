const router = require("express").Router();
const {
  getQuotes,
  getAddQuote,
  postNewQuote,
} = require("../controllers/quotes");
const authenticatedUser = require("../middleware/authMiddleware");

router.get("/home", authenticatedUser, getQuotes);
router.get("/add-quote", getAddQuote);
router.post("/add-new-quote", authenticatedUser, postNewQuote);

module.exports = router;
