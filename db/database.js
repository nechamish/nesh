const { MongoClient } = require("mongodb");
require("dotenv").config();
const connectionString = "mongodb://localhost:27017/test";
class dataBase {
  constructor() {}
  async connect() {
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    let connected = await client.connect();
    this.db = connected.db();

    console.log("DB Connected!");
  }
  getDB() {
    return this.db;
  }
}

module.exports = new dataBase();




