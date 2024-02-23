import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5200;
export const MONGO_URL = process.env.MONGO_URL;

// MongoDB connection
export const connectToMongoDB = async () => {
    try {
        if (!MONGO_URL) {
            throw new Error("MongoDB connection URL is not provided.");
        }

        await mongoose.connect(MONGO_URL);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log("Connected to MongoDB");
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); 
    }
};
