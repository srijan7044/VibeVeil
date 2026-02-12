import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { MONGODB_URI } = process.env;
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
       const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB:", conn.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
        process.exit(1); // 1 status code means failure, 0 means success. We use 1 here to indicate that the application should exit due to a failure in connecting to the database.
    } 
};