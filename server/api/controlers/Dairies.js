const express = require("express");
const fs = require("fs/promises");
const router = express.Router();

const {
  getDairiesById,
  addDairies,
  updeteDairiesById,
  deleteDairies,
} = require("../services/Dairies");

//חיפוש לפי האיי די
router.get("/:id", async (req, res, next) => {
  console.log("vhhhhh");
  const id = req.params.id;
  console.log(id);
  let user;
  try {
    user = await getDairiesById(id);
    if (user === undefined) res.send("not found user with id " + id);
  } catch (error) {
    next(error);
  }
  res.send(user);
});
router.post("/:id", async (req, res, next) => {
  const { dairies } = req.body;
    let Daily;
    try {
        Daily =  await addDairies(
          dairies
        );
    } catch (err) {
        console.error(err)
    }
    res.send(Daily);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ans = await deleteDairies(id);
    res.send(ans);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { dairies } = req.body;
  const data={dairies};
  const updatedDairies = await updeteDairiesById(id, data);
  res.send(updatedDairies);
});

module.exports = router;
