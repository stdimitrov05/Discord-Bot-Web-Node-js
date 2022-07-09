// Imports
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 9000;

// Static Files
app.use(express.static("public"));

// Set View's
app.set("views", "views");
app.set("view engine", "ejs");

// Navigation
app.get("", (req, res) => {
  res.render("index", { text: "Hello stdimitrov05 👨‍💻" });
});


app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/signup.html"));
});
app.get("/home.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.listen(port, () => console.info(`App listening on port ${port}`));
