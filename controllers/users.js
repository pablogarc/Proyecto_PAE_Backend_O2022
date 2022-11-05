const userModel = require("./../models/users");

const single_user = async (req, res) => {
  let id = req.params["id"];
  res.status(200).send(await userModel.findOne(id));
};

const users = async (req, res) => {
  res.status(200).send(await userModel.findAll());
};

const new_user = async (req, res) => {
  let user = req.body;
  res.status(200).send(await userModel.insert(user));
  //res.status(200).send('new_user works');
};

const update_user = async (req, res) => {
  let id = req.params["id"];
  let newData = req.body;
  res.status(200).send(await userModel.update(id, newData));
  //res.status(200).send('update_user works');
};

const delete_user = async (req, res) => {
  let id = req.params["id"];
  res.status(200).send(await userModel.delete(id));
  //res.status(200).send('delete_user works');
};

module.exports = {
  single_user,
  users,
  new_user,
  delete_user,
  update_user,
};
