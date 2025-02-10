const router = require("express").Router();
const {
  getQuotes,
  getAddQuote,
  postNewQuote,
  deleteQuote,
} = require("../controllers/quotes");
const authenticatedUser = require("../middleware/authMiddleware");

router.get("/home", authenticatedUser, getQuotes);
router.get("/add-quote", getAddQuote);
router.post("/add-new-quote", authenticatedUser, postNewQuote);
router.delete("/quotes/delete/:id", authenticatedUser, deleteQuote);

module.exports = router;
