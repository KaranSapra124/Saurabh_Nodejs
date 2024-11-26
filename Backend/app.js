const express = require("express");
const app = express();

// NODEJS ROUTES
// server -> if/else routes\
app.use(express.json());
app.post("/create-user", function (req, res) {
  console.log(req.body);
  return res.status(201).send({ message: "User created successfully!" });
});
app.get("/users", function (req, res) {
  res.write(`<h1>Hello</h1>`);
  res.end();
});
app.get("/about", function (req, res) {
  res.write(`<h1>About Us</h1>`);
  res.end();
});

app.listen(3000, function () {
  console.log("SERVER IS RUNNING");
});