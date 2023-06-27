/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveStorage: () => (/* binding */ saveStorage)\n/* harmony export */ });\n// Init a count to track tasks\nif (localStorage.taskCounter){\n  __webpack_require__.g.taskCounter = parseInt(localStorage.getItem('taskCounter'));\n} else { \n  __webpack_require__.g.taskCounter = 0;\n}\n\n// Init an array to hold all tasks from Local Storage\n// tasksToDo[] and completedTasks[] will be built by filtering allTasks\nif (localStorage.length > 0){\n  [...__webpack_require__.g.allTasks] = Object.entries(localStorage);\n} else {\n  __webpack_require__.g.allTasks = [];\n}\n\n// save storage\nfunction saveStorage () {\n  localStorage = JSON.stringify(allTasks);\n};\n\n//# sourceURL=webpack://to-do-list-top/./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoneList: () => (/* binding */ toDoneList),\n/* harmony export */   topNav: () => (/* binding */ topNav)\n/* harmony export */ });\n/* harmony import */ var _render_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-tasks.js */ \"./src/render-tasks.js\");\n/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-task.js */ \"./src/new-task.js\");\n\n\n\nconst topNav = document.getElementById('top-nav');\nconst toDoList = document.getElementById('to-dos');\nconst toDoneList = document.getElementById('to-dones');\n\nconst main = document.getElementById('main');\n\n /* =================== \\\n|       Initialize       |\n \\ =================== */\n\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateCheckmarks)();\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateDeletebuttons)();\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateRestoreBtns)();\n\n /* =================== \\\n|      END PAGE LOAD     |\n \\ =================== */\n// ==================== \\\\\n /* =================== \\\n|      Local Storage     |\n \\ =================== */\n\n// function saveToLocalStorage () {\n  \n// }\n\n\n\n /* =================== \\\n|    END Local Storage   |\n \\ =================== */\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore') || e.target.classList.contains('delete-btn')){\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateCheckmarks)();\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateDeletebuttons)();\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateRestoreBtns)();\n    console.log('allTasks represents:')\n    console.info(allTasks);\n  };\n});\n\n\nfunction getLocalStorage () {\n  // Rebuild the allTasks array\n  if (localStorage){\n    // Instead of Object.entries, should I loop through\n    // So that I can skip the taskCounter entry?\n    [...allTasks] = Object.entries(localStorage);\n  }\n}\n\n// export function setLocalStorage () {\n\n// }\n\n//# sourceURL=webpack://to-do-list-top/./src/index.js?");

/***/ }),

/***/ "./src/new-task.js":
/*!*************************!*\
  !*** ./src/new-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewForm: () => (/* binding */ addNewForm),\n/* harmony export */   addToDo: () => (/* binding */ addToDo),\n/* harmony export */   helpCloseAddModal: () => (/* binding */ helpCloseAddModal),\n/* harmony export */   helpOpenAddModal: () => (/* binding */ helpOpenAddModal),\n/* harmony export */   newTask: () => (/* binding */ newTask),\n/* harmony export */   newToDoObj: () => (/* binding */ newToDoObj)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/globals.js\");\n/* harmony import */ var _render_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-tasks.js */ \"./src/render-tasks.js\");\n\n\n\nconst addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav\nconst addNewForm = document.getElementById('add-new-to-do');\n\nlet newTask = '';\n\nclass Task {\n  constructor (title, description, priority, dueDate, createdAt, location, id){\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n    this.createdAt = createdAt;\n    this.location = location;\n    this.id = id;\n  }  \n}\n\n\naddNewForm.addEventListener('submit', newToDoObj);\nfunction newToDoObj (e) {\n    e.preventDefault();\n    // Prepare the task count\n    __webpack_require__.g.taskCounter += 1;\n    localStorage.setItem('taskCounter', __webpack_require__.g.taskCounter);\n    \n    //capture input values.\n    let title = document.getElementById('title').value;\n    let description = document.getElementById('description').value;\n    let priority = document.getElementById('priority-select').value;\n    let dueDate = document.getElementById('date-picker').value;\n    let createdAt = new Date();\n    let location = 'todos';\n    let id = taskCounter;\n\n    let taskDetails = new Task(title, description, priority, dueDate, createdAt, location, id)\n    \n    localStorage.setItem('newTask' + parseInt(__webpack_require__.g.taskCounter), JSON.stringify(taskDetails));\n\n    addNewForm.reset();\n    addNewForm.querySelector('#title').focus();\n\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();\n}\n\naddToDo.addEventListener('click', () => {\n  if (!addNewForm.classList.contains('show')){\n    helpOpenAddModal();\n  } else if (addNewForm.classList.contains('show')){\n    helpCloseAddModal();\n  }\n});\n\nfunction helpOpenAddModal () {\n  addNewForm.classList.add('show')\n}\n\nfunction helpCloseAddModal () {\n  addNewForm.classList.remove('show');\n}\n\n// Let Escape key close the Add ToDo box\nwindow.addEventListener('keyup', (e) => {\n  if (document.querySelector('.show')){\n  let target = document.querySelector('.show')  \n    if (e.key === 'Escape'){\n      target.classList.remove('show')\n    }\n  };\n});\n\n\n\n//# sourceURL=webpack://to-do-list-top/./src/new-task.js?");

/***/ }),

/***/ "./src/render-tasks.js":
/*!*****************************!*\
  !*** ./src/render-tasks.js ***!
  \*****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: 'import' and 'export' may only appear at the top level (106:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| // These 3 functions executed on click of an event button\\n> export function updateDeletebuttons(){\\n|   // Delete buttons\\n|   let deleteBtns = document.querySelectorAll('.delete-btn');\");\n\n//# sourceURL=webpack://to-do-list-top/./src/render-tasks.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;