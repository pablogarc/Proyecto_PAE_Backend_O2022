const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.API_KEY;

class Movie {
  async findAll() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        apiKey +
        "&language=en-US&page=1"
    );
    const movies = response.data.results;
    return movies;
  }

  async findById(id) {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=" +
        apiKey +
        "&language=en-US"
    );
    const movie = response.data;
    return movie;
  }

  async findByTitle(title) {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          apiKey +
          "&query=" +
          title
      );
      const movies = response.data.results;
      return movies;
    } catch (err) {
      return false;
    }
  }

  async findByGenre(genre) {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          apiKey +
          "&with_genres=" +
          genre
      );
      const movies = response.data.results;
      return movies;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new Movie();
