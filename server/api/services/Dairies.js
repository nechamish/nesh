const fs = require("fs/promises");
const uuid = require("uuid");
const uuidv4 = uuid.v4;

// async function getUsers() {
//     console.log("ghj");
//     const data = await getAllJson();
//     return data.users;
//   }
  
async function getAllJson() {
    const dataFile = await fs.readFile("api/data/User.json");
    let data = JSON.parse(dataFile);
    return data;
  }

async function getDairiesById(id) {
  const data = await getAllJson();
  const allusers=data.users;
  const _user = await allusers.find((u) => u.id === id);
  return _user.dairies;
}

//עידכון
const updateJson = async (user) =>
  fs.writeFile("api/data/User.json", JSON.stringify(user));

//הוספה
async function addDairies(id, dairy) {
  let d = await getDairiesById(id);
  d = push(dairy);
  let alljson = getAllJson() || [];
  alljson.users.forEach((j) => {
    if (user.id == id) j.dairies = d;
  });
  await updateJson(alljson);
  return d;
}

async function updeteDairiesById(id, user) {
  const data = await getAllJson();
  const _user = await data.users.find((u) => u.id === id);
  Object.assign(_user, user);
  await updateJson(data);
  return _user;
}

async function deleteDairies(id) {
  const data = await getAllJson();
  const _user = await data.users.findIndex((u) => u.id === id);
  console.log(data.users);
  data.users[_user].dairies.splice(0, 3);
  try {
    await updateJson(data);
    return "success!";
  } catch (err) {
    console.error(err);
    return "faild";
  }
}

module.exports = {
  deleteDairies,
  updeteDairiesById,
  addDairies,
  getDairiesById,
};
// const data=await getUsers();
//  const index = await data.findIndex((u) => u.id === (id));
//  data[index].weight.meeting.splice(0, 3);