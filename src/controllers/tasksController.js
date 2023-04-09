import tasks from '../models/Task.js';

class TaskController {
    static listAllTasks = (req, res) => {
        tasks.find((err, tasks) => {
            if (err) console.log(err);
            res.status(200).json(tasks);
        })
    }    

    static createTask = (req, res) => {
        const newTask = new tasks({
            title: req.body.newtask
        })

        newTask.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Error saving task` });
            } 
        });

        res.redirect("/");
    };

    static updateTask = (req, res) => {
        const id = req.params.id;

        // mongo update, using set
        tasks.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - ERROR UPDATING TASK` });
            } else {
                res.status(200).send({ message: 'Task updated successfully' });
            }
        })
    }

    static deleteTask = (req, res) => {
        const id = req.params.id;

        tasks.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - ERROR TO DELETE TASK` });
            } else {
                res.status(200).send({ message: 'Task excluded successfully' });
            }
        })
    }

}

export default TaskController;

