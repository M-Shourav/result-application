import mongoose from "mongoose";
const TeacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: {
      type: {
        url: String,
        public_id: String,
      },
      required: true,
    },
    title: { type: String, required: true },
    quote: { type: mongoose.Schema.Types.Mixed, required: true },
    psdId: { type: String, required: true, unique: true },
    joiningDate: { type: Date, required: true },
    socialLinks: {
      phone: { type: String },
      email: { type: String },
      facebook: { type: String },
      linkedin: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const teacherModels = mongoose.model("teacher-data", TeacherSchema);

export default teacherModels;
