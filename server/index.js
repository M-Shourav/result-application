import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConnectDB.js";
import userRouter from "./routes/UserRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
ConnectDB();
app.use(cors());
app.use(express.json());

app.use(process.env.USER_ROUTES, userRouter);

app.use(process.env.RESULT_ROUTES, resultRoutes);

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
