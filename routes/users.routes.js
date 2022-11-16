const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt");
const {
  single_user,
  users,
  googleLogin,
  login,
  new_user,
  delete_user,
  update_user,
} = require("../controllers/users");

/**
 * @swagger
 * tags:
 *   name: user
 *   description: Operations about user
 *
 * securityDefinitions:
 *   BearerHeader:
 *     type: apiKey
 *     in: header
 *     name: authorization
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - user
 *     description: Get user by id
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully returned information about one user
 *       400:
 *         description: Invalid request
 */
router.get("/user/:id", verifyToken, single_user);

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - user
 *     description: Get all users
 *     security:
 *       - BearerHeader: []
 *     responses:
 *       200:
 *         description: Successfully returned information about users
 *       400:
 *         description: Invalid request
 */
router.get("/users", verifyToken, users);

/**
 * @swagger
 * /google:
 *   post:
 *     tags:
 *       - user
 *     description: Log in with your google account
 *     parameters:
 *       - in: body
 *         name: body
 *         description: data of the user to log in
 *         schema:
 *           type: object
 *           required:
 *             - full_name
 *             - email
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully returned a valid token
 *       400:
 *         description: Invalid request
 */
router.post("/google", googleLogin);

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - user
 *     description: Logs user into the system
 *     parameters:
 *       - in: body
 *         name: body
 *         description: data of the user to log in
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully returned a valid token
 *       400:
 *         description: Invalid request
 */
router.post("/login", login);

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - user
 *     description: create user
 *     parameters:
 *       - in: body
 *         name: body
 *         description: data of the user to create it
 *         schema:
 *           type: object
 *           required:
 *             - full_name
 *             - email
 *             - password
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User created
 *       400:
 *         description: Invalid request
 */
router.post("/user", new_user);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags:
 *       - user
 *     description: update user
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: data of the user to update it
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Invalid request
 */
router.put("/user/:id", verifyToken, update_user);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags:
 *       - user
 *     description: delete user
 *     security:
 *       - BearerHeader: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User deleted
 *       400:
 *         description: Invalid request
 */
router.delete("/user/:id", verifyToken, delete_user);

module.exports = router;
