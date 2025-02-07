const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const publicRoutes = require("./routes/public");

// SETTERS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));

// EXPRESS USES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client")));

app.use(publicRoutes);

// SERVER RUNNING
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}!`)
);
