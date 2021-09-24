const User = require('../models/User');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const userController = {
  createAccount: async (req, res) => {
    const { username, email } = req.body;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        const newAcct = { username: username, password: hash, email: email };
        const user = new User(newAcct);
        user.save();
        res.json({
          status: 200,
          user: user
        });
      });
    });
  },

  login: async (req, res) => {
    const user = await User.findById(req.params.id);
    let authorized = undefined;
    bcrypt.compare(req.body.password, user.password, (error, result) => {
      if (result) authorized = true;
      else authorized = false;
      res.json({
        status: 200,
        authorized: authorized
      });
    });
  },
  deleteAll: async (req, res) => {
    await User.deleteMany({});
    const users = await User.find({});
    res.json({
      user: users
    });
  },
  getUserCars: async (req, res) => {
    const cars = await User.findOne({ username: req.params.username });
    cars.populate('cars').then(car => {
      res.json({
        car: car.cars
      });
    });
  }
};

module.exports = userController;
