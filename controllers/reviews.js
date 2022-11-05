const reviewModel = require("./../models/reviews");

const reviews = async (req, res) => {
  let movieId = req.params["id"];
  res.status(200).send(await reviewModel.findAll(movieId));
};

const new_review = async (req, res) => {
  let movieId = req.params["id"];
  let userId = req.params["user_id"];
  let reviewData = req.body;
  res.status(200).send(await reviewModel.insert(userId, movieId, reviewData));
};

const update_review = async (req, res) => {
  let reviewId = req.params["review_id"];
  let reviewData = req.body;
  res.status(200).send(await reviewModel.update(reviewId, reviewData));
};

const delete_review = async (req, res) => {
  let reviewId = req.params["review_id"];
  res.status(200).send(await reviewModel.delete(reviewId));
};

module.exports = {
  reviews,
  new_review,
  update_review,
  delete_review,
};
