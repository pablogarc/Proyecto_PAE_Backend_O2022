const express = require("express");
const router = express.Router();
const {
  all_movies,
  single_movie,
  movies_by_title,
  movies_by_genre
} = require("../controllers/movies");

router.get("/movies", all_movies);
router.get("/movie/:id", single_movie);
router.get("/movie", movies_by_title);
router.get("/category", movies_by_genre);

module.exports = router;
