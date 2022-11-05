const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class Rate {
  async findAll(id) {
    const collection = database().collection("ratings");
    const rates = await collection.find({ movie_id: Number(id) }).toArray();
    return rates;
  }

  async insert(userId, movieId, rateData) {
    const collection = database().collection("ratings");
    const query = {
      user_id: ObjectId(userId),
      movie_id: Number(movieId),
      rate: rateData.rate,
    };
    const newRate = await collection.insertOne(query);
    return newRate;
  }

  async update(rateId, newData) {
    const collection = database().collection("ratings");
    const updateRate = await collection.updateOne(
      { _id: ObjectId(rateId) },
      { $set: newData }
    );
    return updateRate;
  }

  async delete(id) {
    const collection = database().collection("ratings");
    const deleteRate = await collection.deleteOne({ _id: ObjectId(id) });
    return deleteRate;
  }
}

module.exports = new Rate();
