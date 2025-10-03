const {mongoose} = require('../db');
const {Schema} = mongoose;

const taskSchema = new Schema({
    title: String,
    status: {type: String, enun: ["todo", "in_progress", "done"], default: "todo"}, 

}, { timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task }
