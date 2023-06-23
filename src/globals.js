// Init a count to track tasks
if (localStorage.taskCounter){
  global.taskCounter = parseInt(localStorage.getItem('taskCounter'));
} else { 
  global.taskCounter = 0;
}

// Init an array to hold all tasks from Local Storage
// tasksToDo[] and completedTasks[] will be built by filtering allTasks
if (localStorage.length > 0){
  [...global.allTasks] = Object.entries(localStorage);
} else {
  global.allTasks = [];
}

