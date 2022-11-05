const express = require("express");
const axios = require("axios");
const path = require("path");
const database = require("./database");
const moviesRoutes = require("./routes/movies.routes");
const usersRoutes = require("./routes/users.routes");
const reviewsRoutes = require("./routes/reviews.routes");
const ratingsRoutes = require("./routes/ratings.routes");
const recommendationsRoutes = require("./routes/recommendations.routes");
const watchListRoutes = require("./routes/watchlist.routes");
require("dotenv").config();

const app = express();
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

app.use(
  "/",
  moviesRoutes,
  usersRoutes,
  reviewsRoutes,
  ratingsRoutes,
  recommendationsRoutes,
  watchListRoutes
);

database
  .connect()
  .then((client) => {
    const db = client.db("MOVITESO");
    database.db(db);

    app.listen(port, () => {
      console.log(`App is running in port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database");
  });
