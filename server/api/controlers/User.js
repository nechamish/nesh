// module.exports = {
//   getAllUsers: async (req, res, next) => {
//     let users;
//     try {
//       users = await getAllUsers();
//     } catch (error) {
//       next(error);
//     }
//     res.send(users);
//   },

//   getallUsersId: (req, res) => {
//     const UserId = req.params.UserId;
//     res.status(200).json({
//       message: "get all Users",
//     });
//   },
//   createUser: (req, res) => {
//     res.status(200).json({
//       message: "create a new Users",
//     });
//   },
//   updateUser: (req, res) => {
//     res.status(200).json({
//       message: "get all Users",
//     });
//   },
//   updateUserId: (req, res) => {
//     const UserId = req.params.UserId;
//     res.status(200).json({
//       message: "get all Users",
//     });
//   },
//   deleteById: (req, res) => {
//     const UserId = req.params.UserId;
//     res.status(200).json({
//       message: "delete all Users",
//     });
//   },
// };
const express = require("express");
const fs = require("fs/promises");
// const fsPromises = require('fs').promises;
const router = express.Router();
//fsPromises.readFile('../users.json', 'utf8');
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
      const {
        firstName,
        lastName,
        address,
        phone,
        email,
        height,
        weight,
        dairies,
      } = req.body;
      const data = {
        firstName,
        lastName,
        address,
        phone,
        email,
        height,
        weight,
        dairies,
      };
      const created = await addUser(data);
      res.send(created);
    }
  } catch (err) {
    console.error(err);
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
  res.send(user);
});

//by filter
//????
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

// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     const user = await UserService.getUser(id);
//     res.send(user);
// })

router.get("/", async (req, res, next) => {
  let users;
  try {
      debugger
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

router.put("/:id", async (req, res) => {
  if (req.body) {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      address,
      phone,
      email,
      height,
      weight,
      dairies,
    } = req.body;
    const data = {
      firstName,
      lastName,
      address,
      phone,
      email,
      height,
      weight,
      dairies,
    };
    const created = await updateUser(id, data);
    res.send(created);
  }
});
module.exports = router;
