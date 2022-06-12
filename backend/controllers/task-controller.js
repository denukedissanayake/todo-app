const models = require('../models');

const getAllTasks = async (req, res) => {
  models.Task.findAll().then(result => {
    res.json(result).status(200)
  }).catch(err => {
    res.json('ERROR').status(500)
  })
}

const addTask = async (req, res) => {
  const newtask = {
      task: req.body.task,
      status : "TODO"
  }
  models.Task.create(newtask).then(result => {
      return res.json("ADDED").status(201)
  }).catch(err => {
      return res.json("ERROR").status(500)
  })
}

const editTask = async (req, res) => {
  const {id} = req.params
  const { task } = req.body;
  
  let updatedTask = {}
  if (task) {
    updatedTask = {
      task: task
    }
  }
  
  models.Task.update(updatedTask, { where: { id: id } })
    .then(result => {
      res.json("UPDATED").status(200)
    }).catch(err => {
      res.json("ERROR").status(500)
    }
  )
}

const changeStatus = async (req, res) => {
  const {id} = req.params
  const { status } = req.body;
  
  let updatedTask = {}
  if (status) {
    updatedTask = {
      status: status
    }
  }
  
  models.Task.update(updatedTask, { where: { id: id } })
    .then(result => {
      res.json("CHANGED").status(200)
    }).catch(err => {
      res.json("ERROR").status(500)
    }
  )
}

const deleteTask = async (req, res) => {
  const { id } = req.params
  models.Task.destroy({ where: { id: id } })
    .then(result => {
      res.json("DELETED").status(200);
    }).catch(err => {
      res.json("ERROR").status(500);
    })
}

module.exports = {
  getAllTasks,
  editTask,
  deleteTask,
  addTask,
  changeStatus
}