const movieModel = require("./../models/movies");

const all_movies = async (req, res) => {
  const response = await movieModel.findAll();
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const single_movie = async (req, res) => {
  let id = req.params["id"];
  const response = await movieModel.findById(id);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const movies_by_title = async (req, res) => {
  let title = req.query.title;
  const response = await movieModel.findByTitle(title);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const movies_by_genre = async (req, res) => {
  let genre = req.query.genre;
  const response = await movieModel.findByGenre(genre);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

module.exports = {
  all_movies,
  single_movie,
  movies_by_title,
  movies_by_genre,
};
