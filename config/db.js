// ----------------------------------------
// ----------------------------------------
// Conectar com o Mongo
// ----------------------------------------
// ----------------------------------------
var Config = require('../config');
var mongoose = require('mongoose');

mongoose.connection.once('open', function () {
    console.log('MongoDB event open');
    console.log('MongoDB connected [%s]', Config.MONGO_URL);

    mongoose.connection.on('connected', function () {
        console.log('MongoDB event connected');
    });

    mongoose.connection.on('disconnected', function () {
        console.log('MongoDB event disconnected');
    });

    mongoose.connection.on('reconnected', function () {
        console.log('MongoDB event reconnected');
    });

    mongoose.connection.on('error', function (err) {
        console.log('MongoDB event error: ' + err);
    });
});

mongoose.connect(Config.MONGO_URL, { useNewUrlParser: true });

