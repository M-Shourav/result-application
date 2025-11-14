import asyncHandler from "express-async-handler";
import teacherModels from "../models/TeachersModels.js";
import cloudinary from "../utils/cloudinary.js";

// const createTeacherData = asyncHandler(async (req, res) => {
//   try {
//     const { name, title, quote, psdId, joiningDate } = req.body;

//     const socialLinks = {
//       phone: req.body["socialLinks.phone"],
//       email: req.body["socialLinks.email"],
//       facebook: req.body["socialLinks.facebook"],
//       linkedin: req.body["socialLinks.linkedin"],
//     };

//     if (!name) {
//       return res.json({
//         success: false,
//         message: "name is required!",
//       });
//     }
//     if (!title) {
//       return res.json({
//         success: false,
//         message: "title is required!",
//       });
//     }
//     if (!quote) {
//       return res.json({
//         success: false,
//         message: "quote is required!",
//       });
//     }
//     if (!psdId) {
//       return res.json({
//         success: false,
//         message: "PsdId is required!",
//       });
//     }
//     if (!joiningDate) {
//       return res.json({
//         success: false,
//         message: "JoiningDate is required!",
//       });
//     }

//     // check teacher have or not
//     const ExistingTeacher = await teacherModels.findOne({ psdId });
//     if (ExistingTeacher) {
//       return res.json({
//         success: false,
//         message: "teacher Data already create.",
//       });
//     }

//     let avatar = null;

//     if (req.file) {
//       const file = cloudinary.uploader.upload(req.file?.path, {
//         resource_type: "image",
//         folder: "teachers-images",
//       });
//       avatar = {
//         url: (await file).secure_url,
//         public_id: (await file).public_id,
//       };
//     } else {
//       return res.json({
//         success: false,
//         message: "avatar is required.",
//       });
//     }

//     // create teacher Data
//     const teacher = new teacherModels({
//       name,
//       avatar,
//       quote,
//       title,
//       psdId,
//       joiningDate,
//       socialLinks,
//     });

//     await teacher.save();
//     return res.json({
//       success: true,
//       message: "teacher data create successfully!",
//       teacher,
//     });
//   } catch (error) {
//     console.log("teacher data create failed", error);
//     return res.json({
//       success: false,
//       message: error?.message || "Internal server error",
//     });
//   }
// });

const createTeacherData = asyncHandler(async (req, res) => {
  try {
    const { name, title, quote, psdId, joiningDate } = req.body;

    const socialLinks = {
      phone: req.body["socialLinks.phone"],
      email: req.body["socialLinks.email"],
      facebook: req.body["socialLinks.facebook"],
      linkedin: req.body["socialLinks.linkedin"],
    };

    // Required fields validation
    if (!name || !title || !quote || !psdId || !joiningDate) {
      return res.json({
        success: false,
        message: "All required fields must be filled!",
      });
    }

    // Check duplicate teacher by PSD ID
    const ExistingTeacher = await teacherModels.findOne({ psdId });
    if (ExistingTeacher) {
      return res.json({
        success: false,
        message: "Teacher data already exists.",
      });
    }

    // Avatar upload
    if (!req.file) {
      return res.json({
        success: false,
        message: "Avatar image is required.",
      });
    }

    const cloudUpload = cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "teachers-images",
    });

    const avatar = {
      url: (await cloudUpload).secure_url,
      public_id: (await cloudUpload).public_id,
    };

    // Create teacher document (slug will auto-generate here)
    const teacher = new teacherModels({
      name,
      avatar,
      quote,
      title,
      psdId,
      joiningDate,
      socialLinks,
    });

    await teacher.save(); // <-- Now slug will generate correctly

    return res.json({
      success: true,
      message: "Teacher data created successfully!",
      teacher,
    });
  } catch (error) {
    console.log("teacher data create failed", error);
    return res.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
});

const deleteTeacherData = asyncHandler(async (req, res) => {
  try {
    const teacherData = await teacherModels.findById(req.params.id);
    if (!teacherData) {
      return res.json({
        success: false,
        message: "teacher not found",
      });
    }

    // delete image from cloudinary
    if (teacherData?.avatar.public_id) {
      await cloudinary.uploader.destroy(teacherData?.avatar.public_id);
    }
    await teacherModels.findByIdAndDelete(teacherData);
    return res.json({
      success: true,
      message: "teacher data delete successfully",
    });
  } catch (error) {
    console.log("teacher data delete failed", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const updateTeacherData = asyncHandler(async (req, res) => {
  try {
    const teacher = await teacherModels.findById(req.params.id);
    const { name, title, quote, psdId, joiningDate } = req.body;
    const socialLinks = {
      phone: req.body["socialLinks.phone"],
      email: req.body["socialLinks.email"],
      facebook: req.body["socialLinks.facebook"],
      linkedin: req.body["socialLinks.linkedin"],
    };

    // find teacher
    if (!teacher) {
      return res.json({
        success: false,
        message: "teacher not found",
      });
    }

    // update avatar if new file uploaded
    if (req.file) {
      // delete old avatar
      if (teacher?.avatar.public_id) {
        await cloudinary.uploader.destroy(teacher?.avatar.public_id);
      }

      // upload new file
      const file = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
        folder: "teachers-images",
      });

      teacher.avatar = {
        url: file?.secure_url,
        public_id: file?.public_id,
      };
    }

    // update other filed
    if (name) teacher.name = name;
    if (title) teacher.title = title;
    if (psdId) teacher.psdId = psdId;
    if (joiningDate) teacher.joiningDate = joiningDate;
    if (quote) teacher.quote = quote;
    if (socialLinks) teacher.socialLinks = socialLinks;

    await teacher.save();

    return res.json({
      success: true,
      message: "Teacher data updated successfully",
      teacher,
    });
  } catch (error) {
    console.log("teacher data update failed");
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const singleTeacherData = asyncHandler(async (req, res) => {
  try {
    const { slug } = req?.params;
    const teacher = await teacherModels.findOne({ slug });
    if (!teacher) {
      return res.json({
        success: false,
        message: "teacher not found",
      });
    }
    return res.json({
      success: true,
      teacher,
    });
  } catch (error) {
    console.log("Failed to get single teacher data:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const getallTeacherData = asyncHandler(async (req, res) => {
  try {
    const total = await teacherModels.countDocuments({});
    const teacherList = await teacherModels.find();
    return res.json({
      success: true,
      total,
      teacherList,
    });
  } catch (error) {
    console.log("Failed to get all teacher data:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

export {
  createTeacherData,
  deleteTeacherData,
  updateTeacherData,
  getallTeacherData,
  singleTeacherData,
};
