const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class WatchList {
  async findOne(userId) {
    const collection = database().collection("watchlist");
    const watchList = await collection.findOne({ user_id: ObjectId(userId) });
    return watchList;
  }

  async insert(userId) {
    const collection = database().collection("watchlist");
    const query = {
      user_id: ObjectId(userId),
      movies: [],
    };
    const watchList = await collection.insertOne(query);
    return watchList;
  }

  async update(userId, movieId, flag) {
    const collection = database().collection("watchlist");

    if (flag === "remove") {
      const updateWatchList = await collection.updateOne(
        { user_id: ObjectId(userId) },
        { $pull: { movies: Number(movieId) } }
      );
      const msg = "this item have been removed";
      return msg;
    }

    const updateWatchList = await collection.updateOne(
      { user_id: ObjectId(userId) },
      { $push: { movies: Number(movieId) } }
    );
    const msg = "this item have been added";
    return msg;
  }

  async delete(userId) {
    const collection = database().collection("watchlist");
    const deleteWatchList = await collection.deleteOne({
      user_id: ObjectId(userId),
    });
    return deleteWatchList;
  }
}

module.exports = new WatchList();
