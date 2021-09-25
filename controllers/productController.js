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

    const newJob = await Job.create(data);

    // set user's onModel to jobModel
    user.created.job.push(newJob._id);
    user.save();

    res.json({
      job: newJob,
    });
  },

  createProduct: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const data = {
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      zipcode: req.body.zipcode,
    };

    const newProduct = await Product.create(data);
    user.created.product.push(newProduct._id);
    user.save();

    res.json({
      product: newProduct,
    });
  },

  createProperty: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const data = {
      category: req.body.category,
      propertyType: req.body.propertyType,
      numberOfbeds: req.body.numberOfbeds,
      numberOfbathroom: req.body.numberOfbathroom,
      price: req.body.price,
      description: req.body.description,
      zipcode: req.body.zipcode,
    };
    const newProperty = await Property.create(data);
    user.created.product.push(newProperty._id);
    user.save();

    res.json({
      property: newProperty,
    });
  },

  createVehicle: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const data = {
      model: req.body.model,
      make: req.body.make,
      year: req.body.year,
      price: req.body.price,
      zipcode: req.body.zipcode,
    };
    const newVehicle = await Vehicle.create(data);
    user.created.vehicle.push(newVehicle._id);

    res.json({
      vehicle: newVehicle,
    });
  },

  returnCreatedPosts: async (req, res) => {
    let user = await User.findById(req.params.user_id);

    const jobs = await user.created.populate("job");
    const products = await user.created.populate("product");
    const property = await user.created.populate("property");
    res.json({
      jobs: jobs,
      products: products,
      peroperty: property,
    });
  },
  returnAllAdds: async (req, res) => {
    const jobs = await Job.find();
    const products = await Product.find();
    const property = await Property.find();
    const vehicle = await Vehicle.find();

    const data = {
      jobs: jobs,
      products: products,
      poperty: property,
      vehicle: vehicle,
    };

    res.json({
      data: data,
    });
  },
};

module.exports = productController;
