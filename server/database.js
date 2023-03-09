import mongoose from 'mongoose';

function connect() {
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to MongoDB!'));
}

export default { connect }