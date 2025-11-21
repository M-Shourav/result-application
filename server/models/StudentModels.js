import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    className: { type: Number, required: true },
    roll: { type: Number, required: true },
    group: { type: String, required: true },
    year: { type: Number, required: true },
    avatar: {
      type: {
        url: String,
        public_id: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const studentModels = mongoose.model("student", StudentSchema);
export default studentModels;
