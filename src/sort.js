import { pureRender } from "./render-tasks";



export const SORT = document.querySelector('#sort-items');
const DEFAULT = document.querySelector('#sort-items-default').value;
const DATE_CREATED = document.querySelector('#sort-items-created').value;
const DUE_DATE = document.querySelector('#sort-items-due').value;
const PRIORITY = document.querySelector('#sort-items-priority').value;

console.log(Object.entries(localStorage).length);

SORT.addEventListener('change', (e) => {
  switch(e.target.value){
    case DEFAULT : 
    // sort
    allTasks.sort()
    break;

    case DATE_CREATED : 
    // sort
    allTasks.sort(compareCreationDate)
    pureRender();

    // save
    // for (let i = 0; i < allTasks.length; i += 1){
    //   localStorage.setItem(`${allTasks[i][0]}`, `${allTasks[i][1]}`)
    // }
    // // render
    // renderTasks();
    // console.log(allTasks);
    // console.log(localStorage);
    break;

    case DUE_DATE : 
    // sort
    allTasks.sort(compareDueDate)
    // save

    // render
    


    break;

    case PRIORITY :
    // sort
    allTasks.sort(comparePriority)
    // save

    // render


  }
});



function compareCreationDate( a, b ){
  if (JSON.parse(a[1]).createdAt < JSON.parse(b[1]).createdAt){
    return -1;
  } else if (JSON.parse(a[1]).createdAt > JSON.parse(b[1]).createdAt){
    return 1;
  } else {
    return 0;
  };
}

function compareDueDate ( a, b) {
  if (JSON.parse(a[1]).dueDate < JSON.parse(b[1]).dueDate){
    return -1;
  } else if (JSON.parse(a[1]).dueDate > JSON.parse(b[1]).dueDate){
    return 1;
  } else {
    return 0;
  }
}

function comparePriority ( a, b ) {
  if (JSON.parse(a[1]).priority < JSON.parse(b[1]).priority){
    return -1;
  } else if (JSON.parse(a[1]).priority > JSON.parse(b[1]).priority){
    return 1;
  } else {
    return 0;
  }
}