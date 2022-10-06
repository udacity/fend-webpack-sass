var path = require("path");
const express = require("express");
const { getPicture } = require("./apodApi");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/pictures/:date", async function (req, res) {
  const picture = await getPicture(req.params.date);
  res.json(picture);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
