const mongoose = require("mongoose");
const { Schema } = mongoose;

const Dairyschema = new Schema({
  date: { type: "string", required: true },
  Breakfast: [],
  Lanch: [],
  Dinner: [],
});
const DairyModel = mongoose.model("dairies", Dairyschema);
module.exports = { DairyModel, Dairyschema };
