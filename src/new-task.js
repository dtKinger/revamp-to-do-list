import { toDoList, toDoneList, topNav } from "./index";
import { tasksToDo } from "./to-do"


export const addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav
export const addNewForm = document.getElementById('add-new-to-do');
export const submitNewToDo = document.getElementById('submit-new');


// Create a new Task from form data
class Task {
  constructor(createdAt, title, description, priority, dueDate) {

    this.createdAt = new Date();
    this.title = formDataObj;
    this.description = formDataObj.description;
    this.priority = formDataObj.priority;
    this.dueDate = formDataObj.dueDate

  }
};

export const form = document.getElementById('add-new-to-do');
addNewForm.addEventListener('submit', newToDoObj);
export function newToDoObj (e) {
  e.preventDefault();
  let myFormData = new FormData(e.target);
  let formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  // sortAll();
  console.info('formDataObj looks like ' + Object.entries(formDataObj));
  tasksToDo.push(formDataObj);
  console.log(Object.entries(tasksToDo));
  console.log(tasksToDo[1]);
  //tasksToDo.push(myFormData)
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

export function helpGenerateToDoHtml (formDataObj) {
  let div = document.createElement('div');
  let newTask = div;
  newTask.classList = "todo-item";
  newTask.innerHTML = `
    <div class="heading-bar">
      <h3 class="title">${formDataObj.title}</h3>
      <div class="btns">
        <button class="delete-btn needs-refresh">&times;</button>
        <button class="move-todones needs-refresh" alt="Mark as complete" title="Mark as complete">&check;</button>
      </div>
    </div>
    <p class="description">${formDataObj.description}</p>
    <div class="flags">
      <span class="priority priority__${formDataObj.priority}">${formDataObj.priority}</span>
      <p class="bumper"></p>
      <span class="due-date">${formDataObj.dueDate}</span>
    </div>
  `
  toDoList.append(newTask);
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
