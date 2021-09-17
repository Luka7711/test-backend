const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db/db');
const User = require('./models/User');
const { findByIdAndUpdate } = require('./models/User');

const allowList = 'http://localhost:3000';
const corsOption = {
  origin: allowList
};
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cors(corsOption));

app.get('/clients', async (req, res) => {
  const users = await User.find({});
  res.json({
    users: users
  });
});

app.post('/new-data', async (req, res, next) => {
  const { username, car, price, image } = req.body;
  const data = {
    username: username,
    car: car,
    price: price,
    image: image
  };
  const newUser = await new User(data);
  newUser.save(async (err, user) => {
    if (err) return console.log(err);
    const foundUser = await User.find({});
    res.json({
      status: 200,
      message: foundUser
    });
  });
});

app.delete('/user/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id, async (err, item) => {
    if (err) console.log('item is not deleted');
    else {
      console.log('item deleted');
      const users = await User.find({});
      res.json({
        status: 200,
        users: users
      });
    }
  });
});

app.put('/update-data/:id', async (req, res) => {
  console.log(req.body);
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  const users = await User.find({});

  res.json({
    status: 200,
    data: users
  });
});

app.listen(9000, () => {
  console.log('app listen on port 9000');
});
