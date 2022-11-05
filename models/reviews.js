const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class Review {
  async findAll(movieId) {
    const collection = database().collection("reviews");
    const reviews = await collection
      .find({ movie_id: Number(movieId) })
      .toArray();
    return reviews;
  }

  async insert(userId, movieId, reviewData) {
    const collection = database().collection("reviews");
    const query = {
      user_id: ObjectId(userId),
      movie_id: Number(movieId),
      content: reviewData.content
    };
    const newReview = await collection.insertOne(query);
    return newReview;
  }

  async update(reviewId, newData) {
    const collection = database().collection("reviews");
    const updateReview = await collection.updateOne(
      { _id: ObjectId(reviewId) },
      { $set: newData }
    );
    return updateReview;
  }

  async delete(id) {
    const collection = database().collection("reviews");
    const deleteReview = await collection.deleteOne({ _id: ObjectId(id) });
    return deleteReview;
  }
}

module.exports = new Review();
