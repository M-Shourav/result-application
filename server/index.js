import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConnectDB.js";
import userRouter from "./routes/UserRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import teacherRouter from "./routes/teacherRoutes.js";
import committeeRouter from "./routes/committeeRoutes.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
ConnectDB();
//Allow Origins
// const allowOrigins = [process.env.CLIENT_URL, process.env.ADMIN_URL];

app.use(cors());
//  CORS middleware
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Blocked by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(process.env.USER_ROUTES, userRouter);

app.use(process.env.RESULT_ROUTES, resultRoutes);
app.use(process.env.TEACHER_ROUTES, teacherRouter);
app.use(process.env.COMMITTEE_ROUTES, committeeRouter);

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
