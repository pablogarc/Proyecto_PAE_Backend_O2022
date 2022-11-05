const watchListModel = require("./../models/watchlist");

const watchList = async (req, res) => {
  let userId = req.params["id"];
  res.status(200).send(await watchListModel.findOne(userId));
};

const new_watchList = async (req, res) => {
  let userId = req.params["id"];
  res.status(200).send(await watchListModel.insert(userId));
};

const update_watchList = async (req, res) => {
  let userId = req.params["id"];
  let movieId = req.params["movie_id"];
  let flag = req.body.flag;
  res.status(200).send(await watchListModel.update(userId, movieId, flag));
};

const delete_watchList = async (req, res) => {
  let userId = req.params["id"];
  res.status(200).send(await watchListModel.delete(userId));
};

module.exports = {
  watchList,
  new_watchList,
  update_watchList,
  delete_watchList,
};
