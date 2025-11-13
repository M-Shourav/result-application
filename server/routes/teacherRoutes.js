import { Router } from "express";
import upload from "../middlewares/multer.js";
import {
  createTeacherData,
  deleteTeacherData,
  getallTeacherData,
  singleTeacherData,
  updateTeacherData,
} from "../controller/teacherController.js";

const teacherRouter = Router();

teacherRouter.post("/teachers", upload.single("avatar"), createTeacherData); //create teacher
teacherRouter.post("/teachers/:id", deleteTeacherData); //delete teacher data
teacherRouter.get("/single-teacher/:id", singleTeacherData); //single teacher data
teacherRouter.put(
  "/update-teacher/:id",
  upload.single("avatar"),
  updateTeacherData
); //update single teacher data
teacherRouter.get("/all-teachers", getallTeacherData); // get all teacher list

export default teacherRouter;
