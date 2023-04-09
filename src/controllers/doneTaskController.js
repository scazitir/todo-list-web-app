import doneTasks from '../models/DoneTask.js';

class DoneTaskController {
    // Static method to list all done tasks from tasks from done-tasks collection of MongoDB
    static listAllDoneTasks = (req, res) => {
        doneTasks.find((err, doneTasks) => {
            if (err) console.error(err);
            res.status(200).json(doneTasks);
        })
    }

    // Creates a new DoneTask 
    static createDoneTask = (req, res) => {
        // To create a new DoneTask we need to get the title from the task
        const title = req.body.title;

        const doneTask = new doneTasks({
            title: title
        });

        doneTask.save((err) => {
            if (err) console.log(err);
        })

        res.redirect("/");
    }

    static deleteDoneTask = (req, res) => {
        const id = req.params.id;

        doneTasks.findByIdAndDelete(id, (err) => {
            if (err) console.error(err);
            res.status(200).send({ message: 'Task deleted successfully'});
        })
    }
}

export default DoneTaskController;