const express = require("express");

const router = express.Router();

const Lead = require("../models/Lead");

const auth = require(
  "../middleware/authMiddleware"
);


// GET LEADS
router.get(
  "/",
  auth,
  async (req, res) => {

    const leads =
      await Lead.find();

    res.json(leads);

  }
);


// ADD LEAD
router.post(
  "/",
  auth,
  async (req, res) => {

    const lead =
      new Lead(req.body);

    await lead.save();

    res.json(lead);

  }
);


// UPDATE LEAD
router.put(
  "/:id",
  auth,
  async (req, res) => {

    const updated =
      await Lead.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(updated);

  }
);


// DELETE LEAD
router.delete(
  "/:id",
  auth,
  async (req, res) => {

    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.json({
      msg: "Deleted",
    });

  }
);

module.exports = router;