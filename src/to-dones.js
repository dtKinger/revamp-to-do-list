import { toDoneList } from "./index";
import { refreshEventListeners } from "./index";

let completedTasks = [
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
  {
    "title": "Create a library app",
    "description": "Use object constructors to add books to a library, optionally marking them as read. Allow use to withdraw (delete) books.",
    "priority": "Low",
    "dueDate": "2023-12-06",
    "createdAt": "2023-01-01"
  }
];

export function renderToDones () {
  for (let i = 0; i < completedTasks.length; i += 1){
    let doneTask = document.createElement('div');
    doneTask.classList = "todo-item";
    let toDoneItem = completedTasks[i];
    doneTask.innerHTML = `
    <div class="heading-bar">
      <h3 class="title">${toDoneItem.title}</h3>
      <div class="btns">
      <button class="move-todos needs-refresh" title="restore" alt="restore"><span class="restore needs-refresh">&circlearrowleft;</span></button>
    </div>
    </div>
    <p class="description">${toDoneItem.description}</p>
    <div class="flags">
      <span class="priority priority__${toDoneItem.priority}">${toDoneItem.priority}</span>
      <p class="bumper"></p>
      <span class="due-date">${toDoneItem.dueDate}</span>
    </div>
  `
  toDoneList.append(doneTask);
  };
  refreshEventListeners();
};