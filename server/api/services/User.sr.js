const fs = require("fs/promises");
const uuid = require("uuid");
const uuidv4 = uuid.v4;

async function getUsers() {
  console.log("ghj");
  const data = await getAllJson();
  console.log(data.users)
  return data.users;
}


async function getAllJson() {
  const dataFile = await fs.readFile("api/data/User.json");
  let data = JSON.parse(dataFile);
  console.log(data);
  return data;
}

const updateJson = async (user) =>
  fs.writeFile("api/data/User.json", JSON.stringify(user));

async function getUserById(id) {
  const users = await getUsers();
  const user = await users.find((u) => u.id === id);
  console.log(user);
  return user;
}


async function addUser(user) {
  if (!user.firstName || !user.lastName) {
    throw new Error("user must include your full name");
  }
  const users = await getUsers();
  user.id = users[users.length - 1].id + 1;
  const data = (await getAllJson()) || [];
  const exists = data.users.find(
    (u) => u.phone === user.phone && u.email === user.email
  );
  if (exists) {
    throw new Error("user with email and phone already exists");
  }
  data.users.push(user);
  await updateJson(data);
  return user;
}

async function findByIdAndDelete(id) {
  const data = await getAllJson();
  const index = await data.users.findIndex((u) => u.id === id);
  data.users.splice(index, 1);
  try {
    await updateJson(data);
    return "success!";
  } catch (err) {
    console.error(err);
    return "faild";
  }
}

const updateUser = async (id, user) => {
  const data = await getAllJson();
  const _user = await data.users.find((u) => u.id === parseInt(id));
  Object.assign(_user, user);
  await updateJson(data);
  return _user;
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  findByIdAndDelete,
  updateUser,
};
