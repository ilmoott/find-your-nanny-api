var Crud = require('../Utils/Crud');
var User = require('./User');

exports.findAll = function (req, res) {
    Crud.findAll(res, User, req.query);
};

exports.findById = function (req, res) {
    Crud.findById(res, User, req.query, req.params.id);
};

exports.insert = function (req, res) {
    Crud.insert(res, User, req.body);
};

exports.update = function (req, res) {
    Crud.update(res, User, req.params.id, req.body);
};

exports.delete = function (req, res) {
    Crud.delete(res, User, req.params.id);
};