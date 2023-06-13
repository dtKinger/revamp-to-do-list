import { addToDo } from "./new-task"; // Add ToDo button doesn't do anything if this isn't included?
import { renderToDos, tasksToDo } from "./to-do";
import { renderToDones, completedTasks } from "./to-dones"; 

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

export const main = document.getElementById('main');

 /* =================== \
|       Initialize       |
 \ =================== */
renderToDos();
renderToDones();

 /* =================== \
|      END PAGE LOAD     |
 \ =================== */

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore')){
    renderToDos();
    renderToDones();
  };
});



