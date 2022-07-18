const mongoose = require("mongoose");
// require('dotenv').config();
const CONNECTION_STRING = "mongodb://localhost:27017";

class MongooseDB {
  constructor() {

  }

  async connect() {
    const url = `mongodb://localhost:${process.env.HOST || 27017}/${process.env.DB || "User"}`;
    console.log(url);
    await mongoose.connect(url);
    console.log(`mongoose DB connected!`);
  }
}
module.exports = new MongooseDB();
