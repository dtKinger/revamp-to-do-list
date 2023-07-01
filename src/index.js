import { renderTasks, updateAllButtons } from "./render-tasks.js"
import { addToDo, addNewForm, helpCloseAddModal, helpOpenAddModal } from "./new-task.js"
import { clickSwitch } from "./sort.js"
import { refreshTruncate, toDones, toDos } from "./truncate.js";

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

 /* =================== \
|       Initialize       |
 \ =================== */

renderTasks();
updateAllButtons();
refreshTruncate()

 /* =================== \
|      END PAGE LOAD     |
 \ =================== */
// ==================== \\

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore') || e.target.classList.contains('delete-btn')){
    renderTasks();
    updateAllButtons();
    clickSwitch();
    refreshTruncate();
  };
});

window.addEventListener('click', (e) => {
  if (e.target != addNewForm){
    helpCloseAddModal();
  }
  if (e.target == addToDo){
    helpOpenAddModal();
  }
})

export function getLocalStorage () {
  // Rebuild the allTasks array
  if (localStorage){
    // Instead of Object.entries, should I loop through
    // So that I can skip the taskCounter entry?
    [...allTasks] = Object.entries(localStorage);
  }
}

