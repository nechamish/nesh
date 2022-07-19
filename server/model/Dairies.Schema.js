const mongoose = require("mongoose");
const { Schema } = mongoose;

const Dairyschema = new Schema({
  date: { type: String, required: true },
  Breakfast:[],
  Lanch: [],
  Dinner: [],
});
const DairyModel = mongoose.model("dairies", Dairyschema);
module.exports =  DairyModel;



