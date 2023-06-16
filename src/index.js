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

function loadFromLocalStorage () {

  // Set current value of taskCounter
  if (localStorage.taskCounter){
    global.taskCounter = localStorage.getItem('taskCounter');
  } else if (!localStorage.taskCounter){
    global.taskCounter = 0;
  }
  
  if (localStorage.length > 0 && (tasksToDo.length > 0 || completedTasks.length > 0)) {
    console.log(tasksToDo);
    
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

// Build a master array for all tasks.
// Add the concept of 'Location' to a task.
// Store location property in local storage
// Build arrays by filtering filtering a master array into two
