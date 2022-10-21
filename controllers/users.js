const single_user = (req, res) => {
    res.status(200).send('/GET single_user works!');
};

const users = (req, res) => {
    res.status(200).send('/GET users works!');
};

module.exports = {
    single_user, users
};