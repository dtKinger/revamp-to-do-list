import { toDoneList} from "./index.js";
import { tasksToDo } from "./to-do.js"; 

export let completedTasks = [
  {
    "title": "Make Tic Tac Toe game",
    "description": "Use IIFE's to modularize your code. Learn about 2D arrays and implement game-winning logic.",
    "priority": "High",
    "dueDate": "2023-12-05",
    "createdAt": "2022-02-14"
  },
  {
    "title": "Build Calculator in Vanilla JS",
    "description": "Without using the calc() function, build a calculator that stores values to memory and displays answer on screen.",
    "priority": "Medium",
    "dueDate": "2023-12-06",
    "createdAt": "2022-12-31"
  },
];

export function renderToDones () {

  // Dump exisiting
  toDoneList.innerHTML = `
  <h2 class="section-title">TO DONEs</h2>
  <div class="sort">
    <label for="sort-to-dones">Sort by:</label>
    <select name="" id="sort-to-dones">
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
  
  let restoreBtns = document.querySelectorAll('.restore');

  let temp = null;
  let title = '';
  let description = ''; 
  let priority = '';
  let dueDate = '';

  restoreBtns.forEach( (button) => {
  button.addEventListener('click', (e, index) => {
    let temp = (e.target.parentElement.parentElement.parentElement.parentElement);
    completedTasks.splice(index, 1);
    title = temp.querySelector('.title').textContent;
    description = temp.querySelector('.description').textContent;
    priority = temp.querySelector('.priority').textContent;
    dueDate = temp.querySelector('.due-date').textContent;
    let tempObj = {
      "title": title,
      "description": description,
      "priority": priority,
      "dueDate": dueDate,
      "updatedAt": new Date().toDateString()
    };
      tasksToDo.push(tempObj)
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
      return tasksToDo;
    })
  })
};
