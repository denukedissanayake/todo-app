const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task-controller');
const { VerifyToken } = require('../utils/auth-middleware');

router.get('/', taskController.getAllTasks);
router.post('/', VerifyToken, taskController.addTask);
router.put('/task/:id', VerifyToken, taskController.editTask);
router.put('/status/:id', taskController.changeStatus);
router.delete('/:id', VerifyToken, taskController.deleteTask);

module.exports = router