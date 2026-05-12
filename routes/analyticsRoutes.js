const express = require("express");

const router = express.Router();

const Lead = require("../models/Lead");

const auth = require(
  "../middleware/authMiddleware"
);

router.get(
  "/",
  auth,
  async (req, res) => {

    try {

      const totalLeads =
        await Lead.countDocuments();

      const contacted =
        await Lead.countDocuments({
          status: "Contacted",
        });

      const converted =
        await Lead.countDocuments({
          status: "Converted",
        });

      const newLeads =
        await Lead.countDocuments({
          status: "New",
        });

      const sourceStats =
        await Lead.aggregate([
          {
            $group: {
              _id: "$source",
              count: {
                $sum: 1,
              },
            },
          },
        ]);

      res.json({
        totalLeads,
        contacted,
        converted,
        newLeads,
        sourceStats,
      });

    } catch (error) {

      res.status(500).json({
        msg: error.message,
      });

    }
  }
);

module.exports = router;