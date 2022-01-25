const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// const port = 3000;
// if live website have there own port
// then use this command
const port = process.env.PORT || 3000;

const log = console.log;

// log("__dirname : ", __dirname);

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
// log("staticPath : ", staticPath);

app.set("view engin", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

// app.get(route,callback);
// home page
app.get("/", (req, res) => {
  // res.write("Welcome to 2nd express app.");
  // res.end();
  // res.send("<h1>Welcome to 2nd express app.<h1>");
  res.render("index.hbs", {
    home: "Home",
    about: "About",
    weather: "Weather",
    page: "Home Page",
  });
});

// about page
app.get("/about", (req, res) => {
  // res.send("<h1>Welcome to About Page.</h1>");
  res.render("about.hbs", {
    home: "Home",
    about: "About",
    weather: "Weather",
    page: "About Us Page",
  });
});

app.get("/weather", (req, res) => {
  // res.send("<h1>Welcome to weather App.</h1>");
  res.render("weather.hbs", {
    home: "Home",
    about: "About",
    weather: "Weather",
    page: "Weather Page",
  });
});

app.get("*", (req, res) => {
  // res.send("<h1>Ooops 404 Page Not Found !</h1>");
  res.render("404error.hbs", {
    errorMsg: "Opps! Page Not Found",
  });
});

app.listen(port, () => {
  log(`Listening to the port ${port}`);
});
