import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
});

const model = mongoose.model("User", userSchema);

export default model;
