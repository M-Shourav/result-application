import asyncHandler from "express-async-handler";
import cloudinary from "../utils/cloudinary.js";
import committeeModels from "../models/committeeModels.js";

const createCommittee = asyncHandler(async (req, res) => {
  try {
    const { name, title, memberJoin, membershipTerm } = req.body;

    const socialLinks = {
      phone: req.body["socialLinks.phone"],
      email: req.body["socialLinks.email"],
      facebook: req.body["socialLinks.facebook"],
      linkedin: req.body["socialLinks.linkedin"],
    };

    if (!name || !title || !memberJoin || !membershipTerm) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const ExistingCommittee = await committeeModels.findOne({ title });
    if (ExistingCommittee) {
      if (existing) {
        return res.status(409).json({
          success: false,
          message: "Committee member with this title already exists",
        });
      }
    }

    if (!req.file) {
      return res.json({
        success: false,
        message: "Image is required",
      });
    }

    const file = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "committee-images",
    });
    const avatar = {
      url: file?.secure_url,
      public_id: file?.public_id,
    };

    // create committee data
    const committee = await committeeModels({
      name,
      title,
      memberJoin,
      membershipTerm,
      avatar,
      socialLinks,
    });

    await committee.save();

    return res.json({
      success: true,
      message: "Committee member created successfully",
      committee,
    });
  } catch (error) {
    console.log("Committee data create error", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const deleteCommittee = asyncHandler(async (req, res) => {
  try {
    const committee = await committeeModels.findById(req.params.id);
    if (!committee) {
      return res.json({
        success: false,
        message: "Committee member not found!",
      });
    }

    // delete avatar from cloudinary
    if (committee?.avatar.public_id) {
      await cloudinary.uploader.destroy(committee?.avatar.public_id);
    }
    await committeeModels.findByIdAndDelete(committee);
    return res.json({
      success: true,
      message: "committee member delete successfully",
    });
  } catch (error) {
    console.log("Committee data delete error", error);
    return res.json({
      success: false,
      message: error?.message,
    });
  }
});

const updateCommittee = asyncHandler(async (req, res) => {
  try {
    const committeeId = await committeeModels.findById(req.params.id);
    const { name, title, memberJoin, membershipTerm } = req.body;
    const socialLinks = {
      phone: req.body["socialLinks.phone"],
      email: req.body["socialLinks.email"],
      facebook: req.body["socialLinks.facebook"],
      linkedin: req.body["socialLinks.linkedin"],
    };

    if (!committeeId) {
      return res.json({
        success: false,
        message: "Committee not found",
      });
    }

    // update avatar if new file uploaded
    if (req.file) {
      // delete old avatar
      if (committeeId?.avatar.public_id) {
        await cloudinary.uploader.destroy(committeeId?.avatar.public_id);
      }

      // update avatar
      const file = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
        folder: "committee-images",
      });

      committeeId.avatar = {
        url: file?.secure_url,
        public_id: file?.public_id,
      };
    }

    if (name) committeeId.name = name;
    if (title) committeeId.title = title;
    if (memberJoin) committeeId.memberJoin = memberJoin;
    if (membershipTerm) committeeId.membershipTerm = membershipTerm;
    if (socialLinks) committeeId.socialLinks = socialLinks;

    await committeeId.save();
    return res.json({
      success: true,
      message: "Committee data update successfully.",
      committeeId,
    });
  } catch (error) {
    console.log("Committee data update error", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const getallCommittee = asyncHandler(async (req, res) => {
  try {
    const total = await committeeModels.countDocuments({});
    const committeeList = await committeeModels
      .find()
      .sort({ createdAt: -1 })
      .select("-__v");
    return res.json({
      success: true,
      total,
      committeeList,
    });
  } catch (error) {
    console.log("Committee data list error", error);
    return res.json({
      success: false,
      message: error?.message,
    });
  }
});

export { createCommittee, deleteCommittee, updateCommittee, getallCommittee };
