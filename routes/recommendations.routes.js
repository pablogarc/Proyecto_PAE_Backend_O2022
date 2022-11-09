const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt");
const {
  recommendations,
  new_recommendation,
  update_recommendation,
  delete_recommendation,
} = require("../controllers/recommendations");

/**
 * @swagger
 * tags:
 *   name: recommendation
 *   description: Operations about recommendation
 */

/**
 * @swagger
 * /user/{id}/recommendations:
 *   get:
 *     tags:
 *       - recommendation
 *     description: Returns a list of all recommendations of a sender user
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of sender user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about recommendation
 *       400:
 *         description: Invalid request
 */
router.get("/user/:id/recommendations", recommendations);

/**
 * @swagger
 * /user/{id}/recommendations/{user_id}:
 *   post:
 *     tags:
 *       - recommendation
 *     description: create recommendation
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of sender user
 *         required: true
 *         type: string
 *       - in: path
 *         name: user_id
 *         description: id of receiver user
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: content of the recommendation
 *         schema:
 *           type: object
 *           required:
 *             - content
 *           properties:
 *             content:
 *               type: string
 *     responses:
 *       200:
 *         description: Recommendation created
 *       400:
 *         description: Invalid request
 */
router.post("/user/:id/recommendations/:user_id", new_recommendation);

/**
 * @swagger
 * /user/{id}/recommendations/{recommendation_id}:
 *   put:
 *     tags:
 *       - recommendation
 *     description: update recommendation
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of sender user
 *         required: false
 *         type: string
 *       - in: path
 *         name: recommendation_id
 *         description: id of recommendation
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: content of the recommendation
 *         schema:
 *           type: object
 *           required:
 *             - content
 *           properties:
 *             content:
 *               type: string
 *     responses:
 *       200:
 *         description: Recommendation updated
 *       400:
 *         description: Invalid request
 */
router.put(
  "/user/:id/recommendations/:recommendation_id",
  update_recommendation
);

/**
 * @swagger
 * /user/{id}/recommendations/{recommendation_id}:
 *   delete:
 *     tags:
 *       - recommendation
 *     description: delete recommendation
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of sender user
 *         required: false
 *         type: string
 *       - in: path
 *         name: recommendation_id
 *         description: id of recommendation
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Recommendation deleted
 *       400:
 *         description: Invalid request
 */
router.delete(
  "/user/:id/recommendations/:recommendation_id",
  delete_recommendation
);

module.exports = router;
