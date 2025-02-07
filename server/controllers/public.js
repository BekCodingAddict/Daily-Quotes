function getHome(req, res) {
  res.render("src/index", { pageTitle: "📑 Daily Quotes" });
}

function getSignIn(req, res) {
  res.render("src/pages/signIn", { pageTitle: "🔎 Sign In" });
}

function getSignUp(req, res) {
  res.render("src/pages/signUp", { pageTitle: "✏ Sign Up" });
}
module.exports = { getHome, getSignIn, getSignUp };
