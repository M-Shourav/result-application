import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB is connect:${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error?.message}`);
    process.exit(1);
  }
};

export default ConnectDB;
