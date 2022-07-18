const mongoose = require("mongoose");
require('dotenv').config();
const CONNECTION_STRING = "mongodb://localhost:27017/test";

class MongooseDB {
  constructor() {

  }

  async connect() {
    const url =CONNECTION_STRING;
    await mongoose.connect(url);
    console.log(`mongoose DB connected!`);
  }
}
module.exports = new MongooseDB();
