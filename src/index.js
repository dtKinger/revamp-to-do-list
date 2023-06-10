import { createdAt } from "./new-task"; 
import { renderToDos } from "./to-do";
import { renderToDones } from "./to-dones"; 

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

export const main = document.getElementById('main');

// New tasks are added to an array
  // tasksToDo.push(newTask);
// Write a function that loops through tasksToDo
// doing new Task class creation on each item
// Output them in the To Do List

// Items marked done get copied and assigned to completedTasks[compeletedTasks.length].
// then deleted from tasksToDo.slice(index, 1)
// Output completedTasks through a Class constructor

// "Restore" an item:
// Copy the item from completedTasks[] into memory
// Delete from completedTasks[]
// tasksToDo.push(previouslyCompleted)
// Render




 /* =================== \
|       Initialize       |
 \ =================== */
renderToDos();
renderToDones();

export function refreshEventListeners () {
  
};
refreshEventListeners();
 /* =================== \
|      END PAGE LOAD     |
 \ =================== */
