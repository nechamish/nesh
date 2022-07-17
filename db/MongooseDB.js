const mongoose = require("mongoose");
require('dotenv').config();
const {CONNECTION_STRING} = process.env;

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
