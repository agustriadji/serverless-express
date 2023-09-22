const path = require("path");
const serverless = require("serverless-http");
const express = require("express");
const compress = require("compression");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();

const {
  getMovies_Main,
  detailMovies_Main,
  addMovies_Main,
  editMovies_Main,
  removeMovies_Main,
  upateStatusMovies_Main,
} = require("./src/movies/main");

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(compress());

app.get("/Movies", getMovies_Main);
app.get("/Movies/:moviesId", detailMovies_Main);
app.post("/Movies", addMovies_Main);
app.put("/Movies/:moviesId", editMovies_Main);
app.put("/Movies-UpdateStatus/:moviesId", upateStatusMovies_Main);
app.delete("/Movies/:moviesId", removeMovies_Main);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
