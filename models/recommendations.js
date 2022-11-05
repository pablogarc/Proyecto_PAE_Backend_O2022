const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class recommendation {
  async findAll(id) {
    const collection = database().collection("recommendations");
    const recommendations = await collection
      .find({ sender_user_id: ObjectId(id) })
      .toArray();
    return recommendations;
  }

  async insert(senderUserId, receiverUserId, recommendationData) {
    const collection = database().collection("recommendations");
    const query = {
      sender_user_id: ObjectId(senderUserId),
      receiver_user_id: ObjectId(receiverUserId),
      content: recommendationData.content,
    };
    const newRecommendation = await collection.insertOne(query);
    return newRecommendation;
  }

  async update(recommendationId, recommendationData) {
    const collection = database().collection("recommendations");
    const updateRecommendation = await collection.updateOne(
      { _id: ObjectId(recommendationId) },
      { $set: recommendationData }
    );
    return updateRecommendation;
  }

  async delete(id) {
    const collection = database().collection("recommendations");
    const deleterecommendation = await collection.deleteOne({
      _id: ObjectId(id),
    });
    return deleterecommendation;
  }
}

module.exports = new recommendation();
