var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  token: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  CreatedAt: { type: Date, default: Date.now },
  DeletedAt: { type: Date, default: null },
  UpdatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Token', schema);