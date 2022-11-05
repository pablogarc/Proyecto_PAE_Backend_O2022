const movieModel = require("./../models/movies");

const all_movies = async (req, res) => {
  res.status(200).send(await movieModel.findAll());
};

const single_movie = async (req, res) => {
  let id = req.params["id"];
  res.status(200).send(await movieModel.findById(id));
};

const movies_by_title = async (req, res) => {
  let title = req.query.title;
  res.status(200).send(await movieModel.findByTitle(title));
};

const movies_by_genre = async (req, res) => {
  let genre = req.query.genre;
  res.status(200).send(await movieModel.findByGenre(genre));
};

module.exports = {
  all_movies,
  single_movie,
  movies_by_title,
  movies_by_genre
};
