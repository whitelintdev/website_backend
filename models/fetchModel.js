const mongoose = require('mongoose');
//const db = require('../database');

// create a schema
const userSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_Image: { type: String, required: true },
  product_byLine: { type: String },
  product_desc_list: { type: [String], required: true },
  product_Price: { type: String }
});



module.exports = mongoose.model('Sms', userSchema);

