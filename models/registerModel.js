const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,

  },
  ContactNo: {
    type: String,
  },
  Industry: {
    type: String,
  },
  ModelName: {
    type: String,
  },
  ModelSerialNo: {
    type: String,
    required: true,
  },
  City: {
    type: String,
  },
  Country: {
    type: String,
  }
});

module.exports = mongoose.model('Register', registerSchema);

