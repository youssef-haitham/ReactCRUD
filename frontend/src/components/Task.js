import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTasks } from '../actions'
import { addTask } from '../actions'
import { deleteTaskByID } from '../actions'
import { getTaskByKey } from '../actions'
import { editTaskByID } from '../actions'
import { Table } from 'react-bootstrap'
import '../styles/Task.css'

var done = false;
function Task() {

    const [allTasks, setTasks] = useState([]);
    
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    if(!done){
        dispatch(getAllTasks());
        done =true;
    }

    if(tasks != null)
    tasks.then(res=> setTasks(res.data.data));

    function addOrUpdateTask(){
        if(document.querySelector('#add').innerHTML === "Add"){
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var newTask = {'title': title, 'description': description};
            dispatch(addTask(newTask));
            document.getElementById('title').value = "";
            document.getElementById('description').value ="";
        }
        else{
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var taskID = document.getElementById('updatedIndexInput').value;
            var updatedTask = {'id': taskID,'title': title, 'description': description};
            dispatch(editTaskByID(updatedTask));
            document.querySelector('#add').innerHTML = 'Add';
            document.getElementById('title').value = "";
            document.getElementById('description').value ="";
        }
        
    }

    function updateChoosenTask(task){
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.getElementById('updatedIndexInput').value = task.id
        document.querySelector('#add').innerHTML = 'Update';
    }

    function searchByKey(){
        var searchKey = document.getElementById("searchKey").value;
        dispatch(getTaskByKey(searchKey));
    }

    
    return (
        <div>
            <div className="searchBar">
        <input
        id="searchKey"
            type="text"
            placeholder="Enter search key"
        />
        <button className="button" onClick={() => searchByKey()} type="submit">Search</button>
        </div>
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
                    <td id="updatedIndex"><div id="updatedIndex"><input hidden id="updatedIndexInput"></input></div></td>
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

