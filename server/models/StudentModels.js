import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    className: { type: String, required: true },
    roll: { type: String, required: true },
    group: { type: String, required: true },
    year: { type: String, required: true },
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
