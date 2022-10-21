const express = require('express');
const router = express.Router();
const { all_movies, single_movie } = require('../controllers/movies');

router.get('/movies', all_movies);
router.get('/movie', single_movie);
module.exports = router;