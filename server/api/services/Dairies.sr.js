const fs = require("fs/promises");
const uuid = require("uuid");
const uuidv4 = uuid.v4;

async function getDairiesById(id){
    const data = await getAllJson();
    const _user = await data.users.find((u) => u.id === id);
    return _user.dairies;
}
async function getAllJson() {
    const dataFile = await fs.readFile('api/data/User.json');
    let data = JSON.parse(dataFile);
    return data;
}
async function addDairies(){

}
async function addDairiesById(){

}
async function deleteDairies(){

}

module.exports ={
    deleteDairies,
    addDairiesById,
    addDairies,
    getDairiesById,
};
