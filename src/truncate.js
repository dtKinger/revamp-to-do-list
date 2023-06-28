const truncateBtn = document.querySelector('.truncate');

let chevron = document.querySelector('.shrink-controller', ':before');

let toDoList = document.getElementById('to-dos');
let toDoneList = document.getElementById('to-dones');

export let toDos;
export let toDones;


export function refreshTruncate () {
  
  toDos = toDoList.querySelectorAll('.todo-item');
  toDones = toDoneList.querySelectorAll('.todo-item');

  if (toDos.length > 2){
    toDos[2].classList.add('shrink-controller')
    for (let i = 2; i < toDos.length; i += 1){
      toDos[i].classList.add('shrink')
    }
  }

  if (toDones.length > 2){
    toDones[2].classList.add('shrink-controller')
    for (let i = 2; i < toDones.length; i += 1){
      toDones[i].classList.add('shrink')
    }
  }

  console.log(chevron);

};

truncateBtn.addEventListener("click", () => {
  refreshTruncate();
})
