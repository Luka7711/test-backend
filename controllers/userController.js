const User = require("../models/User");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const utils = require("../helpers/index");

const userController = {
  createAccount: async (req, res) => {
    const valid = await utils.validateEmail(req.body.email);
    if (valid) {
      const { username, email } = req.body;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          const newAcct = { username: username, password: hash, email: email };
          const user = new User(newAcct);
          user.save();
          res.json({
            status: 200,
            user: user,
          });
        });
      });
    } else {
      res.json({
        status: 404,
        message: "email is not valid",
      });
    }
  },

  login: async (req, res) => {
    const user = await User.findById(req.params.id);
    let authorized = undefined;
    bcrypt.compare(req.body.password, user.password, (error, result) => {
      if (result) authorized = true;
      else authorized = false;
      res.json({
        status: 200,
        authorized: authorized,
      });
    });
  },
  deleteAll: async (req, res) => {
    await User.deleteMany({});
    const users = await User.find({});
    res.json({
      user: users,
    });
  },
};

module.exports = userController;
