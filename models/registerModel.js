const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,},
  contactNo: {
    type: String,
  },
  industry: {type: String,
  },
  modelName: {type: String,
  },
  modelSerialNo: {
    type: String,
  },
  city: {
    type: String,
    
  },
  country: {
    type: String,
  }
});

module.exports = mongoose.model('Userr', registerSchema);
