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

  async googleLogin(userData) {
    try {
      const collection = database().collection("users");

      const data = await collection.findOne({
        email: userData.email,
        google: true,
      });

      if (!data) {
        const query = {
          full_name: userData.name,
          email: userData.email,
          image: "",
          description: "",
          google: true,
        };
        await collection.insertOne(query);
      }

      let payLoad = { email: userData.email };
      let token = jwt.sign(payLoad, process.env.JWT_SECRET_KEY, {
        expiresIn: "5h",
      });

      return token;
    } catch (err) {
      return false;
    }
  }

  async login(userData) {
    try {
      const collection = database().collection("users");

      const data = await collection.findOne({
        email: userData.email,
      });

      if (!data) return false;
      if (userData.password !== data.password) return false;

      let payLoad = { email: data.email };
      let token = jwt.sign(payLoad, process.env.JWT_SECRET_KEY, {
        expiresIn: "5h",
      });

      return token;
    } catch (err) {
      return false;
    }
  }

  async insert(userData) {
    const collection = database().collection("users");
    const usersData = await collection.findOne({ email: userData.email });

    if (usersData) return false;

    const query = {
      full_name: userData.full_name,
      email: userData.email,
      password: userData.password,
      image: "",
      description: "",
    };
    await collection.insertOne(query);
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
