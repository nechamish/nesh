// module.exports = {
//   getalldays: (req, res) => {
//     res.status(200).json({
//       message: "Login a new Users",
//     });
//   },
// };
const express = require("express");
const fs = require("fs/promises");
const router = express.Router();

const {
  getDairiesById,
  addDairies,
  addDairiesById,
  deleteDairies,
} = require("../services/Dairies.sr");

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await getDairiesById(id);
    if (user === undefined) res.send("not found user with id " + id);
  } catch (error) {
    next(error);
  }
  res.send(user);
});
module.exports = router;
