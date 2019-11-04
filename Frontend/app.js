const express = require("express");
const https = require("https");
const app = express();
const port = 3000;
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
const fs = require("fs");

app.use(cors());

// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var invoke = require("./invokeFunction");

var public = path.join(__dirname, "public");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", express.static(public));

app.post("/insert", (req, res) => {
  invoke.InsertData(
    {
      path:
        "/20181201/functions/ocid1.fnfunc.oc1.phx.aaaaaaaaaa3kvbaarhonuelfqsa2xpys2jilib23o2f6qe3vt254w75lanbq/actions/invoke",
      host: "6q2o72e3mba.us-phoenix-1.functions.oci.oraclecloud.com"
    },
    req.body
  );
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`)$
https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(3000, () => {
    console.log("Listening...");
  });
