const User = require('../models/fetchModel');
const Product = require('../models/productModel');
const Userr = require('../models/registerModel')

const fetchData = async function (req, res) {
  try {
    const userData = await User.find({});
    // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user data from database');
  }
};

const productData = async function (req, res) {
  try {
    const productData = await Product.find({});
    // res.header('Access-Control-Allow-Origin', '*');
    res.json(productData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user data from database');
  }
};
const createData = async function (req, res) {
  const userData = req.body;
  const newUser = new User(userData);

  try {
    const savedUser = await newUser.save();
    console.log("su",savedUser)
    // res.header('Access-Control-Allow-Origin', '*');
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};
const createProduct = async function (req, res) {
  const userData = req.body;
  const newProduct = new Product(userData);

  try {
    const savedUser = await newProduct.save();
    console.log("su",savedUser)
    // res.header('Access-Control-Allow-Origin', '*');
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};
const createUser = async function (req, res) {
  try {
    
    let reqBody = req.body;
    let createUser = await  Userr.create(reqBody);
    res.status(201).send({
        status: true,
        message: "user successfully registerd",
        data: createUser,
    });;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.fetchData = fetchData;
module.exports.createData = createData;
module.exports.productData = productData;
module.exports.createProduct = createProduct;
module.exports.createUser = createUser;
