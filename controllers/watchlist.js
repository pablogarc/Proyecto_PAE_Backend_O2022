const watchListModel = require("./../models/watchlist");

const watchList = async (req, res) => {
  let userId = req.params["id"];
  const response = await watchListModel.findOne(userId);
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const new_watchList = async (req, res) => {
  let userId = req.params["id"];
  const response = await watchListModel.insert(userId);
  if (!response)
    return res.status(400).send("this user already has a watchlist");
  res.status(200).send("watchlist created");
};

const update_watchList = async (req, res) => {
  let userId = req.params["id"];
  let movieId = req.params["movie_id"];
  let flag = req.body.flag;
  const response = await watchListModel.update(userId, movieId, flag);
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const delete_watchList = async (req, res) => {
  let userId = req.params["id"];
  const response = await watchListModel.delete(userId);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("watchlist deleted");
};

module.exports = {
  watchList,
  new_watchList,
  update_watchList,
  delete_watchList,
};
