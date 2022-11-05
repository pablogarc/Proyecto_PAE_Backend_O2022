const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser").json();
const {
  single_user,
  users,
  new_user,
  delete_user,
  update_user,
} = require("../controllers/users");

router.get("/user/:id", single_user);
router.get("/users", users);
router.post("/user", bodyParser, new_user);
router.put("/user/:id", bodyParser, update_user);
router.delete("/user/:id", delete_user);

module.exports = router;
