import mongoose from 'mongoose';

// Schema to store a blueprint of the collection
const taskSchema = new mongoose.Schema({
    // id is auto-generated
    id: { type: String},
    title: { type: String, required: true}
});

// Creates a new Mongoose model fo a 'tasks' collection in our MongoDB database (db.tasks)
const tasks = mongoose.model('tasks', taskSchema);

export default tasks;