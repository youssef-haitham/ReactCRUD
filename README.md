# CRUD apis

| Command | Description | URL | payload
| --- | --- | --- | --- |
| GET | Get all tasks | http://localhost:4200/api/tasks/getAllTasks 
| GET | Search task by title or description | http://localhost:4200/api/tasks/getAllTasks?key=
| POST | Add a task | http://localhost:4200/api/tasks/addTask | {title: , description: }
| DELETE | Delete a task | http://localhost:4200/api/tasks/deleteTask?id=
| DELETE | Update a task | http://localhost:4200/api/tasks/editTask | {id: ,title: , description}
