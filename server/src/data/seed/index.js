import mongoose from 'mongoose';
import seedDatabase from './seedDatabase.js';
import dotenv from 'dotenv'
dotenv.config();

  try {
    await mongoose.connect(process.env.DEV_MONGO_URI);
    console.log('Connected to MongoDB');
    seedDatabase(); // Call seeder function
  } catch (error) {
    console.log(error);
  }

