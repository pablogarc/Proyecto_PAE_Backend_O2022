const express = require("express");
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
const port = process.env.PORT || 3000;

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger.json");
const swaggerDocument = swaggerJsDoc(swaggerOptions);

// middlewares
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use(
  "/",
  moviesRoutes,
  usersRoutes,
  reviewsRoutes,
  ratingsRoutes,
  recommendationsRoutes,
  watchListRoutes
);

// connect to database
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
