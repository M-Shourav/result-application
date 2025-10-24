import { Router } from "express";
import {
  deleteUser,
  GetUserList,
  loginUser,
  logoutUser,
  registerUser,
  SingleUser,
  updateUser,
} from "../controller/UserController.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();

userRouter.post("/register", upload.single("avatar"), registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.post("/remove-user/:id", deleteUser);
userRouter.put("/user-update/:id", upload.single("avatar"), updateUser);
userRouter.get("/user-list", GetUserList);
userRouter.get("/single-user", SingleUser);

export default userRouter;
