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
