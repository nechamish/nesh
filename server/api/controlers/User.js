const express = require("express");
const fs = require("fs/promises");
const router = express.Router();

const {
  getUserById,
  getUsers,
  addUser,
  findByIdAndDelete,
  updateUser,
} = require("../services/User.sr");

router.post("/", async (req, res) => {
  try {
    if (req.body) {
      const created = await addUser(req.body);
      res.send(created);
    }
  } catch (err) {
    console.error(err);
  }
});


router.put("/:id", async (req, res) => {
  if (req.body) {
    const { id } = req.params;

    const created = await updateUser(id, req.body);
    res.send(created);
  }
});



// GET /users/:id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await getUserById(id);
    if (user === undefined) res.send("not found user with id " + id);
  } catch (error) {
    next(error);
  }
  return res.send(user);
});


router.get("/:search", async (req, res, next) => {
  const search = req.params.id;
  let user;
  try {
    user = await getUserById(id);
    if (user === undefined) res.send("not found user with id " + id);
  } catch (error) {
    next(error);
  }
  res.send(user);
});


router.get("/", async (req, res, next) => {
  let users;
  try {
    debugger;
    users = await getUsers();
  } catch (error) {
    next(error);
  }
  res.send(users);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ans = await findByIdAndDelete(id);
    res.send(ans);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

module.exports = router;


