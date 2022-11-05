const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser").json();
const {
  watchList,
  new_watchList,
  update_watchList,
  delete_watchList,
} = require("../controllers/watchlist");

router.get("/user/:id/watchlist", watchList);
router.post("/user/:id/watchlist", new_watchList);
router.put("/user/:id/watchlist/:movie_id", bodyParser, update_watchList);
router.delete("/user/:id/watchlist", delete_watchList);

module.exports = router;
