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

  // Filter allTasks into tasksToDo and compeltedTasks.
  
  if (localStorage.length > 0 && (tasksToDo.length > 0 || completedTasks.length > 0)) {
    
    // generate cards from localStorage
    let storedTasks = object.clone(allTasks);
    console.log('storedTasks represents:');
    console.info(storedTasks);

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

  for (let i = 0; i < allTasks.length; i += 1){
    if (!parseInt(allTasks[i][1])){ // If it cannot be parsed as an Int, i.e. not the taskCounter
      // use it.
    let task = JSON.parse(allTasks[i][1])
    if (task.location === 'todos'){
      tasksToDo.push(task);
    } else if (task.location === 'todones'){
      completedTasks.push(task);
    }
  }
    
    
  
  // console.log(task);
    // If there is a title property (i.e. Ignore taskCounter key/value)
    // if (task.location){
    //   if (task.location == 'todos'){
    //     console.log('It reads the .location')
    //       tasksToDo.push(JSON.stringify(task))
    //     } else if (task.location == 'todones'){
    //       completedTasks.push(JSON.stringify(task));
    //       // console.log(task.key)
    //       localStorage.setItem(task.key, task.value)
    //     }
    //   }
    }
  console.log('allTasks represents:')
  console.info(allTasks)

  console.log('tasksToDo represents:')
  console.info(tasksToDo)

  console.log('completedTasks represents:')
  console.info(completedTasks);
  
}
assignToArrays();

