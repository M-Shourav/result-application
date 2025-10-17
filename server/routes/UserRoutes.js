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

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.post("/remove-user/:id", deleteUser);
userRouter.put("/user-update/:id", updateUser);
userRouter.get("/user-list", GetUserList);
userRouter.get("/single-user", SingleUser);

export default userRouter;
