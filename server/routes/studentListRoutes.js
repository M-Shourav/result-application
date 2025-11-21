import { Router } from "express";
import upload from "../middlewares/multer.js";
import {
  AllStudentData,
  CreateStudentData,
  DeleteStudentData,
  UpdateStudentData,
} from "../controller/studentController.js";

const studentRoutes = Router();

studentRoutes.post(
  "/create-student-data",
  upload.single("avatar"),
  CreateStudentData
);
studentRoutes.delete("/delete/student-data/:id", DeleteStudentData);
studentRoutes.put(
  "/update/student-data/:id",
  upload.single("avatar"),
  UpdateStudentData
);

studentRoutes.get("/get-all-student", AllStudentData);

export default studentRoutes;
