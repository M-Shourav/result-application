import asyncHandler from "express-async-handler";
import studentModels from "../models/StudentModels.js";
import cloudinary from "../utils/cloudinary.js";

const CreateStudentData = asyncHandler(async (req, res) => {
  try {
    const { name, roll, group, year, className } = req.body;
    if (!name || !roll || !group || !year || !className) {
      return res.json({
        success: false,
        message: "Please full fill all required field",
      });
    }
    // if (!name) {
    //   return res.json({
    //     success: false,
    //     message: "Please full fill the required",
    //   });
    // }

    // const Existing = await studentModels.fineOne({ roll });
    const Existing = await studentModels.findOne({ roll });
    if (Existing) {
      return res.json({
        success: false,
        message: "user already created!",
      });
    }

    let avatar = null;
    if (req.file) {
      const file = cloudinary.uploader.upload(req?.file.path, {
        resource_type: "image",
        folder: "student-image",
      });
      avatar = {
        url: (await file).secure_url,
        public_id: (await file).public_id,
      };
    } else {
      return res.json({
        success: false,
        message: "avatar is required",
      });
    }

    const student = new studentModels({
      name,
      className,
      avatar,
      roll,
      group,
      year,
    });

    await student.save();
    return res.json({
      success: true,
      message: "student data created successfully",
      student,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const DeleteStudentData = asyncHandler(async (req, res) => {
  try {
    const student = await studentModels.findById(req.params.id);
    if (!student) {
      return res.json({
        success: false,
        message: "student not found",
      });
    }
    // delete image from cloudinary
    if (student.avatar.public_id) {
      await cloudinary.uploader.destroy(student.avatar.public_id);
    }
    await studentModels.findByIdAndDelete(student);
    return res.json({
      success: true,
      message: "student data delete successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const UpdateStudentData = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const AllStudentData = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

export {
  CreateStudentData,
  DeleteStudentData,
  UpdateStudentData,
  AllStudentData,
};
