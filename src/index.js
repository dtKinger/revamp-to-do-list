import { addToDo, newTask } from "./new-task"; // Add ToDo button doesn't do anything if this isn't included?
import { renderToDos, tasksToDo } from "./to-do";
import { renderToDones, completedTasks } from "./to-dones"; 

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

export const main = document.getElementById('main');

export let taskCounter = 0; // Ignore count on the dummy cards. keep taskCounter 
// equal to the number of items created and incremented.
// Keep in mind, I have two arrays, To Do and To Dones, so this number won't
// Match the index in those arrays. Use this number for localStorage only.

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
  
  if (localStorage.taskCounter){
    taskCounter = localStorage.getItem('taskCounter');
  } else {
    taskCounter = 0;
  }
  
  
  if (localStorage.length > 0) {
    // empty my arrays

    if (newTask){
    for (let i = 0; i < localStorage.length; i += 1){
      let loadedTask = localStorage.getItem(JSON.parse(newTask[i]));
      console.log(loadedTask);

    }
  }

  } else {
    // loadDefaults();
  }
}
loadFromLocalStorage();


 /* =================== \
|    END Local Storage   |
 \ =================== */

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore')){
    renderToDos();
    renderToDones();
  };
});



