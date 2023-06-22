import { allTasks } from "./globals.js"
import { toDoList, toDoneList, topNav, assignToArrays, assignToArraysOnLoad, reAssignToArrays } from "./index.js";
import { tasksToDo, renderToDos, emptyTasksToDo } from "./to-do.js"

export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');
// export const submitNewToDo = document.getElementById('submit-new');

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


addNewForm.addEventListener('submit', newToDoObj);
export function newToDoObj (e) {
    e.preventDefault();
    //capture input values.
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let priority = document.getElementById('priority-select').value;
    let dueDate = document.getElementById('date-picker').value;
    let createdAt = new Date();
    let location = 'todos';
    let id = taskCounter;

    let taskDetails = new Task(title, description, priority, dueDate, createdAt, location, id)

    // create newTask with a unique Key number. Stringify the whole object.
    
    localStorage.setItem('newTask' + global.taskCounter, JSON.stringify(taskDetails));
    
    // tasksToDo.push(taskDetails); // refactor this into Master array funnel
    global.allTasks.push(taskDetails); // hm, I don't need to do global.allTasks like with taskCounter??
    // Maybe call global.<name> when Getting and import then call <name> when setting.

    localStorage.setItem('taskCounter', global.taskCounter);
    global.taskCounter += 1;

    addNewForm.reset();
    addNewForm.querySelector('#title').focus();
    emptyTasksToDo();
    // shuffle the arrays
    reAssignToArrays();
    renderToDos();
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
  if (document.querySelector('.show')){
  let target = document.querySelector('.show')  
    if (e.key === 'Escape'){
      target.classList.remove('show')
    }
  };
});

