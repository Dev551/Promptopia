import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  console.log("mongodb_uri", process.env.MONGODB_URI);

  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MONGODB is connected");
  } catch (error) {
    console.log("error", error);
  }
};
