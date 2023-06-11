import { toDoList, toDoneList, topNav } from "./index.js";
import { tasksToDo, renderToDos } from "./to-do.js"
import { completedTasks } from "./to-dones.js";

export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');
export const submitNewToDo = document.getElementById('submit-new');

export const form = document.getElementById('add-new-to-do');
addNewForm.addEventListener('submit', newToDoObj);

export function newToDoObj (e) {
  e.preventDefault();
  let myFormData = new FormData(e.target);
  let formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  formDataObj = {...formDataObj, "createdAt": new Date()} // Add meta data of the date created.
  // sortAll();
  tasksToDo.push(formDataObj);
  renderToDos();
  form.reset();
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



