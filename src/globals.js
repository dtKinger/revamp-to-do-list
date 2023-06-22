if (localStorage.taskCounter){
  global.taskCounter = parseInt(localStorage.getItem('taskCounter'));
} else { 
  global.taskCounter = 0;
}

// Ignore count on the dummy cards. keep taskCounter 
// equal to the number of items created and incremented.
// Keep in mind, I have two arrays, To Do and To Dones, so this number won't
// Match the index in those arrays. Use this number for localStorage only.

if (localStorage.length > 0){
  [...global.allTasks] = Object.entries(localStorage);
} else {
  global.allTasks = [];
}


// 
// JSON.parse(allTasks[0][1]).title // 'Task 1'