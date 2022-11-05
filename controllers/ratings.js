const rateModel = require("./../models/ratings");

const rates = async (req, res) => {
  let movieId = req.params["id"];
  res.status(200).send(await rateModel.findAll(movieId));
};

const new_rate = async (req, res) => {
  let movieId = req.params["id"];
  let userId = req.params["user_id"];
  let rateData = req.body;
  res.status(200).send(await rateModel.insert(userId, movieId, rateData));
};

const update_rate = async (req, res) => {
  let rateId = req.params["rating_id"];
  let rateData = req.body;
  res.status(200).send(await rateModel.update(rateId, rateData));
};

const delete_rate = async (req, res) => {
  let rateId = req.params["rating_id"];
  res.status(200).send(await rateModel.delete(rateId));
};

module.exports = {
  rates,
  new_rate,
  update_rate,
  delete_rate,
};
