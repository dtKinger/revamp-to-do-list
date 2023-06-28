import { renderTasks, updateAllButtons } from "./render-tasks.js"
import { addToDo } from "./new-task.js"

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');
// export const main = document.getElementById('main');

 /* =================== \
|       Initialize       |
 \ =================== */

renderTasks();
updateAllButtons();

 /* =================== \
|      END PAGE LOAD     |
 \ =================== */
// ==================== \\

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore') || e.target.classList.contains('delete-btn')){
    renderTasks();
    updateAllButtons();
    console.log('allTasks represents:')
    console.info(allTasks);
  };
});

export function getLocalStorage () {
  // Rebuild the allTasks array
  if (localStorage){
    // Instead of Object.entries, should I loop through
    // So that I can skip the taskCounter entry?
    [...allTasks] = Object.entries(localStorage);
  }
}
