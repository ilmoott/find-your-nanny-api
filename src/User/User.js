var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  identificationNumber: { type: String, required: false },
  picture: { type: String, required: false },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
  DeletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('User', schema);