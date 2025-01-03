const { Schema, model } = require("mongoose");

const common = {
  type: String, 
};
const StudentSchema = new Schema(
  {
    std_name: {
      ...common,
    },
    std_email: {
      ...common,
      // unique: true,
    },
    std_grid: {
      ...common,
      type: Number,
    },
    std_profile:{
      type:[]
    },
    std_resume: String,
  },
  {
    timestamps: true,
  }
);
const student = model("Student", StudentSchema);
module.exports = student; 
