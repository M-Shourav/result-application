import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConnectDB.js";
import userRouter from "./routes/UserRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

const allowOrigins = process.env.CLIENT_URL;

//  CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Blocked by CORS"));
      }
    },
    credentials: true,
  })
);

ConnectDB();

app.use(express.json());
app.use(process.env.USER_ROUTES, userRouter);
app.use(process.env.RESULT_ROUTES, resultRoutes);

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
