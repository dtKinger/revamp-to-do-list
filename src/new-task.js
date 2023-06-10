import { toDoList, toDoneList, topNav } from "./index";
import { tasksToDo } from "./to-do"


export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');
export const submitNewToDo = document.getElementById('submit-new');
import { refreshEventListeners } from "./index";


// Create a new Task from form data
// export class Task {
//   constructor(title, description, priority, dueDate, createdAt) {

//     this.title = title;
//     this.description = description;
//     this.priority = priority;
//     this.dueDate = dueDate;
//     this.createdAt = new Date();

//   }
// };

export const form = document.getElementById('add-new-to-do');
addNewForm.addEventListener('submit', newToDoObj);
export function newToDoObj (e) {
  e.preventDefault();
  let myFormData = new FormData(e.target);
  let formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  formDataObj = {...formDataObj, createdAt: new Date()} // Add meta data of the date created.
  // sortAll();
  console.info('formDataObj looks like ' + Object.entries(formDataObj));
  tasksToDo.push(formDataObj);
  console.log(Object.entries(tasksToDo));
  console.log(tasksToDo[1]);
  //tasksToDo.push(myFormData)
  renderToDos();
  refreshEventListeners();
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
