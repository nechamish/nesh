const { MongoClient } = require("mongodb");
require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const connectionString = "https://localhost:3000";
class dataBase {
  constructor() {}
  async connect() {
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    let connected = await client.connect();
    this.db = connected.db(CONNECTION_STRING);

    console.log("DB Connected!");
  }
  getDB() {
    return this.db;
  }
}

module.exports = new dataBase();
