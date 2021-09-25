const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");

const allowList = "http://localhost:3000";
const corsOption = {
  origin: allowList,
};
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors(corsOption));

app.post("/new-user", userController.createAccount);
app.post("/user/:id", userController.login);
app.delete("/delete-all-users", userController.deleteAll);

app.post("/add-job/:user_id", productController.createJob);
app.post("/add-product/:user_id", productController.createProduct);
app.post("/add-vehicle/:user_id", productController.createVehicle);
app.post("/add-property/:user_id", productController.createProperty);

app.get("/posts/:user_id", productController.returnCreatedPosts);
app.get("/get-ads", productController.returnAllAdds);

app.listen(9000, () => {
  console.log("app listen on port 9000");
});

// app.delete('/user/:id', async (req, res) => {
//   await User.findByIdAndDelete(req.params.id, async (err, item) => {
//     if (err) console.log('item is not deleted');
//     else {
//       console.log('item deleted');
//       const users = await User.find({});
//       res.json({
//         status: 200,
//         users: users
//       });
//     }
//   });
// });

// app.put('/update-data/:id', async (req, res) => {
//   console.log(req.body);
//   const user = await User.findByIdAndUpdate(req.params.id, req.body);
//   const users = await User.find({});

//   res.json({
//     status: 200,
//     data: users
//   });
// });
