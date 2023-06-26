import { renderTasks, updateCheckmarks, updateDeletebuttons, updateRestoreBtns } from "./render-tasks.js"
import { addToDo } from "./new-task.js"

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

export const main = document.getElementById('main');

 /* =================== \
|       Initialize       |
 \ =================== */

renderTasks();
updateCheckmarks();
updateDeletebuttons();
updateRestoreBtns();

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
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore') || e.target.classList.contains('delete-btn')){
    renderTasks();
    updateCheckmarks();
    updateDeletebuttons();
    updateRestoreBtns();
    console.log('allTasks represents:')
    console.info(allTasks);
  };
});


export function getLocalStorage () {
  // Rebuild the allTasks array
  [...allTasks] = Object.entries(localStorage);
}

// export function setLocalStorage () {

// }