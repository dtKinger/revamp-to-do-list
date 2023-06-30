import { refreshTruncate, toDos, toDones } from "./truncate.js";
import { toDoList, toDoneList, getLocalStorage } from "./index.js";

export function renderTasks () {

  getLocalStorage();
  pureRender();
  
};

// These 3 functions executed on click of an event button
export function updateDeletebuttons(){
  // Delete buttons
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      // remove from local Storage
      let targetId = e.target.parentElement.parentElement.dataset.taskId;
      localStorage.removeItem(`newTask${targetId}`);
      checkTaskCounter();
    });
  });
}

export function updateCheckmarks () {
  // Checkmarks
  let checkmarks = document.querySelectorAll('.move-todones');
  checkmarks.forEach((checkmark) => {
    checkmark.addEventListener('click', (e) => {
      // Read the target ID
      let targetId = e.target.parentElement.parentElement.dataset.taskId;
      // Get it
      let overwrite = JSON.parse(localStorage.getItem(`newTask${targetId}`));
      // Transform it
      overwrite.location = 'todones';
      // Set it
      localStorage.setItem(`newTask${targetId}`, JSON.stringify(overwrite));
    });
  });
}

export function updateRestoreBtns () {
  // Restore Buttons
  let restoreBtns = document.querySelectorAll('.restore');
  restoreBtns.forEach( (button) => {
    button.addEventListener('click', (e) => {
      // Read the target ID
      let targetId = e.target.parentElement.parentElement.parentElement.dataset.taskId;
      // Get it
      let restore = JSON.parse(localStorage.getItem(`newTask${targetId}`));
      // Transform it
      restore.location = 'todos';
      // Set it
      localStorage.setItem(`newTask${targetId}`, JSON.stringify(restore));
    });
  });
}

export function updateAllButtons () {
  updateCheckmarks();
  updateDeletebuttons();
  updateRestoreBtns();
}

function checkTaskCounter () {
  let toDoItems = document.querySelectorAll('.todo-item');
  let toDoneItems = document.querySelectorAll('.todone-item') 
  console.log(toDoItems);
  console.log(toDoneItems);
  if (toDoItems.length == 1 && toDoneItems.length == 0){
    taskCounter = 0;
    localStorage.removeItem('taskCounter');
  }
}

export function pureRender () {
  // clear front end
    /// Dump toDoList
    toDoList.innerHTML = `
    <h2 class="section-title">TO DOs</h2>
    `
    /// Dump toDoneList
    toDoneList.innerHTML = `
    <h2 class="section-title">TO DONEs</h2>
    `

  // Build To Dos
  if (allTasks){
    for (let i = 0; i < allTasks.length; i += 1){
      // ignore the taskCounter which would parseInt as truthy
      if (!parseInt(allTasks[i][1]) && JSON.parse(allTasks[i][1]).location === 'todos'){
      let newTask = document.createElement('div');
      newTask.classList = "todo-item";
      newTask.innerHTML = 
      `
      <div class="heading-bar" data-task-id="${JSON.parse(allTasks[i][1]).id}">
        <h3 class="title">${JSON.parse(allTasks[i][1]).title}</h3>
        <div class="btns">
          <button class="delete-btn">&times;</button>
          <button class="move-todones" alt="Mark as complete" title="Mark as complete">&check;</button>
        </div>
      </div>
      <p class="description">${JSON.parse(allTasks[i][1]).description}</p>
      <div class="flags">
        <span class="priority priority__${JSON.parse(allTasks[i][1]).priority}">${JSON.parse(allTasks[i][1]).priority}</span>
        <p class="bumper"></p>
        <span class="due-date">${JSON.parse(allTasks[i][1]).dueDate}</span>
      </div>
      `
      toDoList.appendChild(newTask);
      // Make a vidusally hidden div and delete-btn to synchronize
      // the delete-btns with the localStorage array ordering.
      } else if (parseInt(allTasks[i][1])){
        let hiddenCounterDeleteBtn = document.createElement('div');
        let hiddenCheckmarkBtn = document.createElement('div');
        hiddenCounterDeleteBtn.classList = ('delete-btn task-counter');
        hiddenCheckmarkBtn.classList = ('move-todones task-counter');
        toDoList.append(hiddenCounterDeleteBtn, hiddenCheckmarkBtn);
      // ignore the taskCounter which would parseInt as truthy
      } else if (!parseInt(allTasks[i][1]) && JSON.parse(allTasks[i][1]).location === 'todones') {
        // Build To Dones list
        let doneTask = document.createElement('div');
        doneTask.classList = "todo-item";
        doneTask.innerHTML = `
          <div class="heading-bar" data-task-id="${JSON.parse(allTasks[i][1]).id}">
            <h3 class="title">${JSON.parse(allTasks[i][1]).title}</h3>
            <div class="btns">
              <button class="move-todos" title="restore" alt="restore"><span class="restore">&circlearrowleft;</span></button>
            </div>
          </div>
          <p class="description">${JSON.parse(allTasks[i][1]).description}</p>
          <div class="flags">
            <span class="priority priority__${JSON.parse(allTasks[i][1]).priority}">${JSON.parse(allTasks[i][1]).priority}</span>
            <p class="bumper"></p>
            <span class="due-date">${JSON.parse(allTasks[i][1]).dueDate}</span>
          </div>
        `
        toDoneList.appendChild(doneTask);
      };
    };
  };
}