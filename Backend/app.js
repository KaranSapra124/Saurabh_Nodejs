const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.post("/get-client", function (req, res) {
  console.log(req.body);
});

app.listen(3000, function () {
  console.log("Server running");
});
