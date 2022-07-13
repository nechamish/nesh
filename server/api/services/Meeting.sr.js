const fs = require("fs/promises");
const uuid = require("uuid");
const uuidv4 = uuid.v4;



async function getUsers() {
  console.log("ghj");
  const data = await getAllJson();
  return data.users;
}


async function getAllJson() {
  debugger;
  const dataFile = await fs.readFile("api/data/User.json");
  let data = JSON.parse(dataFile);
  console.log(data);
  return data;
}


const updateJson = async (user) =>
  fs.writeFile("api/data/User.json", JSON.stringify(user));

async function getAllMeeting(){
    const data = await getUsers(); 
    let meetings=[];
    let i=0;
    data.forEach(user=>{
      user.weight.meeting.forEach(meeting=>{meetings[i++]=meeting})
    })
    return meetings;
}

async function getMeetingbyId(id){
const data = await getUsers(); 
const user=data.find(user=>user.id==id);
return user.weight.meeting;
}

async function addMeeting(id,data){
   if (!data.id) {
    throw new Error("user not found");
  }
  const dataa = await getAllJson();
  const index = data.users.findIndex(user=>user.id==(id));
  dataa.users[index].weight.meeting.push(data);
  await updateJson(data);
  return dataa.users[index].weight.meeting;
}

async function deleteMeetingById(id){
const data=await getUsers();
 const index = await data.findIndex((u) => u.id === (id));
 data[index].weight.meeting.splice(0, 3);
  try {
    await updateJson(data);
    return "success!";
  } catch (err) {
    console.error(err);
    return "faild";
  }

}

async function updateMeeting(id, meeting){
  const data = await getAllJson();
  const index = await data.users.findIndex((u) => u.id === (id));
  Object.assign(meeting, data[index].weight.meeting[0]);
  await updateJson(data);
  return data[index].weight.meeting;
};


  module.exports = {
  getAllMeeting,
  getMeetingbyId,
  deleteMeetingById,
  addMeeting,
  updateMeeting,
};
