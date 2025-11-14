import { Router } from "express";
import upload from "../middlewares/multer.js";
import {
  createCommittee,
  deleteCommittee,
  getallCommittee,
  updateCommittee,
} from "../controller/committeeController.js";
const committeeRouter = Router();

committeeRouter.post("/committees", upload.single("avatar"), createCommittee);
committeeRouter.post("/delete-committee/:id", deleteCommittee);
committeeRouter.put(
  "/update-committee/:id",
  upload.single("avatar"),
  updateCommittee
);
committeeRouter.get("/all-committee", getallCommittee);

export default committeeRouter;
