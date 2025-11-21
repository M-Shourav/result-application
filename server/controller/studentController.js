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
    const Existing = await studentModels.findOne({ roll, className, group });
    if (Existing) {
      return res.json({
        success: false,
        message: "user already created!",
      });
    }

    if (!req?.file) {
      return res.json({
        success: false,
        message: "Image is required!",
      });
    }

    const file = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "student-image",
    });
    const avatar = {
      url: file?.secure_url,
      public_id: file?.public_id,
    };

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
    await studentModels.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
      message: "student data delete successfully",
      student,
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
    const student = await studentModels.findById(req.params.id);

    if (!student) {
      return res.json({
        success: false,
        message: "Student not found",
      });
    }

    const { name, roll, className, group, year } = req.body;

    // 🖼️ Update avatar if new image uploaded
    if (req.file) {
      // delete old avatar
      if (student?.avatar?.public_id) {
        await cloudinary.uploader.destroy(student.avatar.public_id);
      }

      // upload new image
      const file = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
        folder: "student-image",
      });

      student.avatar = {
        url: file.secure_url,
        public_id: file.public_id,
      };
    }

    // ✏️ Update fields only if provided
    if (name) student.name = name;
    if (roll) student.roll = roll;
    if (group) student.group = group;
    if (year) student.year = year;
    if (className) student.className = className;

    await student.save();

    return res.json({
      success: true,
      message: "Student data updated successfully",
      student,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

const AllStudentData = asyncHandler(async (req, res) => {
  try {
    const total = await studentModels.countDocuments();

    const studentList = await studentModels
      .find()
      .sort({ createdAt: -1 }) // newest first
      .select("-__v"); // remove unwanted field

    return res.json({
      success: true,
      total,
      studentList,
    });
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
