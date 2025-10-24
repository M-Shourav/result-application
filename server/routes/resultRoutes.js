import express from "express";
import multer from "multer";
import { uploadResults, getResultByRoll } from "../controller/resultController";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload CSV
router.post("/upload", upload.single("file"), uploadResults);

// Find student result
router.post("/find", getResultByRoll);

export default router;
