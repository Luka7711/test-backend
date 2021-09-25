const User = require("../models/User");
const Job = require("../models/Job");
const Product = require("../models/Product");
const Property = require("../models/Property");
const Vehicle = require("../models/Vehicle");
const utils = require("../helpers/index.js");

const productController = {
  createJob: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const data = {
      title: req.body.title,
      jobType: req.body.jobType,
      description: req.body.description,
      location: req.body.location,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      perHour: req.body.perHour,
    };

    const newJob = await new Job(data).save();

    // set user's onModel to jobModel
    user.createdPosts.push(newJob._id);
    user.onModel = "Job";
    user.save();

    res.json({
      user: user,
    });
  },

  returnCreatedPosts: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const createdPosts = await user.populate("createdPosts");
    res.json({
      data: createdPosts,
    });
  },
};

module.exports = productController;
