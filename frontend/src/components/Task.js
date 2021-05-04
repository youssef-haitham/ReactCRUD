import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTasks } from '../actions'
import { addTask } from '../actions'
import { deleteTaskByID } from '../actions'
import { editTaskByID } from '../actions'
import { Table } from 'react-bootstrap'
import '../styles/Task.css'

function Task() {

    const tasks = useSelector(state => state != null? state.then(data => allTasks = data.data): allTasks = []);
    const dispatch = useDispatch();

    var allTasks = [];
    function addOrUpdateTask(taskID){
        console.log(taskID);
        if(document.querySelector('#add').innerHTML == "Add"){
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var newTask = {'title': title, 'description': description};
            dispatch(addTask(newTask));
        }
        else{
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            document.querySelector('#add').innerHTML = 'Add';
            var updatedTask = {'id': taskID,'title': title, 'description': description};
            dispatch(editTaskByID(updatedTask));
        }
        
    }

    function updateChoosenTask(task){
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.querySelector('#add').innerHTML = 'Update';
    }

    return (
        <div>
            <button onClick={() => dispatch(getAllTasks())}>Get all tasks</button>
          <Table className='tbl1' striped bordered hover size="sm">
              <thead>
                  <tr>
                  <th>#</th>
                 <th>Title</th>
                 <th>Description</th>
                 <th></th>
                  </tr>
              </thead>
              <tbody>
            
              {allTasks.map((task, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                        <button className='delete' onClick={() => dispatch(deleteTaskByID(task.id))}>Delete</button>
                        <button className='update' onClick={() => updateChoosenTask(task)}>Update</button>
                    </td>
                </tr>
               ))}
              </tbody>
              <tfoot>
              <tr>
                    <td></td>
                    <td><div className="titleInput"><input id="title" placeholder="Enter task title"></input></div></td>
                    <td><div className="descriptionInput"><input id="description" placeholder="Enter task description"></input></div></td>
                    <td><button className='add' id="add" type="button" onClick={() => addOrUpdateTask()}>Add</button></td>
                </tr>
              </tfoot>
            
        </Table>
        </div>
        
    )
}

export default Task

