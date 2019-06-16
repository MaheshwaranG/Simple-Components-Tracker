const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.static("client/build"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cookieParser());

app.use(session({ secret: "secrectkey" }));

var myLogger = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  console.log("LLOGGED Req is : " + JSON.stringify(req.path));
  next();
};

app.use(myLogger);

require("./openroutes")(app, myLogger);
app.get("/check", (req, res) => {
  console.log("Api works fine");
  return res.json({ a: 10 });
});
app.get("/*", function(req, res) {
  //   res.send("Just Checking");
  console.log("Path is : " + __dirname);
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

let server = app.listen(36987, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Server Running : " + host + " : " + port);
});
