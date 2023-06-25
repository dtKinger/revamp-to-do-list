import { allTasks } from "./globals.js"
import { refreshTruncate, toDos, toDones } from "./truncate.js";
import { toDoList, getLocalStorage } from "./index.js";

export function renderTasks () {
  // Dump toDoList
  toDoList.innerHTML = `
  <h2 class="section-title">TO DOs</h2>
  <div class="sort">
    <label for="sort-to-dones">Sort by:</label>
    <select name="" id="sort-to-dos">
      <option value="sort-default" id="sort-dos-default">Default</option>
      <option value="sort-date-created" id="sort-dones-created">Date created</option>
      <option value="sort-due-date" id="sort-dones-due">Due Date</option>
      <option value="sort-priority" id="sort-dones-priority">Priority</option>
    </select>
  </div>
  `

  // Dump toDoneList
  toDoneList.innerHTML = `
  <h2 class="section-title">TO DONEs</h2>
  <div class="sort">
    <label for="sort-to-dones">Sort by:</label>
    <select name="" id="sort-to-dones">
      <option value="sort-default" id="sort-dos-default">Default</option> 
      <option value="sort-date-created" id="sort-dones-created">Date created</option>
      <option value="sort-due-date" id="sort-dones-due">Due date</option>
      <option value="sort-priority" id="sort-dones-priority">Priority</option>
    </select>
  </div>
  `

  // Build To Dos
  if (JSON.partse(allTasks[i]).location === 'todos'){
    for (let i = 0; i < allTasks.length; i += 1){
      let newTask = document.createElement('div');
      newTask.classList = "todo-item";
      newTask.innerHTML = 
      `
      <div class="heading-bar">
        <h3 class="title">${allTasks[i].title}</h3>
        <div class="btns">
          <button class="delete-btn">&times;</button>
          <button class="move-todones" alt="Mark as complete" title="Mark as complete">&check;</button>
        </div>
      </div>
      <p class="description">${allTasks[i].description}</p>
      <div class="flags">
        <span class="priority priority__${allTasks[i].priority}">${allTasks[i].priority}</span>
        <p class="bumper"></p>
        <span class="due-date">${allTasks[i].dueDate}</span>
      </div>
    `
    toDoList.appendChild(newTask);
    };
  }


  // Build To Dones list
  if (JSON.partse(allTasks[i]).location === 'todones'){
    for (let i = 0; i < allTasks.length; i += 1){
      let doneTask = document.createElement('div');
      doneTask.classList = "todo-item";
      doneTask.innerHTML = `
      <div class="heading-bar">
        <h3 class="title">${allTasks[i].title}</h3>
        <div class="btns">
          <button class="move-todos" title="restore" alt="restore"><span class="restore">&circlearrowleft;</span></button>
        </div>
      </div>
      <p class="description">${allTasks[i].description}</p>
      <div class="flags">
        <span class="priority priority__${allTasks[i].priority}">${allTasks[i].priority}</span>
        <p class="bumper"></p>
        <span class="due-date">${allTasks[i].dueDate}</span>
      </div>
    `
    toDoneList.appendChild(doneTask);
    };
  }




  // Truncate buttons

  if (toDos.length > 2 || toDones.length > 2){
    refreshTruncate();
  }

};

export function emptyallTasks () {
  allTasks = [];
}

export function updateDeletebuttons(){
  // Delete buttons
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      console.log(index);
      allTasks.splice(index, 1) // don't need to reassign this.
      e.target.parentElement.parentElement.parentElement.remove();
    })
  })
};

export function updateCheckmarks () {
  // Checkmarks
  let checkmarks = document.querySelectorAll('.move-todones');
  checkmarks.forEach((checkmark, index) => {
    checkmark.addEventListener('click', (e) => {

      let movedTask = allTasks.splice(index, 1)[0] // Splice AND get the item.

      // change it's location property
      movedTask.location = 'todones';
      
      function getIndex () {
        // Match up two arrays by Id.
        let correspondingTask = allTasks.find(item => JSON.parse(item[1]).id == movedTask.id)
        let deleteIndex = allTasks.indexOf(correspondingTask)
        console.log('Index to be deleted is: ')
        console.log(deleteIndex) // this works.
        
      }

      localStorage.setItem('newTask' + getIndex(), JSON.stringify(movedTask));

      emptyallTasks();
      e.target.parentElement.parentElement.parentElement.remove(); // Delete from the original position
    })
  })
}

export function updateRestoreBtns () {
  // Restore Buttons
  let restoreBtns = document.querySelectorAll('.restore');

  restoreBtns.forEach( (button, index) => {
    button.addEventListener('click', (e) => {
      let movedTask = allTasks.splice(index, 1)[0] // Splice AND get the item. Push only the item, not the whole new array
      movedTask.location = 'todos';
      tasksToDo.push(movedTask);
      e.target.parentElement.parentElement.parentElement.parentElement.remove(); // Delete from the original position
    })
  })
}



