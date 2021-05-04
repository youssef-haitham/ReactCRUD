export const getAllTasks = () => {
    return {
        type: 'GET-ALL'
    }
}

export const getTaskByKey = (key) => {
    return {
        type: 'GET-BY-KEY',
        payload: key
    }
}

export const deleteTaskByID = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const addTask = (task) => {
    return {
        type: 'ADD',
        payload: task
    }
}

export const editTaskByID = (task) => {
    return {
        type: 'EDIT',
        payload: task
    }
}