const express = require("express");
const app = express();
const bp = require("body-parser");
const ejs = require("ejs");
var path = require("path");
const { main } = require("./Models/main");

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/Views"));

app.get("/", (res, req) => {
  res.sendFile(path.resolve("index.html"));
});

app.get("/stats", (req, res) => {
  const token = YOUR_GITHUB_TOKEN;
  const org = YOUR_ORG_NAME;
  const timespan = YOUR_TIMESPAN;
  main(org, timespan, token)
    .then(response => {
      console.log(response);
      if (response == undefined || response == null) {
        return res.redirect("/");
      } else if (response.length == 0) {
        return res.redirect("/");
      } else {
        res.render("stats", { response: response });
      }
    })
    .catch(err => {
      console.log(err);
      res.render("stats", { response: response });
    });
});

app.post("/stats", (req, res) => {
  const token = req.body.token;
  const org = req.body.org;
  const timespan = req.body.timespan;
  main(org, timespan, token)
    .then(response => {
      console.log(response);
      if (response == undefined || response == null) {
        return res.redirect("/");
      } else if (response.length == 0) {
        return res.redirect("/");
      } else {
        res.render("stats", { response: response });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("*", function(req, res) {
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on PORT 3000");
});
