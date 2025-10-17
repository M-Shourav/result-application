import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";

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

    const user = await userModel.create({
      name,
      email,
      password,
      role,
    });

    return res.json({
      success: true,
      message: "Register successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
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
