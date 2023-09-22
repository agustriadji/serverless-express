const {Router} = require("express");
const {
  detailMovies_Main,
  getMovies_Main,
  addMovies_Main,
  editMovies_Main,
  removeMovies_Main,
  upateStatusMovies_Main,
} = require("../src/movies/main");

const router = Router();

router.get("/movie", getMovies_Main);

module.exports = router;
