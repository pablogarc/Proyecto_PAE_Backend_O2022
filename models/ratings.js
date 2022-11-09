const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class Rate {
  async findAll(id) {
    try {
      const collection = database().collection("ratings");
      const rates = await collection.find({ movie_id: Number(id) }).toArray();
      return rates;
    } catch (err) {
      return false;
    }
  }

  async insert(userId, movieId, rateData) {
    const collection = database().collection("ratings");
    const rate = await collection.findOne({
      user_id: ObjectId(userId),
      movie_id: Number(movieId),
    });

    if (rate) return false;

    const query = {
      user_id: ObjectId(userId),
      movie_id: Number(movieId),
      rate: Number(rateData.rate),
    };

    await collection.insertOne(query);
    return true;
  }

  async update(rateId, newData) {
    try {
      const collection = database().collection("ratings");
      const updateRate = await collection.updateOne(
        { _id: ObjectId(rateId) },
        { $set: newData }
      );
      if (updateRate.matchedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  async delete(id) {
    try {
      const collection = database().collection("ratings");
      const deleteRate = await collection.deleteOne({ _id: ObjectId(id) });
      if (deleteRate.deletedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new Rate();
