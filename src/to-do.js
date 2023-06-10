import { toDoList } from "./index";
import { refreshEventListeners } from "./index";

export let tasksToDo = [
  {
    "title": "Make To Do App",
    "description": "Using JS modules and SOLID principles, build a useful To Do application.",
    "priority": "Medium",
    "dueDate": "2023-12-06",
    "createdAt": "2023-06-05"
  }
];

export function renderToDos () {
for (let i = 0; i < tasksToDo.length; i += 1){
  let newTask = document.createElement('div');
  newTask.classList = "todo-item";
  let toDoItem = tasksToDo[i];
  newTask.innerHTML = `
    <div class="heading-bar">
      <h3 class="title">${toDoItem.title}</h3>
      <div class="btns">
        <button class="delete-btn needs-refresh">&times;</button>
        <button class="move-todones needs-refresh" alt="Mark as complete" title="Mark as complete">&check;</button>
      </div>
    </div>
    <p class="description">${toDoItem.description}</p>
    <div class="flags">
      <span class="priority priority__${toDoItem.priority}">${toDoItem.priority}</span>
      <p class="bumper"></p>
      <span class="due-date">${toDoItem.dueDate}</span>
    </div>
  `
  toDoList.append(newTask);
  };
  refreshEventListeners();
};