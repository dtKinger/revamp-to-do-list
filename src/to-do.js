import { refreshTruncate, toDos, toDones } from "./truncate.js";
import { toDoList } from "./index.js";
import { completedTasks } from "./to-dones.js";

export let tasksToDo = [
  {
    "title": "Make To Do App",
    "description": "Using JS modules and SOLID principles, build a useful To Do application.",
    "priority": "Medium",
    "dueDate": "2023-12-06",
    "createdAt": "2023-06-05"
  },
  {
    "title": "Create a library app",
    "description": "Use object constructors to add books to a library, optionally marking them as read. Allow use to withdraw (delete) books.",
    "priority": "Low",
    "dueDate": "2023-12-06",
    "createdAt": "2023-01-01"
  },
];

export function renderToDos () {
  
  // Dump existing
  toDoList.innerHTML = `
  <h2 class="section-title">TO DOs</h2>
  <div class="sort">
    <label for="sort-to-dones">Sort by:</label>
    <select name="" id="sort-to-dos">
      <option value="sort-default" id="sort-dos-default">Default</option>
      <option value="sort-date-created" id="sort-dones-created">Date created</option>
      <option value="sort-due-date" id="sort-dones-due">Due Date</option>
      <option value="sort-priority" id="sort-dones-priority">Priority</option>
    </select>
  </div>
  `
  for (let i = 0; i < tasksToDo.length; i += 1){
    let newTask = document.createElement('div');
    newTask.classList = "todo-item";
    newTask.innerHTML = 
    `
    <div class="heading-bar">
      <h3 class="title">${tasksToDo[i].title}</h3>
      <div class="btns">
        <button class="delete-btn">&times;</button>
        <button class="move-todones" alt="Mark as complete" title="Mark as complete">&check;</button>
      </div>
    </div>
    <p class="description">${tasksToDo[i].description}</p>
    <div class="flags">
      <span class="priority priority__${tasksToDo[i].priority}">${tasksToDo[i].priority}</span>
      <p class="bumper"></p>
      <span class="due-date">${tasksToDo[i].dueDate}</span>
    </div>
  `
  toDoList.appendChild(newTask);
  };

  // Delete buttons
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      tasksToDo.splice(index, 1) // don't need to reassign this.
      e.target.parentElement.parentElement.parentElement.remove();
    })
  })
  // Checkmarks
  let checkmarks = document.querySelectorAll('.move-todones');

  checkmarks.forEach((checkmark, index) => {
    checkmark.addEventListener('click', (e) => {
      let movedTask = tasksToDo.splice(index, 1)[0] // Splice AND get the item. Push only the item, not the whole new array
      completedTasks.push(movedTask);
      e.target.parentElement.parentElement.parentElement.remove(); // Delete from the original position
    })
  })

  // Truncate buttons

  if (toDos.length > 2 || toDones.length > 2){
    refreshTruncate();
  }

};