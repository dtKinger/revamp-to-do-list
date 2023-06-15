import { toDoList, toDoneList, topNav, taskCounter } from "./index.js";
import { tasksToDo, renderToDos } from "./to-do.js"

export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');
// export const submitNewToDo = document.getElementById('submit-new');

export let newTask = '';

class Task {
  constructor (title, description, priority, dueDate, createdAt){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
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

    let taskDetails = new Task(title, description, priority, dueDate, createdAt)

    // create newTask with a unique Key number. Stringify the whole object.
    newTask = newTask + taskCounter;
    console.log(taskCounter);
    localStorage.setItem('newTask', JSON.stringify(taskDetails));
    console.log(taskCounter);
    
    tasksToDo.push(taskDetails);

    
    localStorage.setItem('taskCounter', taskCounter);
    console.log(taskCounter);
    taskCounter += 1;
    console.log(taskCounter);

    addNewForm.reset();
    addNewForm.title.focus();
    renderToDos();
}

// addNewForm.addEventListener('submit', newToDoObj);

// export function newToDoObj (e) {
//   e.preventDefault();
//   let myFormData = new FormData(e.target);
//   let formDataObj = {};
//   myFormData.forEach((value, key) => (formDataObj[key] = value));
//   let formDataObjWithDate = {...formDataObj, "createdAt": new Date().toDateString()} // Add meta data of the date created.
//   // sortAll();
//   tasksToDo[tasksToDo.length] = formDataObjWithDate;
//   addNewForm.reset();
//   renderToDos();
// };

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



