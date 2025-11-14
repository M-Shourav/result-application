import Mongoose from "mongoose";
import slugify from "slugify";

// bangla slug generator

function banglaSlug(text) {
  return text
    .trim()
    .replace(/ /g, "-")
    .replace(/[০]/g, "0")
    .replace(/[১]/g, "1")
    .replace(/[২]/g, "2")
    .replace(/[৩]/g, "3")
    .replace(/[৪]/g, "4")
    .replace(/[৫]/g, "5")
    .replace(/[৬]/g, "6")
    .replace(/[৭]/g, "7")
    .replace(/[৮]/g, "8")
    .replace(/[৯]/g, "9")
    .replace(/[^\u0980-\u09FFa-zA-Z0-9-]+/g, "") // remove special chars
    .toLowerCase();
}

const CommitteeSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    title: { type: String, required: true },
    memberJoin: { type: String, required: true },
    membershipTerm: { type: String, required: true },
    avatar: {
      type: {
        url: String,
        public_id: String,
      },
    },
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

// AUTO SLUG GENERATION
CommitteeSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = banglaSlug(this.name);
  }
  next();
});

const committeeModels = Mongoose.model("committee", CommitteeSchema);
export default committeeModels;
