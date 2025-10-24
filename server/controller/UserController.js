import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import cloudinary from "../utils/Cloudinary.js";
import generateToken from "../utils/generateToken.js";
import validator from "validator";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Please field the require data.",
      });
    }

    // check if user register or not
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "Email Already taken, try a different email",
      });
    }

    // Upload avatar if provided
    let avatar = {
      url: "https://res.cloudinary.com/drswdtncv/image/upload/v1753807270/images_wuqnyi.jpg", // default
      public_id: "",
    };

    if (req.file) {
      const file = cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
        folder: "avatars",
      });

      avatar = {
        url: (await file).secure_url,
        public_id: (await file).public_id,
      };
    }

    const user = await userModel.create({
      name,
      email,
      password,
      role,
      avatar: avatar,
    });

    return res.json({
      success: true,
      message: "Register successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.log("register error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "user Doesn't exits",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (isMatch) {
      const token = generateToken(user._id);

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      res.json({
        success: true,
        message: "User logged in successfully",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credential try again!",
      });
    }
  } catch (error) {
    console.log("login error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});
const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    res.json({
      success: true,
      message: "user logout successfully",
    });
  } catch (error) {
    console.log("logout error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.json({
        success: false,
        message: "user not found try again",
      });
    }

    // delete image form cloudinary
    if (user.avatar.public_id) {
      await cloudinary.uploader.destroy(user?.avatar.public_id);
    }

    await userModel.findByIdAndDelete(user);
    return res.json({
      success: true,
      message: "user remove successfully",
    });
  } catch (error) {
    console.log("delete user error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.findById(req.params.id);

    if (!user) {
      return res.json({
        success: false,
        message: "user not found.",
      });
    }

    if (req.file) {
      if (user?.avatar && user?.avatar.public_id) {
        await cloudinary.uploader.destroy(user?.avatar.public_id);
      }

      const uploadFile = await cloudinary.uploader.upload(req.file?.path, {
        folder: "avatars",
      });

      user.avatar = {
        url: uploadFile?.secure_url,
        public_id: uploadFile.public_id,
      };
    }
    if (name) user.name = name;
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "invalid email address, try valid email address",
        });
      }
      user.email = email;
    }

    // update user
    const update = await user.save();
    return res.json({
      success: true,
      message: "user data update successfully",
      user: {
        _id: update._id,
        name: update.name,
        email: update.email,
        avatar: update.avatar,
      },
    });
  } catch (error) {
    console.log("User update error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});
const GetUserList = asyncHandler(async (req, res) => {
  try {
    const total = await userModel.countDocuments({});
    const user = await userModel.find().select("-password");

    return res.json({
      success: true,
      total,
      user,
    });
  } catch (error) {
    console.log("Get user list error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});
const SingleUser = asyncHandler(async (req, res) => {
  try {
    const token = req.cookies?.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne(decode._id).select("-password");
    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("User error:", error);
    return res.json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
  updateUser,
  GetUserList,
  SingleUser,
};
