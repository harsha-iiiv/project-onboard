/* eslint-disable no-undef */
//DB_connection
require("dotenv/config");
const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTIONS, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;