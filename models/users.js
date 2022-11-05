const { ObjectId } = require("mongodb");
const database = require("./../database/database");

class User {
  async findAll() {
    const collection = database().collection("users");
    const users = await collection.find({}).toArray();
    return users;
  }

  async findOne(id) {
    const collection = database().collection("users");
    const user = await collection.findOne({ _id: ObjectId(id) });
    return user;
  }

  async insert(userData) {
    const collection = database().collection("users");
    const newUser = await collection.insertOne(userData);
    return newUser;
  }

  async update(id, newData) {
    const collection = database().collection("users");
    const updateUser = await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: newData }
    );
    return updateUser;
  }

  async delete(id) {
    const collection = database().collection("users");
    const deleteUser = await collection.deleteOne({ _id: ObjectId(id) });
    return deleteUser;
  }
}

module.exports = new User();
