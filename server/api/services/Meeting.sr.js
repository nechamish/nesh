const fs = require("fs/promises");
const uuid = require("uuid");
const { ObjectId } = require("mongodb");
const uuidv4 = uuid.v4;
const userModel = require("../../model/user.Schema");
const meetingModel = require("../../model/meeting.Schema");

async function getAllMeeting() {
  const users = await userModel.find();
  console.log(users[0].weight)
  let meetings = [];
  let i = 0;
  users.forEach((user) => {
    user.weight.forEach((meeting) => {
      meetings[i++] = meeting;
    });
  });
  return meetings;
}

async function getMeetingbyId(id) {
  const user = await userModel.findById(ObjectId(id));
  console.log(user.weight.meeting);
  return user.weight;

}

async function deleteMeetingById(id) {
  await meetingModel.findByIdAndDelete(id);
  return "sucsess!";
}

const updateUser = async (id, user) => {
   const updateUser = await userModel.updateOne(
    { _id: ObjectId(id) },
    user
  );
  return user;
};


async function addMeeting(id,meet) {
  const user = await userModel.findById(ObjectId(id));
  user.weight.meeting += await new meetingModel(meet);

  return await userAdd.save();
};


async function addMeeting(id, data) {
  if (!data.id) {
    throw new Error("user not found");
  }
  const dataa = await getAllJson();
  const index = data.users.findIndex((user) => user.id == id);
  dataa.users[index].weight.meeting.push(data);
  await updateJson(data);
  return dataa.users[index].weight.meeting;
}




const updateJson = async (user) =>
  fs.writeFile("api/data/User.json", JSON.stringify(user));

// async function getAllMeeting(){
//     const data = await getUsers(); 
//     let meetings=[];
//     let i=0;
//     data.forEach(user=>{
//       user.weight.meeting.forEach(meeting=>{meetings[i++]=meeting})
//     })
//     return meetings;
// }

// async function getMeetingbyId(id){
// const data = await getUsers(); 
// const user=data.find(user=>user.id==id);
// return user.weight.meeting;
// }



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
