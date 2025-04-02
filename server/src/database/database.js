const mongoose = require('mongoose');
const { DB_NAME } = require('../util/constants');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI in the .env file.');
}

if (!DB_NAME) {
  throw new Error('Please define the DB_NAME in the constants file.');
}

const database = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`, {
      bufferCommands: false,
    });

    console.log('Connected to MongoDB.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = database;
