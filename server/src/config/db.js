import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () =>{                
    try {
        
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}

