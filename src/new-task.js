import { toDoList, toDoneList, topNav } from "./index.js";
import { tasksToDo, renderToDos } from "./to-do.js"
import { completedTasks } from "./to-dones.js";

export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');
export const submitNewToDo = document.getElementById('submit-new');

// export let title = document.getElementById('title')
// export let description = document.getElementById('description');
// export let priority = document.getElementById('priority-select');
// export let dueDate = document.getElementById('date-picker');
// export let createdAt = new Date();

// class Task {
//   constructor (title, description, priority, dueDate, createdAt){
//     this.title = title.value;
//     this.description = description.value;
//     this.priority = priority.value;
//     this.dueDate = dueDate.value;
//     this.createdAt = createdAt;
//   }  
// }

// submitNewToDo.addEventListener('click', newToDoObj);
// export function newToDoObj (e) {
//     e.preventDefault();
//     let taskDetails = new Task;
//     console.log(taskDetails);
//     tasksToDo.push(taskDetails);
//     addNewForm.reset();
//     renderToDos();
// }

addNewForm.addEventListener('submit', newToDoObj);

export function newToDoObj (e) {
  e.preventDefault();
  let myFormData = new FormData(e.target);
  let formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  let formDataObjWithDate = {...formDataObj, "createdAt": new Date().toDateString()} // Add meta data of the date created.
  // sortAll();
  tasksToDo[tasksToDo.length] = formDataObjWithDate;
  addNewForm.reset();
  renderToDos();
};

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



