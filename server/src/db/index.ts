import * as mongoose from 'mongoose';

const initDB = (dbUrl: string) => {
    mongoose.connect(dbUrl, {
        useCreateIndex: true,
        useNewUrlParser: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connection open to ' + dbUrl);
    });

    mongoose.connection.on('error', err => {
        console.log('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection disconnected');
    });
};

export default initDB;
