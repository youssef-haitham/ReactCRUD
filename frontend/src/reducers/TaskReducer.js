import axios from 'axios'

const TaskReducer = (state = null, action) => {
    switch(action.type){
        case 'GET-ALL': {
            return axios.get("http://localhost:4200/api/tasks/getAllTasks").then(response =>{ return response})
    .catch(error => {
        return state;
    });
        }
        case 'GET-BY-KEY': {
            return axios.get("http://localhost:4200/api/tasks/getTask", {params: {key:action.payload}})
            .catch(error => {
                return state;
            });
        }
        case 'DELETE': {
            return axios.delete("http://localhost:4200/api/tasks/deleteTask",{params: {id:action.payload}})
            .catch(error => {
                return state;
            });
        }
       
        case 'ADD': {
            return axios.post("http://localhost:4200/api/tasks/addTask",action.payload)
            .catch(error => {
                return state;
            });
        }
        case 'EDIT': {
            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            return axios.put("http://localhost:4200/api/tasks/editTask",action.payload,config)
            .catch(error => {
                console.log(error);
                return state;
            });
        }
        default: {
            return state;
        }
    }
}

export default TaskReducer;