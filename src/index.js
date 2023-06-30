import { renderTasks, updateAllButtons } from "./render-tasks.js"
import { addToDo } from "./new-task.js"
import { SORT } from "./sort.js"
import { refreshTruncate, toDones, toDos } from "./truncate.js";

export const topNav = document.getElementById('top-nav');
export const toDoList = document.getElementById('to-dos');
export const toDoneList = document.getElementById('to-dones');

 /* =================== \
|       Initialize       |
 \ =================== */

renderTasks();
updateAllButtons();
refreshTruncate();

 /* =================== \
|      END PAGE LOAD     |
 \ =================== */
// ==================== \\

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore') || e.target.classList.contains('delete-btn')){
    
    renderTasks();
    updateAllButtons();
    // console.log('allTasks represents:')
    // console.info(allTasks);
    refreshTruncate();
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



// let arrayOfObjs = [
//   ["item3", {"title": "Goodbye", "priority": "Low"}],
//   ["item1", {"title": "Hello World", "priority": "High"}],
//   ["item2", {"title": "How are you doing?", "priority": "Medium"}]
// ]


// let objArray = [
//   {"title": "Hello World", "priority": "High", "score": '30'},
//   {"title": "Goodbye", "priority": "Low", "score": '10'},
//   {"title": "How are you doing?", "priority": "Medium", "score": '20'}
// ]
// console.log(objArray);
// console.log(arrayOfObjs);
// arrayOfObjs.sort(function (a, b) {
//   return b[1].priority - a[1].priority
// })

// console.log(arrayOfObjs[1][1].priority)

// console.log(arrayOfObjs);


// objArray = objArray.sort((a, b) => {
//   return a.priority - b.priority
// });

// console.log(objArray);