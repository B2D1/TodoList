<<<<<<< HEAD
import * as mongoose from "mongoose";

const initDB = (DB_URI: string) => {
  mongoose.connect(DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connection open to " + DB_URI);
  });

  mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection disconnected");
  });
};

export default initDB;
=======
import mongoose from 'mongoose';

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        return console.log(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
