import { refreshTruncate, toDos, toDones } from "./truncate.js";
import { toDoList, toDoneList, getLocalStorage } from "./index.js";

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
      <div class="heading-bar">
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
        <div class="heading-bar">
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
      } else if (parseInt(allTasks[i][1])){
        let hiddenRestoreBtn = document.createElement('div');
        hiddenRestoreBtn.classList = ('restore task-counter');
        toDoList.append(hiddenRestoreBtn);
      };
    };
  };

  // Truncate buttons
  if (toDos.length > 2 || toDones.length > 2){
    refreshTruncate();
  }

};


// These 3 functions executed on click of an event button
export function updateDeletebuttons(){
  // Delete buttons
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      // remove from local Storage
      localStorage.removeItem(allTasks[index][0]);
    })
  })
};

export function updateCheckmarks () {
  // Checkmarks
  let checkmarks = document.querySelectorAll('.move-todones');
  checkmarks.forEach((checkmark, index) => {
    checkmark.addEventListener('click', (e) => {
      // Get it
      let overwrite = JSON.parse(allTasks[index][1]);
      // Transform it
      overwrite.location = 'todones';
      // Save it
      localStorage.setItem(`${allTasks[index][0]}`, JSON.stringify(overwrite));
      // localStorage.setItem(allTasks[index][1].location, 'todones')
      //saveToLocalStorage();
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
      saveToLocalStorage();
    })
  })
}

export function saveToLocalStorage () {
  for (let i = 0; i < allTasks.length; i += 1){
    if (!parseInt(allTasks[i][1])){
      localStorage.setItem(`${allTasks[i][0]}`, `${JSON.stringify(allTasks[i][1])}`)
    }
  }
}

export function updateAllButtons () {
  updateCheckmarks();
  updateDeletebuttons();
  updateRestoreBtns();
}