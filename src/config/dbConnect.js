import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Using envi file to set environment variables
dotenv.config();

// Instance of information about the connection to the server
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Create a connection to MongoDB
mongoose.connect(`mongodb+srv://${userName}:${password}@trace.wonendt.mongodb.net/trace-db`);

const db = mongoose.connection;

export default db;