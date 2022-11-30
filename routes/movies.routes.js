const express = require("express");
const router = express.Router();
const {
  all_movies,
  single_movie,
  movies_by_title,
  movies_by_genre,
} = require("../controllers/movies");

/**
 * @swagger
 * tags:
 *   name: movie
 *   description: Operations about movie
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     tags:
 *       - movie
 *     description: Returns a list of all the movies
 *     responses:
 *       200:
 *         description: Successfully returned information about movies
 *       400:
 *         description: Invalid request
 */
router.get("/movies", all_movies);

/**
 * @swagger
 * /movie/{id}:
 *   get:
 *     tags:
 *       - movie
 *     description: Get movie by id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about one movie
 *       400:
 *         description: Invalid request
 */
router.get("/movie/:id", single_movie);

/**
 * @swagger
 * /movie:
 *   get:
 *     tags:
 *       - movie
 *     description: Get movie or movies by title
 *     parameters:
 *       - in: query
 *         name: title
 *         description: title of movie
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about movies
 *       400:
 *         description: Invalid request
 */
router.get("/movie", movies_by_title);

/**
 * @swagger
 * /category:
 *   get:
 *     tags:
 *       - movie
 *     description: Get movie or movies by id of category
 *     parameters:
 *       - in: query
 *         name: genre
 *         description: id of category
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about movies
 *       400:
 *         description: Invalid request
 */
router.get("/category", movies_by_genre);

module.exports = router;
