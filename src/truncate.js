const FOCUS_BTN = document.querySelector('#focus');
const SEE_ALL_BTN = document.querySelector('#see-all');

let chevron = document.querySelector('.shrink-controller', ':before');

let toDoList = document.getElementById('to-dos');
let toDoneList = document.getElementById('to-dones');

export let toDos;
export let toDones;


export function refreshTruncate () {
  
  toDos = toDoList.querySelectorAll('.todo-item');
  toDones = toDoneList.querySelectorAll('.todo-item');

  checkTruncation();

};

FOCUS_BTN.addEventListener('click', () => {
  refreshTruncate();
});

SEE_ALL_BTN.addEventListener('click', () => {
  removeTruncation();
});



export function checkTruncation () {
  if (toDos.length > 2){
    FOCUS_BTN.classList.add('show');
    SEE_ALL_BTN.classList.add('show');
    toDos[2].classList.add('shrink-controller')
    for (let i = 2; i < toDos.length; i += 1){
      toDos[i].classList.add('shrink')
    }
  } else if (toDos.length <= 2 && toDones.length <= 2){
    FOCUS_BTN.classList.remove('show');
    SEE_ALL_BTN.classList.remove('show');
  }

  if (toDones.length > 2){
    FOCUS_BTN.classList.add('show');
    SEE_ALL_BTN.classList.add('show');
    toDones[2].classList.add('shrink-controller')
    for (let i = 2; i < toDones.length; i += 1){
      toDones[i].classList.add('shrink')
    }
  }
}

export function removeTruncation () {
  for (let i = 0; i < toDos.length; i += 1){
    toDos[i].classList.remove('shrink')
  }
  for (let i = 0; i < toDones.length; i += 1){
    toDones[i].classList.remove('shrink')
  }
}