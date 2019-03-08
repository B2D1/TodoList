const mongoose = require('mongoose');

const initDB = dbUrl => {
    mongoose.connect(dbUrl, {
        useCreateIndex: true,
        useNewUrlParser: true,
    });

    mongoose.connection.on('connected', function() {
        console.log('------Mongoose connection open to ' + dbUrl + '------');
    });

    mongoose.connection.on('error', function(err) {
        console.log('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose connection disconnected');
    });
};

module.exports = initDB;
