import mongoose from "mongoose";

const doneTaskSchema = new mongoose.Schema({
    id: { type: String},
    title: { type: String, required: true}
});

const doneTask = mongoose.model('done-Tasks', doneTaskSchema);

export default doneTask;