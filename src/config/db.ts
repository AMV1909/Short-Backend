import { connect } from "mongoose";

const MONGODB_NAME = process.env.MONGODB_NAME;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_NAME || !MONGODB_URI) {
    throw new Error(
        "Missing MONGODB_NAME or MONGODB_URI environment variable."
    );
}

export const connectDB = async () => {
    try {
        await connect(MONGODB_URI, {
            dbName: MONGODB_NAME,
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

connectDB();
