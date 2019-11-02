const express = require("express");
const app = express();
const port = 3000;
var path = require("path");
var public = path.join(__dirname, "public");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", express.static(public));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
