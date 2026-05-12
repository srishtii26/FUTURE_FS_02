const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

const auth = require(
  "../middleware/authMiddleware"
);


// GET TASKS
router.get(
  "/",
  auth,
  async (req, res) => {

    const tasks =
      await Task.find();

    res.json(tasks);

  }
);


// ADD TASK
router.post(
  "/",
  auth,
  async (req, res) => {

    const task =
      new Task(req.body);

    await task.save();

    res.json(task);

  }
);


// UPDATE TASK
router.put(
  "/:id",
  auth,
  async (req, res) => {

    const updated =
      await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(updated);

  }
);


// DELETE TASK
router.delete(
  "/:id",
  auth,
  async (req, res) => {

    await Task.findByIdAndDelete(
      req.params.id
    );

    res.json({
      msg: "Deleted",
    });

  }
);

module.exports = router;