const router = require("express").Router();
const { signUpNewUser, signInUser, logout } = require("../controllers/user");

router.post("/user-sign-up", signUpNewUser);
router.post("/user-sign-in", signInUser);
router.get("/logout", logout);
module.exports = router;
