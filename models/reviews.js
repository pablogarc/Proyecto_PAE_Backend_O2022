const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class Review {
  async findAll(movieId) {
    try {
      const collection = database().collection("reviews");
      const reviews = await collection
        .find({ movie_id: Number(movieId) })
        .toArray();
      return reviews;
    } catch (err) {
      return false;
    }
  }

  async insert(userId, movieId, reviewData) {
    try {
      const collection = database().collection("reviews");
      const query = {
        user_id: ObjectId(userId),
        movie_id: Number(movieId),
        content: reviewData.content
      };
      await collection.insertOne(query);
      return true;
    } catch (err) {
      return false;
    }
  }

  async update(reviewId, newData) {
    try {
      const collection = database().collection("reviews");
      const updateReview = await collection.updateOne(
        { _id: ObjectId(reviewId) },
        { $set: newData }
      );
      if (updateReview.matchedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  async delete(id) {
    try {
      const collection = database().collection("reviews");
      const deleteReview = await collection.deleteOne({ _id: ObjectId(id) });
      if (deleteReview.deletedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new Review();
