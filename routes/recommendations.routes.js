const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser").json();
const {
  recommendations,
  new_recommendation,
  update_recommendation,
  delete_recommendation,
} = require("../controllers/recommendations");

router.get("/user/:id/recommendations", recommendations);
router.post(
  "/user/:id/recommendations/:user_id",
  bodyParser,
  new_recommendation
);
router.put(
  "/user/:id/recommendations/:recommendation_id",
  bodyParser,
  update_recommendation
);
router.delete(
  "/user/:id/recommendations/:recommendation_id",
  delete_recommendation
);

module.exports = router;
