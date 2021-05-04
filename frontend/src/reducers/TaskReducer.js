const TaskReducer = (state = null, action) => {
    switch(action.type){
        case 'GET-ALL': {
            return fetch('http://localhost:4200/api/tasks/getAllTasks').then(response => response.json());
        }
        case 'GET-BY-KEY': {
            console.log(action.payload);
            return [{
                'title': "task 2",
                'description': "This is task 2"
            }];
        }
        case 'DELETE': {
            return state;
        }
       
        case 'ADD': {
            console.log(action.payload);
            return state.concat({"id":5,"title":action.payload.title,"description":action.payload.description});
        }
        case 'EDIT': {
            console.log(action.payload);
            return state;
        }
        default: {
            console.log(state);
            return state;
        }
    }
}

export default TaskReducer;