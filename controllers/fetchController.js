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
const fetchUser = async function (req, res) {
  try {
    const userData = await Userr.find({});
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
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';
const login = async function (req, res)  {
  try {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the credentials match the admin account
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // If so, generate a JWT token with the admin flag
    //const token = jwt.sign({ username, isAdmin: true }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message:'login successfully' });
  } else {
    // If not, return an error
    res.status(401).json({ message: 'Invalid credentials' });
  }
}  catch (error) {
  res.status(400).json({ error: error.message });
}
};

module.exports.fetchData = fetchData;
module.exports.createData = createData;
module.exports.productData = productData;
module.exports.createProduct = createProduct;
module.exports.createUser = createUser;
module.exports.fetchUser = fetchUser;
module.exports.login = login;
