import { refreshTruncate, toDos, toDones } from './truncate.js'
import { toDoneList, assignToArrays } from "./index.js";
import { tasksToDo } from "./to-do.js";

export let completedTasks = [];
if (localStorage.length == 0){
  completedTasks = [];
} else {
  completedTasks = allTasks.filter(item => item.location == 'todones');
  console.log('completedTasks represents:')
  console.info(completedTasks);
}

export function renderToDones () {

  // Dump exisiting
  toDoneList.innerHTML = `
  <h2 class="section-title">TO DONEs</h2>
  <div class="sort">
    <label for="sort-to-dones">Sort by:</label>
    <select name="" id="sort-to-dones">
      <option value="sort-default" id="sort-dos-default">Default</option> 
      <option value="sort-date-created" id="sort-dones-created">Date created</option>
      <option value="sort-due-date" id="sort-dones-due">Due date</option>
      <option value="sort-priority" id="sort-dones-priority">Priority</option>
    </select>
  </div>
  `
  for (let i = 0; i < completedTasks.length; i += 1){
    let doneTask = document.createElement('div');
    doneTask.classList = "todo-item";
    doneTask.innerHTML = `
    <div class="heading-bar">
      <h3 class="title">${completedTasks[i].title}</h3>
      <div class="btns">
        <button class="move-todos" title="restore" alt="restore"><span class="restore">&circlearrowleft;</span></button>
      </div>
    </div>
    <p class="description">${completedTasks[i].description}</p>
    <div class="flags">
      <span class="priority priority__${completedTasks[i].priority}">${completedTasks[i].priority}</span>
      <p class="bumper"></p>
      <span class="due-date">${completedTasks[i].dueDate}</span>
    </div>
  `
  toDoneList.appendChild(doneTask);
  };
  
  // Restore Buttons
  let restoreBtns = document.querySelectorAll('.restore');

  restoreBtns.forEach( (button, index) => {
    button.addEventListener('click', (e) => {
      let movedTask = completedTasks.splice(index, 1)[0] // Splice AND get the item. Push only the item, not the whole new array
      tasksToDo.push(movedTask);
      e.target.parentElement.parentElement.parentElement.parentElement.remove(); // Delete from the original position
    })
  })
};
