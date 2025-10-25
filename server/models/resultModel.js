import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    roll: { type: Number, required: true },
    name: { type: String, required: true },
    class: { type: String, required: true },
    section: { type: String },
    year: { type: String, required: true },
    subjects: { type: Object, required: true },
  },
  { timestamps: true }
);
const resultModels = mongoose.model("Result", resultSchema);

export default resultModels;
