var Crud = require('../Utils/Crud');
var Schema = require('./Partner');

exports.findAll = function (req, res) {
    Crud.findAll(res, Schema, req.query);
};

exports.findById = function (req, res) {
    Crud.findById(res, Schema, req.query, req.params.id);
};

exports.insert = function (req, res) {
    Crud.insert(res, Schema, req.body);
};

exports.update = function (req, res) {
    Crud.update(res, Schema, req.params.id, req.body);
};

exports.delete = function (req, res) {
    Crud.delete(res, Schema, req.params.id);
};