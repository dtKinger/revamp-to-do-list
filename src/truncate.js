import { toDoList, toDoneList } from "./index.js";
const truncateBtn = document.querySelector('.truncate');
let okay = document.querySelectorAll('.todo-item');

export function refreshTruncate () {
  
  let toDos = document.querySelectorAll('.todo-item');
  let toDones = toDoneList.querySelectorAll('.todo-item');

  console.log(toDos);
  console.info(toDones);

};

truncateBtn.addEventListener("click", () => {
  refreshTruncate();
})

