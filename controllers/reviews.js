const reviewModel = require("./../models/reviews");

const reviews = async (req, res) => {
  let movieId = req.params["id"];
  const response = await reviewModel.findAll(movieId);
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const new_review = async (req, res) => {
  let movieId = req.params["id"];
  let userId = req.params["user_id"];
  let reviewData = req.body;
  const response = await reviewModel.insert(userId, movieId, reviewData);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("Review created");
};

const update_review = async (req, res) => {
  let reviewId = req.params["review_id"];
  let reviewData = req.body;
  const response = await reviewModel.update(reviewId, reviewData);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("Review updated");
};

const delete_review = async (req, res) => {
  let reviewId = req.params["user_id"];
  const response = await reviewModel.delete(reviewId);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("Reviews deleted");
};

module.exports = {
  reviews,
  new_review,
  update_review,
  delete_review,
};
