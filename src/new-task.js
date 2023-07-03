import { allTasks } from "./globals.js"
import { renderTasks, updateAllButtons } from "./render-tasks.js"
import { refreshTruncate } from "./truncate.js";

export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');

export let newTask = '';

class Task {
  constructor (title, description, priority, dueDate, createdAt, location, id){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.location = location;
    this.id = id;
  }  
}

addToDo.addEventListener('click', () => {
  setTimeout(() => {
    addNewForm.querySelector('#title').focus();
  }, 50);
});

addNewForm.addEventListener('submit', newToDoObj);
export function newToDoObj (e) {
    e.preventDefault();
    // Prepare the task count
    global.taskCounter += 1;
    localStorage.setItem('taskCounter', global.taskCounter);
    
    //capture input values.
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let priority = document.getElementById('priority-select').value;
    let dueDate = document.getElementById('date-picker').value;
    let createdAt = new Date();
    let location = 'todos';
    let id = taskCounter;

    let taskDetails = new Task(title, description, priority, dueDate, createdAt, location, id)
    
    localStorage.setItem('newTask' + parseInt(global.taskCounter), JSON.stringify(taskDetails));

    addNewForm.reset();
    addNewForm.querySelector('#title').focus();

    renderTasks();
    updateAllButtons();
    refreshTruncate();
}

addToDo.addEventListener('click', () => {
  if (!addNewForm.classList.contains('show')){
    helpOpenAddModal();
  } else if (addNewForm.classList.contains('show')){
    helpCloseAddModal();
  }
});

export function helpOpenAddModal () {
  addNewForm.classList.add('show')
}

export function helpCloseAddModal () {
  addNewForm.classList.remove('show');
}

// Let Escape key close the Add ToDo box
window.addEventListener('keyup', (e) => {
  if (addNewForm.classList.contains('show')){
    if (e.key === 'Escape'){
      addNewForm.classList.remove('show')
    }
  };
});
