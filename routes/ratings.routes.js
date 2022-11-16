const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt");
const {
  rates,
  new_rate,
  update_rate,
  delete_rate,
} = require("../controllers/ratings");

/**
 * @swagger
 * tags:
 *   name: rating
 *   description: Operations about rating
 */

/**
 * @swagger
 * /movie/{id}/ratings:
 *   get:
 *     tags:
 *       - rating
 *     description: Returns a list of all ratings of a movie
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about ratings
 *       400:
 *         description: Invalid request
 */
router.get("/movie/:id/ratings", rates);

/**
 * @swagger
 * /movie/{id}/ratings/{user_id}:
 *   post:
 *     tags:
 *       - rating
 *     description: create rating
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: true
 *         type: string
 *       - in: path
 *         name: user_id
 *         description: id of user
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: rating of the movie
 *         schema:
 *           type: object
 *           required:
 *             - rate
 *           properties:
 *             rate:
 *               type: string
 *     responses:
 *       200:
 *         description: Rating created
 *       400:
 *         description: Invalid request
 */
router.post("/movie/:id/ratings/:user_id", verifyToken, new_rate);

/**
 * @swagger
 * /movie/{id}/ratings/{rating_id}:
 *   put:
 *     tags:
 *       - rating
 *     description: update rating
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: false
 *         type: string
 *       - in: path
 *         name: rating_id
 *         description: id of rating
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: rating of the movie
 *         schema:
 *           type: object
 *           required:
 *             - rate
 *           properties:
 *             rate:
 *               type: integer
 *               format: int32
 *     responses:
 *       200:
 *         description: Rating updated
 *       400:
 *         description: Invalid request
 */
router.put("/movie/:id/ratings/:rating_id", verifyToken, update_rate);

/**
 * @swagger
 * /movie/{id}/ratings/{rating_id}:
 *   delete:
 *     tags:
 *       - rating
 *     description: delete rating
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: false
 *         type: string
 *       - in: path
 *         name: rating_id
 *         description: id of rating
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Rating deleted
 *       400:
 *         description: Invalid request
 */
router.delete("/movie/:id/ratings/:rating_id", verifyToken, delete_rate);

module.exports = router;
