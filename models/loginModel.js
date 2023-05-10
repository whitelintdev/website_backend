const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
  // Other user fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
