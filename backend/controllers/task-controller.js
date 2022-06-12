let tasksList = [
    {
      id: "1",
      task: "Complete the task before Tuesday",
      status: "TODO",
    },
    {
      id: "2",
      task: "Go shopping",
      status: "INGOING",
    },
    {
      id: "3",
      task: "Buy Milk",
      status: "DONE",
    },
    {
      id: "4",
      task: "Study for the end Exam",
      status: "TODO",
    },
]

const getAllTasks = async (req, res) => {
    res.json(tasksList).status(200)
}

const addTask = async (req, res) => {
    const newtask = {
        id: Math.random() * 10,
        task: req.body.task,
        status : "TODO"
    }
    
    tasksList.push(newtask)
    res.json(tasksList).status(200)
}

const editTask = async (req, res) => {
    const {id} = req.params
    const { task, status } = req.body;
    const updatedtaskIndex = tasksList.findIndex(task => task.id === id)
    if (task) {
      tasksList[updatedtaskIndex].task = task
    }
    if (status) {
      tasksList[updatedtaskIndex].status = status
    }
    res.json(tasksList[updatedtaskIndex]).status(200)
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    tasksList = tasksList.filter(task => task.id !== id)
    res.json("Item deleted").status(200)
}

module.exports = {
    getAllTasks,
    editTask,
    deleteTask,
    addTask
}