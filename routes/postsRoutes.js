const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("<h1>Mio blog</h1>");
});

route.get("/posts/:id", (req, res) => {
  res.send("Post page");
});

route.post("/posts", (req, res) => {
  res.send("Posts page");
});

route.put("/posts/:id", (req, res) => {
  res.send("Post page");
});

route.patch("/posts/:id", (req, res) => {
  res.send("Post page");
});

route.delete("/posts/:id", (req, res) => {
  res.send("Post page");
});

module.exports = route;
