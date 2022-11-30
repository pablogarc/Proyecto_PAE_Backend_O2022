const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class recommendation {
  async findAll(id) {
    try {
      const collection = database().collection("recommendations");
      const recommendations = await collection
        .find({ sender_user_id: ObjectId(id) })
        .toArray();
      return recommendations;
    } catch (err) {
      return false;
    }
  }

  async insert(senderUserId, receiverUserId, recommendationData) {
    try {
      const collection = database().collection("recommendations");
      const query = {
        sender_user_id: ObjectId(senderUserId),
        receiver_user_id: ObjectId(receiverUserId),
        content: recommendationData.content,
      };
      await collection.insertOne(query);
      return true;
    } catch (err) {
      return false;
    }
  }

  async update(recommendationId, recommendationData) {
    try {
      const collection = database().collection("recommendations");
      const updateRecommendation = await collection.updateOne(
        { _id: ObjectId(recommendationId) },
        { $set: recommendationData }
      );
      if (updateRecommendation.matchedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  async delete(id) {
    try {
      const collection = database().collection("recommendations");
      const deleterecommendation = await collection.deleteOne({
        _id: ObjectId(id),
      });
      if (deleterecommendation.deletedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new recommendation();
