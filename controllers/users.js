const userModel = require("./../models/users");

const single_user = async (req, res) => {
  let id = req.params["id"];
  const response = await userModel.findOne(id);
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const users = async (req, res) => {
  const response = await userModel.findAll();
  if (response === false) return res.status(400).send("Invalid request");
  res.status(200).send(response);
};

const googleLogin = async (req, res) => {
  let userData = req.body;
  const response = await userModel.googleLogin(userData);
  if (response === false) {
    res.status(400).send("Invalid request");
    return;
  }
  res.status(200).send(response);
};

const login = async (req, res) => {
  let userData = req.body;
  const response = await userModel.login(userData);
  if (response === false) {
    res.status(400).send("Invalid request");
    return;
  }
  res.status(200).send(response);
};

const new_user = async (req, res) => {
  let userData = req.body;
  const response = await userModel.insert(userData);
  if (!response) {
    res.status(400).send("Invalid request");
    return;
  }
  res.status(200).send(response);
};

const update_user = async (req, res) => {
  const id = req.params["id"];
  const newData = req.body;
  const response = await userModel.update(id, newData);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("user updated");
};

const image = async (req, res) => {
  const id = req.params["id"];
  const file = req.file;
  const response = await userModel.updateImage(id, file);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("file updated");
}

const delete_user = async (req, res) => {
  const id = req.params["id"];
  const response = await userModel.delete(id);
  if (!response) return res.status(400).send("Invalid request");
  res.status(200).send("user deleted");
};

module.exports = {
  single_user,
  users,
  googleLogin,
  login,
  new_user,
  update_user,
  delete_user,
  image
};
