const fs = require("fs/promises");
const uuid = require("uuid");
const { ObjectId } = require("mongodb");
const uuidv4 = uuid.v4;
const userModel = require("../../model/user.Schema");
const meetingModel = require("../../model/meeting.Schema");



//מיטינג להמשיך
// const addMeeting = async (weights, meeting) => {
//   ``;
//   const insertedMeeting = await meeting.save();
//   const users = await userModel.find();
//   console.log(users[1]._id);
//   console.log(users);
//   let i = 0;
//   weights.forEach((weight) => {
//     users[i].details.meetings.push({ id: insertedMeeting._id, weight: weight });
//     console.log(users[i].details.meetings);
//     updateUser(users[i].details, users[i].id);
//     i++;
//   });
//   return insertedMeeting;
// };
// const updateUser = async (details, id) => {
//   await userModel.updateOne(
//     { id: id },
//     {
//       $set: {
//         details: details,
//       },
//     }
//   );
// };

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


//פונקציות של הגייסון
// async function deleteMeetingById(id){
// const data=await getUsers();
//  const index = await data.findIndex((u) => u.id === (id));
//  data[index].weight.meeting.splice(0, 3);
//   try {
//     await updateJson(data);
//     return "success!";
//   } catch (err) {
//     console.error(err);
//     return "faild";
//   }

// }





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






