const express = require('express');
const router = express.Router();
const { single_user, users } = require('../controllers/users');

router.get('/user', single_user);
router.get('/users', users);
module.exports = router;