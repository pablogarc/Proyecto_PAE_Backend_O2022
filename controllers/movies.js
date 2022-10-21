const all_movies = (req, res) => {
    res.status(200).send('GET /movies WORKS');
};

const single_movie = (req, res) => {
    res.status(200).send('GET /movie WORKS');
};

module.exports = {
    all_movies, single_movie
};