const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt");
const {
  watchList,
  new_watchList,
  update_watchList,
  delete_watchList,
} = require("../controllers/watchlist");

/**
 * @swagger
 * tags:
 *   name: watchlist
 *   description: Operations about watchlist
 */

/**
 * @swagger
 * /user/{id}/watchlist:
 *   get:
 *     tags:
 *       - watchlist
 *     description: Get watchlist by id of user
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about watchlist
 *       400:
 *         description: Invalid request
 */
router.get("/user/:id/watchlist", verifyToken, watchList);

/**
 * @swagger
 * /user/{id}/watchlist:
 *   post:
 *     tags:
 *       - watchlist
 *     description: create watchlist
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: watchlist created
 *       400:
 *         description: Invalid request
 */
router.post("/user/:id/watchlist", new_watchList);

/**
 * @swagger
 * /user/{id}/watchlist/{movie_id}:
 *   put:
 *     tags:
 *       - watchlist
 *     description: add or remove a movie from the watchlist
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *       - in: path
 *         name: movie_id
 *         description: id of movie
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: flag (add/remove) to update the watchlist
 *         schema:
 *           type: object
 *           required:
 *             - flag
 *           properties:
 *             flag:
 *               type: string
 *     responses:
 *       200:
 *         description: watchlist updated
 *       400:
 *         description: Invalid request
 */
router.put("/user/:id/watchlist/:movie_id", verifyToken, update_watchList);

/**
 * @swagger
 * /user/{id}/watchlist:
 *   delete:
 *     tags:
 *       - watchlist
 *     description: delete watchlist
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: watchlist deleted
 *       400:
 *         description: Invalid request
 */
router.delete("/user/:id/watchlist", verifyToken, delete_watchList);

module.exports = router;
