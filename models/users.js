const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const database = require("./../database/database");
require("dotenv").config();

class User {
  async findAll() {
    try {
      const collection = database().collection("users");
      const users = await collection.find({}).toArray();
      return users;
    } catch (err) {
      return false;
    }
  }

  async findOne(id) {
    try {
      const collection = database().collection("users");
      const user = await collection.findOne({ _id: ObjectId(id) });
      return user;
    } catch (err) {
      return false;
    }
  }

  async login(userData) {
    const collection = database().collection("users");
    const errorMsg = "Invalid request";

    const data = await collection.findOne({
      email: userData.email,
    });

    if (!data) return errorMsg;
    if (userData.password !== data.password) return errorMsg;

    let payLoad = { id: data._id };
    let token = jwt.sign(payLoad, process.env.JWT_SECRET_KEY, {
      expiresIn: "5h",
    });

    return token;
  }

  async insert(userData) {
    const collection = database().collection("users");
    const usersData = await collection.findOne({ email: userData.email });

    if (usersData) return false;

    await collection.insertOne(userData);
    return true;
  }

  async update(id, newData) {
    try {
      const collection = database().collection("users");
      const updateUser = await collection.updateOne(
        { _id: ObjectId(id) },
        { $set: newData }
      );
      if (updateUser.matchedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  async delete(id) {
    try {
      const collection = database().collection("users");
      const deleteUser = await collection.deleteOne({ _id: ObjectId(id) });
      if (deleteUser.deletedCount === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new User();
