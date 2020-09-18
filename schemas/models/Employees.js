import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Employees = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  e_job: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
});

export default mongoose.model(`employee`, Employees, `employees`);
