/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoneList: () => (/* binding */ toDoneList),\n/* harmony export */   topNav: () => (/* binding */ topNav)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/new-task.js\");\n/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ \"./src/to-do.js\");\n/* harmony import */ var _to_dones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-dones */ \"./src/to-dones.js\");\n \n\n \n\nconst topNav = document.getElementById('top-nav');\nconst toDoList = document.getElementById('to-dos');\nconst toDoneList = document.getElementById('to-dones');\n\nconst main = document.getElementById('main');\n\n// New tasks are added to an array\n  // tasksToDo.push(newTask);\n// Write a function that loops through tasksToDo\n// doing new Task class creation on each item\n// Output them in the To Do List\n\n// Items marked done get copied and assigned to completedTasks[compeletedTasks.length].\n// then deleted from tasksToDo.slice(index, 1)\n// Output completedTasks through a Class constructor\n\n// \"Restore\" an item:\n// Copy the item from completedTasks[] into memory\n// Delete from completedTasks[]\n// tasksToDo.push(previouslyCompleted)\n// Render\n\n\n /* =================== \\\n|       Initialize       |\n \\ =================== */\n(0,_to_do__WEBPACK_IMPORTED_MODULE_1__.renderToDos)();\n(0,_to_dones__WEBPACK_IMPORTED_MODULE_2__.renderToDones)();\n\n /* =================== \\\n|      END PAGE LOAD     |\n \\ =================== */\n \n\n\n// This removes the need to call circular functions, e.g. renderToDos() {\n// ...\n// renderToDones (){\n//   renderToDos() {\n  // ...\n//     }\n//   }\n// }\n// On any \"move\" button click, render the appropriate list.\nwindow.addEventListener('click', (e) => {\nif (e.target.classList.contains('move-todones')){ // Do checkmark things\n  // setTimeout(() => {\n    (0,_to_dones__WEBPACK_IMPORTED_MODULE_2__.renderToDones)();\n  // }, 100)\n  } else if (e.target.classList.contains('restore')) { // Do Restore things\n    // setTimeout(() => {\n      (0,_to_do__WEBPACK_IMPORTED_MODULE_1__.renderToDos)();\n    // }, 100)\n  }\n})\n\n\n\n\n//# sourceURL=webpack://to-do-list-top/./src/index.js?");

/***/ }),

/***/ "./src/new-task.js":
/*!*************************!*\
  !*** ./src/new-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewForm: () => (/* binding */ addNewForm),\n/* harmony export */   addToDo: () => (/* binding */ addToDo),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   helpCloseAddModal: () => (/* binding */ helpCloseAddModal),\n/* harmony export */   helpOpenAddModal: () => (/* binding */ helpOpenAddModal),\n/* harmony export */   newToDoObj: () => (/* binding */ newToDoObj),\n/* harmony export */   submitNewToDo: () => (/* binding */ submitNewToDo)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ \"./src/to-do.js\");\n/* harmony import */ var _to_dones_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-dones.js */ \"./src/to-dones.js\");\n\n\n\n\nconst addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav\nconst addNewForm = document.getElementById('add-new-to-do');\nconst submitNewToDo = document.getElementById('submit-new');\n\nconst form = document.getElementById('add-new-to-do');\naddNewForm.addEventListener('submit', newToDoObj);\n\nfunction newToDoObj (e) {\n  e.preventDefault();\n  let myFormData = new FormData(e.target);\n  let formDataObj = {};\n  myFormData.forEach((value, key) => (formDataObj[key] = value));\n  formDataObj = {...formDataObj, \"createdAt\": new Date()} // Add meta data of the date created.\n  // sortAll();\n  _to_do_js__WEBPACK_IMPORTED_MODULE_1__.tasksToDo.push(formDataObj);\n  (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.renderToDos)();\n  form.reset();\n};\n\naddToDo.addEventListener('click', () => {\n  if (!addNewForm.classList.contains('show')){\n    helpOpenAddModal();\n  } else if (addNewForm.classList.contains('show')){\n    helpCloseAddModal();\n  }\n});\n\nfunction helpOpenAddModal () {\n  addNewForm.classList.add('show')\n}\n\nfunction helpCloseAddModal () {\n  addNewForm.classList.remove('show');\n}\n\n// Let Escape key close the Add ToDo box\nwindow.addEventListener('keyup', (e) => {\n  if (document.querySelector('.show')){\n  let target = document.querySelector('.show')  \n    if (e.key === 'Escape'){\n      target.classList.remove('show')\n    }\n  };\n});\n\n\n\n\n\n//# sourceURL=webpack://to-do-list-top/./src/new-task.js?");

/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderToDos: () => (/* binding */ renderToDos),\n/* harmony export */   tasksToDo: () => (/* binding */ tasksToDo)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _to_dones_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-dones.js */ \"./src/to-dones.js\");\n\n\n\n\nlet tasksToDo = [\n  {\n    \"title\": \"Make To Do App\",\n    \"description\": \"Using JS modules and SOLID principles, build a useful To Do application.\",\n    \"priority\": \"Medium\",\n    \"dueDate\": \"2023-12-06\",\n    \"createdAt\": \"2023-06-05\"\n  },\n  {\n    \"title\": \"Create a library app\",\n    \"description\": \"Use object constructors to add books to a library, optionally marking them as read. Allow use to withdraw (delete) books.\",\n    \"priority\": \"Low\",\n    \"dueDate\": \"2023-12-06\",\n    \"createdAt\": \"2023-01-01\"\n  },\n];\n\nfunction renderToDos () {\n  \n  // Dump existing\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.innerHTML = `\n  <h2 class=\"section-title\">TO DOs</h2>\n  <div class=\"sort\">\n    <label for=\"sort-to-dones\">Sort by:</label>\n    <select name=\"\" id=\"sort-to-dos\">\n      <option value=\"sort-date-created\" id=\"sort-dones-created\">Date created</option>\n      <option value=\"sort-due-date\" id=\"sort-dones-due\">Due Date</option>\n      <option value=\"sort-priority\" id=\"sort-dones-priority\">Priority</option>\n    </select>\n  </div>\n  `\n  for (let i = 0; i < tasksToDo.length; i += 1){\n    let newTask = document.createElement('div');\n    newTask.classList = \"todo-item\";\n    newTask.innerHTML = `\n    <div class=\"heading-bar\">\n      <h3 class=\"title\">${tasksToDo[i].title}</h3>\n      <div class=\"btns\">\n        <button class=\"delete-btn\">&times;</button>\n        <button class=\"move-todones\" alt=\"Mark as complete\" title=\"Mark as complete\">&check;</button>\n      </div>\n    </div>\n    <p class=\"description\">${tasksToDo[i].description}</p>\n    <div class=\"flags\">\n      <span class=\"priority priority__${tasksToDo[i].priority}\">${tasksToDo[i].priority}</span>\n      <p class=\"bumper\"></p>\n      <span class=\"due-date\">${tasksToDo[i].dueDate}</span>\n    </div>\n  `\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.appendChild(newTask);\n  };\n  // Delete buttons\n  let deleteBtns = document.querySelectorAll('.delete-btn');\n  deleteBtns.forEach((button) => {\n    button.addEventListener('click', (e, index) => {\n      temp = e.target.parentElement.parentElement.parentElement;\n      temp.remove();\n      tasksToDo.splice(index, 1)\n    })\n  })\n  // Checkmarks\n  let checkmarks = document.querySelectorAll('.move-todones');\n\n  let temp = null;\n  let title = '';\n  let description = ''; \n  let priority = '';\n  let dueDate = '';\n\n  checkmarks.forEach((checkmark) => {\n    checkmark.addEventListener('click', (e, index) => {\n      temp = e.target.parentElement.parentElement.parentElement;\n      tasksToDo.splice(index, 1);\n      title = temp.querySelector('.title').textContent;\n      description = temp.querySelector('.description').textContent;\n      priority = temp.querySelector('.priority').textContent;\n      dueDate = temp.querySelector('.due-date').textContent;\n      temp = {\n        \"title\": title,\n        \"description\": description,\n        \"priority\": priority,\n        \"dueDate\": dueDate,\n        \"updatedAt\": new Date()\n      };\n      _to_dones_js__WEBPACK_IMPORTED_MODULE_1__.completedTasks.push(temp);\n      e.target.parentElement.parentElement.parentElement.remove(); // Delete from the original position\n    })\n  })\n};\n\n\n//# sourceURL=webpack://to-do-list-top/./src/to-do.js?");

/***/ }),

/***/ "./src/to-dones.js":
/*!*************************!*\
  !*** ./src/to-dones.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completedTasks: () => (/* binding */ completedTasks),\n/* harmony export */   renderToDones: () => (/* binding */ renderToDones)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ \"./src/to-do.js\");\n\n \n\nlet completedTasks = [\n  {\n    \"title\": \"Make Tic Tac Toe game\",\n    \"description\": \"Use IIFE's to modularize your code. Learn about 2D arrays and implement game-winning logic.\",\n    \"priority\": \"High\",\n    \"dueDate\": \"2023-12-05\",\n    \"createdAt\": \"2022-02-14\"\n  },\n  {\n    \"title\": \"Build Calculator in Vanilla JS\",\n    \"description\": \"Without using the calc() function, build a calculator that stores values to memory and displays answer on screen.\",\n    \"priority\": \"Medium\",\n    \"dueDate\": \"2023-12-06\",\n    \"createdAt\": \"2022-12-31\"\n  },\n];\n\nfunction renderToDones () {\n\n  // Dump exisiting\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoneList.innerHTML = `\n  <h2 class=\"section-title\">TO DONEs</h2>\n  <div class=\"sort\">\n    <label for=\"sort-to-dones\">Sort by:</label>\n    <select name=\"\" id=\"sort-to-dones\">\n      <option value=\"sort-date-created\" id=\"sort-dones-created\">Date created</option>\n      <option value=\"sort-due-date\" id=\"sort-dones-due\">Due date</option>\n      <option value=\"sort-priority\" id=\"sort-dones-priority\">Priority</option>\n    </select>\n  </div>\n  `\n  for (let i = 0; i < completedTasks.length; i += 1){\n    let doneTask = document.createElement('div');\n    doneTask.classList = \"todo-item\";\n    doneTask.innerHTML = `\n    <div class=\"heading-bar\">\n      <h3 class=\"title\">${completedTasks[i].title}</h3>\n      <div class=\"btns\">\n        <button class=\"move-todos\" title=\"restore\" alt=\"restore\"><span class=\"restore\">&circlearrowleft;</span></button>\n      </div>\n    </div>\n    <p class=\"description\">${completedTasks[i].description}</p>\n    <div class=\"flags\">\n      <span class=\"priority priority__${completedTasks[i].priority}\">${completedTasks[i].priority}</span>\n      <p class=\"bumper\"></p>\n      <span class=\"due-date\">${completedTasks[i].dueDate}</span>\n    </div>\n  `\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoneList.appendChild(doneTask);\n  };\n  \n  let restoreBtns = document.querySelectorAll('.restore');\n\n  let temp = null;\n  let title = '';\n  let description = ''; \n  let priority = '';\n  let dueDate = '';\n\n  restoreBtns.forEach( (button) => {\n    button.addEventListener('click', (e, index) => {\n      let temp = (e.target.parentElement.parentElement.parentElement.parentElement);\n      completedTasks.splice(index, 1);\n      title = temp.querySelector('.title').textContent;\n      description = temp.querySelector('.description').textContent;\n      priority = temp.querySelector('.priority').textContent;\n      dueDate = temp.querySelector('.due-date').textContent;\n      temp = {\n        \"title\": title,\n        \"description\": description,\n        \"priority\": priority,\n        \"dueDate\": dueDate,\n        \"updatedAt\": new Date()\n      };\n        _to_do_js__WEBPACK_IMPORTED_MODULE_1__.tasksToDo.push(temp)\n        e.target.parentElement.parentElement.parentElement.parentElement.remove();\n        // renderToDos();\n      })\n    })\n  \n};\n\n\n//# sourceURL=webpack://to-do-list-top/./src/to-dones.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;