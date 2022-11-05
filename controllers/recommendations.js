const recommendationModel = require("./../models/recommendations");

const recommendations = async (req, res) => {
  let userId = req.params["id"];
  res.status(200).send(await recommendationModel.findAll(userId));
};

const new_recommendation = async (req, res) => {
  let senderUserId = req.params["id"];
  let receiverUserId = req.params["user_id"];
  let recommendationData = req.body;
  res
    .status(200)
    .send(
      await recommendationModel.insert(
        senderUserId,
        receiverUserId,
        recommendationData
      )
    );
};

const update_recommendation = async (req, res) => {
  let recommendationId = req.params["recommendation_id"];
  let recommendationData = req.body;
  res
    .status(200)
    .send(
      await recommendationModel.update(recommendationId, recommendationData)
    );
};

const delete_recommendation = async (req, res) => {
  let recommendationId = req.params["recommendation_id"];
  res.status(200).send(await recommendationModel.delete(recommendationId));
};

module.exports = {
  recommendations,
  new_recommendation,
  update_recommendation,
  delete_recommendation,
};
