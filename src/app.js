
import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

// open connection to mongodb
db.on('error', console.log.bind(console, 'Error loading database'));
db.once('open', () => {
    console.log('Connected to database');
})

const app = express();

// Pass an instance of express in the constructor of routes
routes(app);

// Exports this to be used as a module
export default app;