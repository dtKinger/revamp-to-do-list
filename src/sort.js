import { getLocalStorage } from ".";
import { pureRender, updateAllButtons } from "./render-tasks";
import { refreshTruncate } from "./truncate";
import { compareAsc, compareDesc, parseISO } from "date-fns";

export const SORT = document.querySelector('#sort-items');
export const DEFAULT = document.querySelector('#sort-items-default').value;
export const DATE_CREATED = document.querySelector('#sort-items-created').value;
export const DUE_DATE = document.querySelector('#sort-items-due').value;
export const PRIORITY = document.querySelector('#sort-items-priority').value;

SORT.addEventListener('change', (e) => {
  sortSwitch(e);
});

function compareCreationDate( a, b ){
let aDate = parseISO(JSON.parse(a[1]).createdAt);
let bDate = parseISO(JSON.parse(b[1]).createdAt);

return compareAsc(aDate , bDate);

// My solution from scratch worked too...
  //   if (JSON.parse(a[1]).createdAt < JSON.parse(b[1]).createdAt){
  //     return -1;
  //   } else if (JSON.parse(a[1]).createdAt > JSON.parse(b[1]).createdAt){
  //     return 1;
  //   } else {
  //     return 0;
  //   };
}

function compareDueDate ( a, b ) {
  let aDashDate = parseISO(JSON.parse(a[1]).dueDate); 
  let bDashDate = parseISO(JSON.parse(b[1]).dueDate); 

  return compareAsc( aDashDate , bDashDate);
  
}

function comparePriority ( a, b ) {

  // Assign a numerical value to priorities to sort them
  let priorityMap = (whichArray) => {
    if (JSON.parse(whichArray[1]).priority == 'high'){
      return 1;
    } else if (JSON.parse(whichArray[1]).priority == 'medium') {
      return 2;
    } else if (JSON.parse(whichArray[1]).priority == 'low') {
      return 3;
    };
  } 

  if (priorityMap(a) < priorityMap(b)){
    return -1;
  } else if (priorityMap(a) > priorityMap(b)){
    return 1;
  } else {
    return 0;
  }
}

function refreshEverything () {
  pureRender();
  refreshTruncate();
  updateAllButtons();``
}

export function sortSwitch (e) {
  switch(e.target.value){
    case DEFAULT : 
    // sort
    getLocalStorage();
    refreshEverything();
    break;

    case DATE_CREATED : 
    // sort
    allTasks.sort(compareCreationDate)
    refreshEverything();
    break;

    case DUE_DATE : 
    // sort
    allTasks.sort(compareDueDate)
    refreshEverything();
    break;

    case PRIORITY :
    // sort
    allTasks.sort(comparePriority)
    // allTasks.reverse();
    refreshEverything();
  }
}

export function clickSwitch() {
  // Get the sort filter
  let currentSortFilter = SORT.options[SORT.selectedIndex].value;
  switch(currentSortFilter){
    case DEFAULT : 
    // sort
    getLocalStorage();
    refreshEverything();
    break;

    case DATE_CREATED : 
    // sort
    allTasks.sort(compareCreationDate)
    refreshEverything();
    break;

    case DUE_DATE : 
    // sort
    allTasks.sort(compareDueDate)
    refreshEverything();
    break;

    case PRIORITY :
    // sort
    allTasks.sort(comparePriority)
    // allTasks.reverse();
    refreshEverything();
  }
}