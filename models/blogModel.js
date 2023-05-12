const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    Image: { type: String},
    Heading: { type: String},
    Category: { type: String },
    Paragraph: { type: String },
    
  });
  
  
  
  module.exports = mongoose.model('Blog', blogSchema);
