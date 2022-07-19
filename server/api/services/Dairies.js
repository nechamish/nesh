const fs = require("fs/promises");
const uuid = require("uuid");
const uuidv4 = uuid.v4;
const { ObjectId } = require("mongodb");
const dairyModel = require("../../model/Dairies.Schema");
const userModel = require("../../model/user.Schema");




async function getDairiesById(id) {
  const user = await userModel.findById(ObjectId(id));
  return user.dairies;
}


async function updeteDairiesById(id, dairy) {
  console.log(dairy);
  const updateUser = await userModel.updateOne({ _id: ObjectId(id) }, dairy);
  return dairy;
}

async function addDairies(id, dairy) {
  const user = await userModel.findById(ObjectId(id));
  user.dairies.push (await new dairyModel(dairy));
  return await user.save();
};



async function deleteDairies(id) {
   const user = await userModel.findById(ObjectId(id));
   const dairy= await dairyModel.deleteOne({ _id: ObjectId(id)})
  dairy.save();
  
  return user;
}


module.exports = {
  deleteDairies,
  updeteDairiesById,
  addDairies,
  getDairiesById,
};
