import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    roll: { type: Number, required: true },
    name: { type: String, required: true },
    class: { type: String, required: true },
    section: { type: String },
    year: { type: String, required: true },
    subjects: {
      type: Map,
      of: Number, // key = subject name, value = marks
    },
  },
  { timestamps: true }
);

export const Result = mongoose.model("Result", resultSchema);
