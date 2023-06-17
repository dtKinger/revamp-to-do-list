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
    
    // generate cards from localStorage
    let storedTasks = {...localStorage};

    for (let i = 0; i < storedTasks.length; i += 1){
      let loadedTask = storedTasks.getItem(JSON.parse(storedTasks[i]));
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

export function assignToArrays () {

  console.log(Object.entries(global.allTasks));
  
  
  for (let i = 0; i < global.allTasks.length; i +=1){
    console.log(allTasks[i]);
    // if (task.location == 'todos'){
    //   tasksToDo.push(JSON.stringify(task))
    // } else if (task.location == 'todones'){
    //   completedTasks.push(JSON.stringify(task));
    //   // console.log(task.key)
    //   localStorage.setItem(task.key, task.value)
    // }
  }
}
assignToArrays();

