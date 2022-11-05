const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser").json();
const {
  reviews,
  new_review,
  update_review,
  delete_review,
} = require("../controllers/reviews");

router.get("/movie/:id/reviews", reviews);
router.post("/movie/:id/reviews/:user_id", bodyParser, new_review);
router.put("/movie/:id/reviews/:review_id", bodyParser, update_review);
router.delete("/movie/:id/reviews/:review_id", delete_review);

module.exports = router;
