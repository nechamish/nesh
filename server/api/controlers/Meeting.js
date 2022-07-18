const express = require("express");
const fs = require("fs/promises");
const router = express.Router();

const {
  getAllMeeting,
  getMeetingbyId,
  deleteMeetingById,
  addMeeting,
  updateMeeting,
} = require("../services/Meeting.sr");

router.post("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (req.body) {
      const {
        date,
        weight,
      } = req.body;
      const data = {
        date,
        weight,
      };
      const created = await addMeeting(id, data);
      res.send(created);
    }
  } catch (err) {
    console.error(err);
  }
});


router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let meeting;
  try {
    meeting = await getMeetingbyId(id);
    if (meeting === undefined) res.send("not found meeting for user with id " + id);
  } catch (error) {
    next(error);
  }
  res.send(meeting);
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
  let meetings;
  try {
    debugger;
     meetings = await getAllMeeting();
  } catch (error) {
    next(error);
  }
  res.send(meetings);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ans = await deleteMeetingById(id);
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
      date,
      weight,
    } = req.body;
    const data = {
     date,
     weight
    };
    const created = await updateMeeting(id, data);
    res.send(created);
  }
});
module.exports = router;
