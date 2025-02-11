const router = require("express").Router();
const {
  signUpNewUser,
  signInUser,
  logout,
  getUserProfile,
} = require("../controllers/user");
const authenticatedUser = require("../middleware/authMiddleware");

router.post("/user-sign-up", signUpNewUser);
router.post("/user-sign-in", signInUser);
router.get("/logout", logout);
router.get("/profile", authenticatedUser, getUserProfile);
module.exports = router;
