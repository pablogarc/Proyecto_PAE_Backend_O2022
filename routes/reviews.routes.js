const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt");
const {
  reviews,
  new_review,
  update_review,
  delete_review,
} = require("../controllers/reviews");

/**
 * @swagger
 * tags:
 *   name: review
 *   description: Operations about review
 */

/**
 * @swagger
 * /movie/{id}/reviews:
 *   get:
 *     tags:
 *       - review
 *     description: Returns a list of all reviews of a movie
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about reviews
 *       400:
 *         description: Invalid request
 */
router.get("/movie/:id/reviews", reviews);

/**
 * @swagger
 * /movie/{id}/reviews/{user_id}:
 *   post:
 *     tags:
 *       - review
 *     description: create Review
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
 *         description: content of the review
 *         schema:
 *           type: object
 *           required:
 *             - content
 *           properties:
 *             content:
 *               type: string
 *     responses:
 *       200:
 *         description: Review created
 *       400:
 *         description: Invalid request
 */
router.post("/movie/:id/reviews/:user_id", verifyToken, new_review);

/**
 * @swagger
 * /movie/{id}/reviews/{review_id}:
 *   put:
 *     tags:
 *       - review
 *     description: update review
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: false
 *         type: string
 *       - in: path
 *         name: review_id
 *         description: id of review
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: content of the review
 *         schema:
 *           type: object
 *           required:
 *             - content
 *           properties:
 *             content:
 *               type: string
 *     responses:
 *       200:
 *         description: Review updated
 *       400:
 *         description: Invalid request
 */
router.put("/movie/:id/reviews/:review_id", verifyToken, update_review);

/**
 * @swagger
 * /movie/{id}/reviews/{user_id}:
 *   delete:
 *     tags:
 *       - review
 *     description: delete review
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of movie
 *         required: false
 *         type: string
 *       - in: path
 *         name: review_id
 *         description: id of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Reviews deleted
 *       400:
 *         description: Invalid request
 */
router.delete("/movie/:id/reviews/:user_id", verifyToken, delete_review);

module.exports = router;
