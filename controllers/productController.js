const User = require("../models/User");
const Job = require("../models/Job");
const Product = require("../models/Product");
const Property = require("../models/Property");
const Vehicle = require("../models/Vehicle");
const utils = require("../helpers/index.js");

const productController = {
  createJob: async (req, res) => {
    const user = await User.findById(req.params.id);
    const data = {
      title: reb.body.title,
      jobType: req.body.jobType,
      description: req.body.description,
      location: req.body.location,
      minSalary: req.minSalary,
      maxSalary: req.body.maxSalary,
      perHour: req.body.perHour,
    };

    console.log(data);
  },
};

module.exports = productController;
