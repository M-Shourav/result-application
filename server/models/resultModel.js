import mongoose from "mongoose";
const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  mark: { type: Number },
});

const resultSchema = new mongoose.Schema(
  {
    roll: { type: Number, required: true },
    name: { type: String, required: true },
    class: { type: String, required: true },
    section: { type: String },
    year: { type: String, required: true },
    subjects: [subjectSchema],
    result: { type: String },
    grade: { type: String },
    gpa: { type: String },
  },
  { timestamps: true }
);
const resultModels = mongoose.model("Result", resultSchema);

export default resultModels;
