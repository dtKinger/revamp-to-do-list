import { refreshTruncate, toDos, toDones } from "./truncate.js";
import { toDoList, toDoneList, getLocalStorage } from "./index.js";
import { id } from "date-fns/locale";

export function renderTasks () {
  // load it from memory
  getLocalStorage();

  // clear front end

    /// Dump toDoList
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

    /// Dump toDoneList
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
    // Don't do this twice because taskCounter only exists in the ToDo columns;
      // } else if (parseInt(allTasks[i][1])){
      //   let hiddenRestoreBtn = document.createElement('div');
      //   hiddenRestoreBtn.classList = ('restore task-counter');
      //   toDoList.appendChild(hiddenRestoreBtn);
      // };
    };
  };

  // Truncate buttons

};

// These 3 functions executed on click of an event button
export function updateDeletebuttons(){
  // Delete buttons
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      // remove from local Storage
      localStorage.removeItem(allTasks[index][0]);
    });
  });
}

export function updateCheckmarks () {
  // Checkmarks
  let checkmarks = document.querySelectorAll('.move-todones');
  checkmarks.forEach((checkmark) => {
    checkmark.addEventListener('click', (e) => {
      console.log(e.target.parentElement.parentElement.dataset.taskId); // May want to parseInt this.
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