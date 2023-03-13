import Movie from '../../model/Movie.js';
import movieData from './movieData.js';
import mongoose from 'mongoose';

async function seedDatabase() {
  try {
    
    // Clear the database
    await Movie.deleteMany();
    console.log('Development database cleared.');
    
    // Add the mock data
    await Movie.insertMany(movieData);
    console.log('Mock data added to development database.');
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

export default seedDatabase;