const mongoose = require("mongoose");
const { Schema } = mongoose;
const meeting = require("./meeting.Schema");
const dairies = require("./Dairies.Schema");
const Userschema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: [
    {
      city: { type: String, required: true },
      street: { type: String, required: true },
      number: { type: Number, required: true },
    },
  ],
  phone: { type: String, required: true },
  email: { type: String, required: true },
  hight: { type: Number, required: true },

  weight: [
    {
      startWeight: { type: Number },
      meeting: [
        {
          type: [meeting.meetingsSchema],
        },
      ],
    },
  ],
  dairies: [
    {
      type: [dairies.Dairyschema],
    },
  ],
});
const UsersModel = mongoose.model("User", Userschema);
module.exports = UsersModel;
