const express = require("express");
const https = require("https");
const app = express();
const port = 3000;
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
const fs = require("fs");
const axios = require('axios');

app.use(cors());

// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var public = path.join(__dirname, "public");

//app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", express.static(public));

app.post("/insert", (req, res) => {

  axios({
    method: 'post',
    url: 'https://akwo6zj65g1yuq0-soda2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/soda/latest/custom-actions/insert/facedetection',
    data: req.body,
    headers: { 'content-type': 'application/json' },
    auth: {
      username: "admin",
      password: "Welcome12345#"
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
/* https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(port, () => {
    console.log("Listening...");
  }); */
