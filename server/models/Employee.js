const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      require: true,
      unique: true,
    },

    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      enum: ["Development", "Testing", "DevOps", "HR", "Sales"],
      required: true,
    },

    joiningDate: {
      type: Date,
      required: true,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Employee", employeeSchema);
