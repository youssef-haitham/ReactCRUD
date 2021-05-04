const express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  taskCtrl = require('../controllers/TaskController');

//-------------------------------Task Routes-----------------------------------

router.get('/getAllTasks', asyncMiddleware(taskCtrl.getAllTasks));
router.get('/getTask', asyncMiddleware(taskCtrl.getTasksByTitleOrDescription));
router.delete('/deleteTask', asyncMiddleware(taskCtrl.deleteTaskByID));
router.put('/editTask', asyncMiddleware(taskCtrl.editTaskByID));
router.post('/addTask', asyncMiddleware(taskCtrl.addTask));

module.exports = router;
