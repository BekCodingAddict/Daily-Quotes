const Quote = require("../models/quote");
const User = require("../models/user");
const { getUserByEmail } = require("../utils/helper");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function signUpNewUser(req, res) {
  try {
    // Ensure that getUserByEmail is asynchronous and awaits the result
    const existUser = await getUserByEmail(req.body.email);

    // If the user already exists, send the response immediately
    if (existUser) {
      return res.render("src/pages/error", {
        pageTitle: "⁉ | Error - Something Went Wrong",
        message: "This user already signed up!",
      });
    }

    // If the user doesn't exist, proceed to create a new user

    //Hashing password using bcrypt.js
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    req.body.userName = req.body.email.split("@")[0];
    // Create the new user
    const newUser = await User.create(req.body);

    // Redirect after successfully signing up
    return res.redirect("/sign-in");
  } catch (error) {
    console.log(error);
    return res.render("src/pages/error", {
      pageTitle: "⁉ |Error - Something Went Wrong",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}

async function signInUser(req, res) {
  try {
    // Ensure that getUserByEmail is asynchronous and awaits the result
    const existUser = await getUserByEmail(req.body.email);

    // If the user already exists, send the response immediately
    if (!existUser) {
      return res.render("src/pages/error", {
        pageTitle: "⁉ | Error - Something Went Wrong",
        message: "This user does not signed up!",
      });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      existUser.password
    );

    if (!passwordMatch) {
      return res.render("src/pages/error", {
        pageTitle: "⁉ | Error - Something Went Wrong",
        message: "Password Incorrect!",
      });
    }

    const token = jwt.sign({ userId: existUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Set true in production (HTTPS)
      maxAge: 3600000, //1 hour
    });

    // const quotes = await Quote.findAll({ where: { userId: existUser.id } });
    // return res.render("src/pages/quotes", {
    //   pageTitle: "📜Quotes",
    //   activePage: "home",
    //   message: "User logged in successfully!",
    //   quotes: quotes,
    //   token: token,
    // });
    return res.redirect("/home");
  } catch (error) {
    console.log(error);
    return res.render("src/pages/error", {
      pageTitle: "⁉ |Error - Something Went Wrong",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}

function logout(req, res) {
  res.clearCookie("token");
  res.redirect("/sign-in");
}

async function getUserProfile(req, res) {
  try {
    if (!req.user || !req.user.userId) {
      return res.redirect("/sign-in");
    }

    const quotes = await Quote.findAll({
      where: { userId: req.user.userId },
    });
    const user = await User.findOne({ where: { id: req.user.userId } });

    return res.render("src/pages/userProfile", {
      pageTitle: "🙍‍♂️ | My Profile",
      activePage: "profile",
      quotes: quotes,
      user: user,
    });
  } catch (error) {
    console.log("Error:", error);
    return res.render("src/pages/error", {
      pageTitle: "⁉ |Error - Something Went Wrong",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}

module.exports = { signUpNewUser, signInUser, logout, getUserProfile };
