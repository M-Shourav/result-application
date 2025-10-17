import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userModelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: {
      type: {
        url: String,
        public_id: String,
      },
      default: {
        url: "",
        public_id: "",
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// compare password with entered-password
userModelSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// hash password
userModelSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

const userModel = mongoose.model("user", userModelSchema);
export default userModel;
