const fs = require("fs/promises");
const uuid = require("uuid");
const { ObjectId } = require("mongodb");
const uuidv4 = uuid.v4;
const userModel=require('../../model/user.Schema');

async function getUsers() {
  const users = await userModel.find();
  return users;
}

async function getUserById(id) {
  const user = await userModel.findById(ObjectId(id));
  return user;
}

async function findByIdAndDelete(id) {
  await userModel.findByIdAndDelete(id);
  return "sucsess!";
}

const updateUser = async (id, user) => {
   const updateUser = await userModel.updateOne(
    { _id: ObjectId(id) },
    user
  );
  return user;
};


async function addUser(user) {
    const userAdd = await new userModel(user);
    return await userAdd.save();
  };


  module.exports = {
    getUsers,
    getUserById,
    addUser,
    findByIdAndDelete,
    updateUser,
  };




  //הפונקציות הקודמות שהיובשביל הקובץ גייסון
// async function getAllJson() {
// const dataFile = await fs.readFile("api/data/User.json");
// console.log(dataFile);
//   let data = JSON.parse(dataFile);
//   console.log(data);
//   return data;
// }

// const updateJson = async (user) =>
//   fs.writeFile("api/data/User.json", JSON.stringify(user));

// async function getUserById(id) {
//   const users = await getUsers();
//   const user = await users.find((u) => u.id === id);
//   console.log(user);
//   return user;
// }





// (module.exports.updateUser = async (_id, userToUpdate) => {
//   const updateUser = await userModel.updateOne(
//     { _id: ObjectId(_id) },
//     userToUpdate
//   );
//   return `update user ${update.name}`;
// }),





// async function findByIdAndDelete(id) {
//   const data = await getAllJson();
//   const index = await data.users.findIndex((u) => u.id === id);
//   data.users.splice(index, 1);
//   try {
//     await updateJson(data);
//     return "success!";
//   } catch (err) {
//     console.error(err);
//     return "faild";
//   }
// }



// const updateUser = async (id, user) => {
//   const data = await getAllJson();
//   const _user = await data.users.find((u) => u.id === parseInt(id));
//   Object.assign(_user, user);
//   await updateJson(data);
//   return _user;
// };


