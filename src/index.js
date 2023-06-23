import { addToDo, newTask, clearPlaceholderCards } from "./new-task"; // Add ToDo button doesn't do anything if this isn't included?
import { renderToDos, tasksToDo, emptyTasksToDo } from "./to-do";
import { renderToDones, completedTasks, emptyCompletedTasks } from "./to-dones"; 

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

export const main = document.getElementById('main');

 /* =================== \
|       Initialize       |
 \ =================== */

assignToArraysOnLoad();
renderToDos();
renderToDones();

 /* =================== \
|      END PAGE LOAD     |
 \ =================== */
// ==================== \\
 /* =================== \
|      Local Storage     |
 \ =================== */

// function saveToLocalStorage () {
  
// }



 /* =================== \
|    END Local Storage   |
 \ =================== */

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore')){
    reAssignToArrays();
    renderToDos();
    renderToDones();
    console.log('tasksToDo represents:');
    console.info(tasksToDo);
    console.log('completedTasks represents:')
    console.info(completedTasks);
    console.log('allTasks represents:')
    console.info(allTasks);
  };
});

// Build a master array for all tasks.
// Add the concept of 'Location' to a task.
// Store location property in local storage
// Build arrays by filtering filtering a master array into two

export function assignToArraysOnLoad () {
  // [...allTasks] = Object.entries(localStorage); // from global.js
  for (let i = 0; i < allTasks.length; i += 1){
    if (!parseInt(allTasks[i][1])){ // If it cannot be parsed as an Int, i.e. not the taskCounter
      // use it.
    let task = JSON.parse(allTasks[i][1]) // all tasks is an array of arrays. Grab the entry [i] then
    // grab it's second property [1] which is the object information
    if (task.location === 'todos'){
      tasksToDo.push(task);
      } else if (task.location === 'todones'){
        completedTasks.push(task);
      }
    }
  }
}

export function reAssignToArrays () {
  emptyTasksToDo();
  emptyCompletedTasks();
  getLocalStorage();
  // Then rebuild tasksToDo and completedTasks
  for (let i = 0; i < allTasks.length; i += 1){
    if (!parseInt(allTasks[i][1])){ // If it cannot be parsed as an Int, i.e. not the taskCounter
      // use it.
    let task = JSON.parse(allTasks[i][1]) // all tasks is an array of arrays. Grab the entry [i] then
    // grab it's second property [1] which is the object information
    if (task.location === 'todos'){
      tasksToDo.push(task);
      } else if (task.location === 'todones'){
        completedTasks.push(task);
      }
    }
  }
}

export function getLocalStorage () {
  // Rebuild the allTasks array
  [...allTasks] = Object.entries(localStorage);
}

// export function setLocalStorage () {

// }