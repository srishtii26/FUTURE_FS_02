const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,

    leadName: String,

    dueDate: String,

    status: {
      type: String,
      default: "Pending",
    },
    priority: {
  type: String,
  default: "Medium",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Task",
  taskSchema
);