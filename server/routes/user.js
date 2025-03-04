const router = require("express").Router();
const {
  signUpNewUser,
  signInUser,
  logout,
  getUserProfile,
  postNewFollower,
  getEditProfile,
} = require("../controllers/user");
const authenticatedUser = require("../middleware/authMiddleware");

router.post("/user-sign-up", signUpNewUser);
router.post("/user-sign-in", signInUser);
router.get("/logout", logout);
router.get("/:userName", authenticatedUser, getUserProfile);
router.post("/user/follow/:id", authenticatedUser, postNewFollower);
router.get("/:userName/edit", authenticatedUser, getEditProfile);
module.exports = router;
