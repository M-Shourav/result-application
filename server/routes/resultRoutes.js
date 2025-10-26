import { Router } from "express";
import upload from "../middlewares/multer.js";
import { searchResult, resultUpload } from "../controller/resultController.js";

const resultRoutes = Router();

resultRoutes.post("/upload-result", upload.single("file"), resultUpload);
resultRoutes.get("/search", searchResult);
export default resultRoutes;
