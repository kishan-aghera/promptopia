import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompts",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      isConnected = true;

      console.log("MongoDB connected");
    } catch (error) {
      console.log(`Error while connecting MongoDB:\n${error}`);
    }
  }
};
