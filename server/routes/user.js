const router = require("express").Router();
const { signUpNewUser, signInUser } = require("../controllers/user");

router.post("/user-sign-up", signUpNewUser);
router.post("/user-sign-in", signInUser);

module.exports = router;
