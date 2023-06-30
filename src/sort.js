export const SORT = document.querySelector('#sort-items');
const DEFAULT = document.querySelector('#sort-items-default');
const DATE_CREATED = document.querySelector('#sort-items-created');
const DUE_DATE = document.querySelector('#sort-items-due');
const PRIORITY = document.querySelector('#sort-items-priority');

SORT.addEventListener('change', (e) => {
  console.log(e);
  if (e.target == 'DEFAULT'){
    console.log('default');
  } else if (e.target == 'DATE_CERATED'){
    console.log('date created');
  } else if (e.target == 'DUE_DATE'){
    console.log('due date');
  } else if (e.target == 'PRIORITY'){
    console.log('priority');
  };
});