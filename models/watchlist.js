const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class WatchList {
  async findOne(userId) {
    try {
      const collection = database().collection("watchlist");
      const watchList = await collection.findOne({ user_id: ObjectId(userId) });
      return watchList;
    } catch (err) {
      return false;
    }
  }

  async insert(userId) {
    const collection = database().collection("watchlist");
    const watchList = await collection.findOne({ user_id: ObjectId(userId) });

    if(watchList) return false;

    const query = {
      user_id: ObjectId(userId),
      movies: [],
    };

    await collection.insertOne(query);
    return true;
  }

  async update(userId, movieId, flag) {
    try {
      const collection = database().collection("watchlist");

      if (flag === "remove") {
        await collection.updateOne(
          { user_id: ObjectId(userId) },
          { $pull: { movies: Number(movieId) } }
        );
        const msg = "this item have been removed";
        return msg;
      }

      await collection.updateOne(
        { user_id: ObjectId(userId) },
        { $push: { movies: Number(movieId) } }
      );
      const msg = "this item have been added";
      return msg;
    } catch (err) {
      return false;
    }
  }

  async delete(userId) {
    try {
      const collection = database().collection("watchlist");
      const deleteWatchList = await collection.deleteOne({
        user_id: ObjectId(userId),
      });
      if (deleteWatchList.deletedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new WatchList();
