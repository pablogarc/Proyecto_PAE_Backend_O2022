const rateModel = require("./../models/ratings");

const rates = async (req, res) => {
  let movieId = req.params["id"];
  const response = await rateModel.findAll(movieId);
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const new_rate = async (req, res) => {
  let movieId = req.params["id"];
  let userId = req.params["user_id"];
  let rateData = req.body;
  const response = await rateModel.insert(userId, movieId, rateData);
  if (!response)
    return res.status(400).send("This user already rated this movie");

  res.status(200).send("Rating created");
};

const update_rate = async (req, res) => {
  let rateId = req.params["rating_id"];
  let rateData = req.body;
  const response = await rateModel.update(rateId, rateData);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("Rating updated");
};

const delete_rate = async (req, res) => {
  let rateId = req.params["rating_id"];
  const response = await rateModel.delete(rateId);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("Rating deleted");
};

module.exports = {
  rates,
  new_rate,
  update_rate,
  delete_rate,
};
