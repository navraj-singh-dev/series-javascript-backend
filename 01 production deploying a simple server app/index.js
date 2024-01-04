require("dotenv").config();

const express = require("express");
const app = express();

// endpoints
app.get("/", (req, res) => {
  res.send("Go to these routes: /github, /twitter, /linkedin");
});

app.get("/github", (req, res) => {
  res.send("<h3>https://github.com/navraj-singh-dev</h3>");
});

app.get("/twitter", (req, res) => {
  res.send("<h3>https://twitter.com/NavrajSinghDev</h3>");
});

app.get("/linkedin", (req, res) => {
  res.send("<h3>https://www.linkedin.com/in/navraj-singh-78b746210/</h3>");
});

// listen on upcoming requests on server
app.listen(process.env.PORT, () => {
  console.log(`Server Running on PORT: ${process.env.PORT}`);
});
