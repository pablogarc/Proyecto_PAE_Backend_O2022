const recommendationModel = require("./../models/recommendations");

const recommendations = async (req, res) => {
  let userId = req.params["id"];
  const response = await recommendationModel.findAll(userId);
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const new_recommendation = async (req, res) => {
  let senderUserId = req.params["id"];
  let receiverUserId = req.params["user_id"];
  let recommendationData = req.body;
  const response = await recommendationModel.insert(
    senderUserId,
    receiverUserId,
    recommendationData
  );
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("recommendation created");
};

const update_recommendation = async (req, res) => {
  let recommendationId = req.params["recommendation_id"];
  let recommendationData = req.body;
  const response = await recommendationModel.update(
    recommendationId,
    recommendationData
  );
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("recommendation updated");
};

const delete_recommendation = async (req, res) => {
  let recommendationId = req.params["recommendation_id"];
  const response = await recommendationModel.delete(recommendationId);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("recommendation deleted");
};

module.exports = {
  recommendations,
  new_recommendation,
  update_recommendation,
  delete_recommendation,
};
