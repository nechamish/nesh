const mongoose = require("mongoose");
const { Schema } = mongoose;
const meeting = require("./meeting.Schema");
const dairies = require("./dairies.Schema");

const Userschema = new Schema({
  id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: [
    {
      city: { type: String, required: true },
      street: { type: String, required: true },
      number: { type: number, required: true },
    },
  ],
  phone: { type: String, required: true },
  email: { type: email, required: true },
  hight: { type: number, required: true },
  // weight: ({startWeight:{type:number,required: true},
  //          meeting:meetingsSchema,
  //          dairies:dairiesSchema,
  // })
  weight: [
    {
      startWeight: { type: number },
      meeting: [
        {
          type: [meeting.meetingsSchema],
        },
      ],
    },
  ],
  diary: [
    {
      type: [dairies.Dairyschema],
    },
  ],
});
const UsersModel = mongoose.model("Users", Userschema);
module.exports = UsersModel;
