import { taskCounter } from "./globals.js"
import { addToDo, newTask, clearPlaceholderCards } from "./new-task"; // Add ToDo button doesn't do anything if this isn't included?
import { renderToDos, tasksToDo } from "./to-do";
import { renderToDones, completedTasks } from "./to-dones"; 

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

export const main = document.getElementById('main');

 /* =================== \
|       Initialize       |
 \ =================== */
loadFromLocalStorage(); //

if (localStorage.length == 0){
renderToDos();
renderToDones();
}


 /* =================== \
|      END PAGE LOAD     |
 \ =================== */
// ==================== \\
 /* =================== \
|      Local Storage     |
 \ =================== */

// function saveToLocalStorage () {
  
// }

function loadFromLocalStorage () {

  // Set current value of taskCounter
  if (localStorage.taskCounter){
    global.taskCounter = localStorage.getItem('taskCounter');
  } else if (!localStorage.taskCounter){
    global.taskCounter = 0;
  }
  
  if (localStorage.length > 0) {
    
    // generate cards from localStorage
    
    for (let i = 0; i < localStorage.length; i += 1){
      let loadedTask = localStorage.getItem(JSON.parse(newTask[i]));
      console.log(loadedTask);
    }
  }
}


 /* =================== \
|    END Local Storage   |
 \ =================== */

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore')){
    renderToDos();
    renderToDones();
  };
});



