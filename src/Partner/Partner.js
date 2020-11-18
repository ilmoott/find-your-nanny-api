var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  companyName: { type: String, required: false },
  identificationNumber: { type: String, required: false },
  address: { type: String, required: false },
  addressNumber: { type: String, required: false },
  addressComplement: { type: String, required: false },
  neighborhood: { type: String, required: false },
  postalCode: { type: String, required: false },
  city:{type:String, required:false},
  state:{type:String, required:false},
  longitute: { type: String, required: false },
  latitude: { type: String, required: false },
  picture: { type: String, required: false },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
  DeletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Partner', schema);