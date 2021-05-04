var tasks = [];
var id = 1;

module.exports.getAllTasks = async (req, res) => {

    return res.status(200).json({
        data: tasks
    });

};

module.exports.getTasksByTitleOrDescription = async (req, res) => {

    if(req.query.key == null){
        return res.status(500).json({
            err: "UNDEFINED_KEY",
            msg: "Please send a key in the request",
            data: null
        });
    }

    var foundTasks = [];

    for(i = 0; i<tasks.length; i++){
        if(tasks[i].title.includes(req.query.key) || tasks[i].description.includes(req.query.key)){
            foundTasks.push(tasks[i]);
        }
    }

    return res.status(200).json({
        err: null,
        msg: "Retrived tasks with key " + req.query.key,
        data: foundTasks
    });

};

module.exports.deleteTaskByID = async (req, res) => {

    if(req.query.id == null){
       return res.status(500).json({
            err: "UNDEFINED_ID",
            msg: "Please send an ID in the request",
            data: null
        });
    }

    var removedTask;

    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].id == req.query.id) {
            removedTask = tasks.splice(i,1);
            break;
        }
    }

    if(removedTask == null){
        return res.status(500).json({
            err: "ID_NOT_FOUND",
            msg: "Please send the correct ID",
            data: null
        })
    }

    return res.status(200).json({
        err: null,
        msg: "Task " + req.body.id + " deleted",
        data: tasks
    });

};

module.exports.editTaskByID = async (req, res) => {

    if(req.body.id == null){
        return res.status(500).json({
            err: "UNDEFINED_ID",
            msg: "Please send an ID in the request",
            data: null
        })
    }

    var updatedTask;
    var idINT = parseInt(req.body.id, 10);
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].id == idINT) {
            if(req.body.title != null){
                tasks[i].title = req.body.title;
            }
            if(req.body.description != null){
                tasks[i].description = req.body.description;
            }
            updatedTask = tasks[i];
            break;
        }
    }

    if(updatedTask == null){
        return res.status(500).json({
            err: "ID_NOT_FOUND",
            msg: "Please send the correct ID",
            data: null
        })
    }

    return res.status(200).json({
        err: null,
        msg: "Task " + req.body.id + " updated",
        data: tasks
    });
};

module.exports.addTask = async (req, res) => {

    if(req.body.title == null || req.body.description == null){
        return res.status(300).json({
            err: "WRONG_INFO",
            msg: "Please enter the correct information",
            data: null
        });
    }

    var newTask = {
        id: id,
        title: req.body.title,
        description: req.body.description
    }

    tasks.push(newTask);

    id++;

    return res.status(200).json({
        err: null,
        msg: "Task added",
        data: tasks
    });

};
