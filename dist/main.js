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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoneList: () => (/* binding */ toDoneList),\n/* harmony export */   topNav: () => (/* binding */ topNav)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/new-task.js\");\n/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ \"./src/to-do.js\");\n/* harmony import */ var _to_dones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-dones */ \"./src/to-dones.js\");\n \n\n \n\nconst topNav = document.getElementById('top-nav');\nconst toDoList = document.getElementById('to-dos');\nconst toDoneList = document.getElementById('to-dones');\n\nconst main = document.getElementById('main');\n\n// New tasks are added to an array\n  // tasksToDo.push(newTask);\n// Write a function that loops through tasksToDo\n// doing new Task class creation on each item\n// Output them in the To Do List\n\n// Items marked done get copied and assigned to completedTasks[compeletedTasks.length].\n// then deleted from tasksToDo.slice(index, 1)\n// Output completedTasks through a Class constructor\n\n// \"Restore\" an item:\n// Copy the item from completedTasks[] into memory\n// Delete from completedTasks[]\n// tasksToDo.push(previouslyCompleted)\n// Render\n\n\n//# sourceURL=webpack://to-do-list-top/./src/index.js?");

/***/ }),

/***/ "./src/new-task.js":
/*!*************************!*\
  !*** ./src/new-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewForm: () => (/* binding */ addNewForm),\n/* harmony export */   addToDo: () => (/* binding */ addToDo),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   helpCloseAddModal: () => (/* binding */ helpCloseAddModal),\n/* harmony export */   helpGenerateToDoHtml: () => (/* binding */ helpGenerateToDoHtml),\n/* harmony export */   helpOpenAddModal: () => (/* binding */ helpOpenAddModal),\n/* harmony export */   newToDoObj: () => (/* binding */ newToDoObj),\n/* harmony export */   submitNewToDo: () => (/* binding */ submitNewToDo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ \"./src/to-do.js\");\n\n\n\n\nconst addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav\nconst addNewForm = document.getElementById('add-new-to-do');\nconst submitNewToDo = document.getElementById('submit-new');\n\n\n// Create a new Task from form data\nclass Task {\n  constructor(createdAt, title, description, priority, dueDate) {\n\n    this.createdAt = new Date();\n    this.title = formDataObj;\n    this.description = formDataObj.description;\n    this.priority = formDataObj.priority;\n    this.dueDate = formDataObj.dueDate\n\n  }\n};\n\nconst form = document.getElementById('add-new-to-do');\naddNewForm.addEventListener('submit', newToDoObj);\nfunction newToDoObj (e) {\n  e.preventDefault();\n  let myFormData = new FormData(e.target);\n  let formDataObj = {};\n  myFormData.forEach((value, key) => (formDataObj[key] = value));\n  formDataObj = {...formDataObj, createdAt: new Date()} // Add meta data of the date created.\n  // sortAll();\n  console.info('formDataObj looks like ' + Object.entries(formDataObj));\n  _to_do__WEBPACK_IMPORTED_MODULE_1__.tasksToDo.push(formDataObj);\n  console.log(Object.entries(_to_do__WEBPACK_IMPORTED_MODULE_1__.tasksToDo));\n  console.log(_to_do__WEBPACK_IMPORTED_MODULE_1__.tasksToDo[1]);\n  //tasksToDo.push(myFormData)\n  form.reset();\n};\n\naddToDo.addEventListener('click', () => {\n  if (!addNewForm.classList.contains('show')){\n    helpOpenAddModal();\n  } else if (addNewForm.classList.contains('show')){\n    helpCloseAddModal();\n  }\n});\n\nfunction helpOpenAddModal () {\n  addNewForm.classList.add('show')\n}\n\nfunction helpCloseAddModal () {\n  addNewForm.classList.remove('show');\n}\n\nfunction helpGenerateToDoHtml (formDataObj) {\n  let div = document.createElement('div');\n  let newTask = div;\n  newTask.classList = \"todo-item\";\n  newTask.innerHTML = `\n    <div class=\"heading-bar\">\n      <h3 class=\"title\">${formDataObj.title}</h3>\n      <div class=\"btns\">\n        <button class=\"delete-btn needs-refresh\">&times;</button>\n        <button class=\"move-todones needs-refresh\" alt=\"Mark as complete\" title=\"Mark as complete\">&check;</button>\n      </div>\n    </div>\n    <p class=\"description\">${formDataObj.description}</p>\n    <div class=\"flags\">\n      <span class=\"priority priority__${formDataObj.priority}\">${formDataObj.priority}</span>\n      <p class=\"bumper\"></p>\n      <span class=\"due-date\">${formDataObj.dueDate}</span>\n    </div>\n  `\n  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.append(newTask);\n}\n\n// Let Escape key close the Add ToDo box\nwindow.addEventListener('keyup', (e) => {\n  if (document.querySelector('.show')){\n  let target = document.querySelector('.show')  \n    if (e.key === 'Escape'){\n      target.classList.remove('show')\n    }\n  };\n});\n\n\n//# sourceURL=webpack://to-do-list-top/./src/new-task.js?");

/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderToDos: () => (/* binding */ renderToDos),\n/* harmony export */   tasksToDo: () => (/* binding */ tasksToDo)\n/* harmony export */ });\n\nlet tasksToDo = [\n  {\n    \"createdAt\": \"2023-06-05\",\n    \"title\": \"Make To Do App\",\n    \"description\": \"Using JS modules and SOLID principles, build a useful To Do application.\",\n    \"priority\": \"Medium\",\n    \"dueDate\": \"2023-12-06\"\n  }\n];\n\n\n\nfunction renderToDos () {\n\n}\n\n//# sourceURL=webpack://to-do-list-top/./src/to-do.js?");

/***/ }),

/***/ "./src/to-dones.js":
/*!*************************!*\
  !*** ./src/to-dones.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderToDones: () => (/* binding */ renderToDones)\n/* harmony export */ });\nlet completedTasks = [\n  {\n    \"createdAt\": \"2022-02-14\",\n    \"title\": \"Make Tic Tac Toe game\",\n    \"description\": \"Use IIFE's to modularize your code. Learn about 2D arrays and implement game-winning logic.\",\n    \"priority\": \"High\",\n    \"dueDate\": \"2023-12-05\"\n  },\n  {\n    \"createdAt\": \"2022-12-31\",\n    \"title\": \"Build Calculator in Vanilla JS\",\n    \"description\": \"Without using the calc() function, build a calculator that stores values to memory and displays answer on screen.\",\n    \"priority\": \"Medium\",\n    \"dueDate\": \"2023-12-06\"\n  },\n  {\n    \"createdAt\": \"2023-01-01\",\n    \"title\": \"Create a library app\",\n    \"description\": \"Use object constructors to add books to a library, optionally marking them as read. Allow use to withdraw (delete) books.\",\n    \"priority\": \"Low\",\n    \"dueDate\": \"2023-12-06\"\n  }\n];\n\nfunction renderToDones () {\n  \n}\n\n//# sourceURL=webpack://to-do-list-top/./src/to-dones.js?");

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