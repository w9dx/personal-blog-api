import express from "express";

const app = express();

app.get("/hello", function (req, res) {
  res.send("Hello World");
});

app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(80, function () {
  console.log("Server is running on port 80");
});
