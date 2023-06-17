
if (localStorage.taskCounter){
  global.taskCounter = localStorage.getItem(taskCounter);
} else { 
  global.taskCounter = 0;
}

// Ignore count on the dummy cards. keep taskCounter 
// equal to the number of items created and incremented.
// Keep in mind, I have two arrays, To Do and To Dones, so this number won't
// Match the index in those arrays. Use this number for localStorage only.

global.allTasks = [];


