import { Mongoose } from "mongoose";

const StudentSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    className: { type: String, required: true },
    roll: { type: String, required: true },
    group: { type: String, required: true },
    year: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const studentModels = Mongoose.model("student", StudentSchema);
export default studentModels;
