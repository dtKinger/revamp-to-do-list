export const SORT = document.querySelector('#sort-items');
const DEFAULT = document.querySelector('#sort-items-default').value;
const DATE_CREATED = document.querySelector('#sort-items-created').value;
const DUE_DATE = document.querySelector('#sort-items-due').value;
const PRIORITY = document.querySelector('#sort-items-priority').value;

SORT.addEventListener('change', (e) => {
  switch(e.target.value){
    case DEFAULT : 
    console.log('default');
    break;
    case DATE_CREATED : 
    console.log('date created');
    break;
    case DUE_DATE : 
    console.log('due date');
    break;
    case PRIORITY : 
    console.log('prio');
  }
});