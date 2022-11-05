const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser").json();
const {
  rates,
  new_rate,
  update_rate,
  delete_rate,
} = require("../controllers/ratings");

router.get("/movie/:id/ratings", rates);
router.post("/movie/:id/ratings/:user_id", bodyParser, new_rate);
router.put("/movie/:id/ratings/:rating_id", bodyParser, update_rate);
router.delete("/movie/:id/ratings/:rating_id", delete_rate);

module.exports = router;
