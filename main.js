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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Init a count to track tasks\nif (localStorage.taskCounter){\n  __webpack_require__.g.taskCounter = parseInt(localStorage.getItem('taskCounter'));\n} else { \n  __webpack_require__.g.taskCounter = 0;\n}\n\n// Init an array to hold all tasks from Local Storage\n// tasksToDo[] and completedTasks[] will be built by filtering allTasks\nif (localStorage.length > 0){\n  [...__webpack_require__.g.allTasks] = Object.entries(localStorage);\n} else {\n  __webpack_require__.g.allTasks = [];\n}\n\n\n\n//# sourceURL=webpack://to-do-list-top/./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoneList: () => (/* binding */ toDoneList),\n/* harmony export */   topNav: () => (/* binding */ topNav)\n/* harmony export */ });\n/* harmony import */ var _render_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-tasks.js */ \"./src/render-tasks.js\");\n\n\nconst topNav = document.getElementById('top-nav');\nconst toDoList = document.getElementById('to-dos');\nconst toDoneList = document.getElementById('to-dones');\n\nconst main = document.getElementById('main');\n\n /* =================== \\\n|       Initialize       |\n \\ =================== */\n\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n\n /* =================== \\\n|      END PAGE LOAD     |\n \\ =================== */\n// ==================== \\\\\n /* =================== \\\n|      Local Storage     |\n \\ =================== */\n\n// function saveToLocalStorage () {\n  \n// }\n\n\n\n /* =================== \\\n|    END Local Storage   |\n \\ =================== */\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore')){\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n    console.log('allTasks represents:')\n    console.info(allTasks);\n  };\n});\n\n// Build a master array for all tasks.\n\n\n// export function reAssignToArrays () {\n//   emptyTasksToDo();\n//   emptyCompletedTasks();\n//   getLocalStorage();\n  \n//   // Then rebuild tasksToDo and completedTasks\n//   for (let i = 0; i < allTasks.length; i += 1){\n//     if (!parseInt(allTasks[i][1])){ // If it cannot be parsed as an Int, i.e. not the taskCounter\n//       // use it.\n//     let task = JSON.parse(allTasks[i][1]) // all tasks is an array of arrays. Grab the entry [i] then\n//     // grab it's second property [1] which is the object information\n//     if (task.location === 'todos'){\n//       tasksToDo.push(task);\n//       } else if (task.location === 'todones'){\n//         completedTasks.push(task);\n//       }\n//     }\n//   }\n// }\n\nfunction getLocalStorage () {\n  // Rebuild the allTasks array\n  [...allTasks] = Object.entries(localStorage);\n}\n\n// export function setLocalStorage () {\n\n// }\n\n//# sourceURL=webpack://to-do-list-top/./src/index.js?");

/***/ }),

/***/ "./src/render-tasks.js":
/*!*****************************!*\
  !*** ./src/render-tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emptyallTasks: () => (/* binding */ emptyallTasks),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks),\n/* harmony export */   updateCheckmarks: () => (/* binding */ updateCheckmarks),\n/* harmony export */   updateDeletebuttons: () => (/* binding */ updateDeletebuttons),\n/* harmony export */   updateRestoreBtns: () => (/* binding */ updateRestoreBtns)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/globals.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _truncate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truncate.js */ \"./src/truncate.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction renderTasks () {\n  // Dump toDoList\n  _index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.innerHTML = `\n  <h2 class=\"section-title\">TO DOs</h2>\n  <div class=\"sort\">\n    <label for=\"sort-to-dones\">Sort by:</label>\n    <select name=\"\" id=\"sort-to-dos\">\n      <option value=\"sort-default\" id=\"sort-dos-default\">Default</option>\n      <option value=\"sort-date-created\" id=\"sort-dones-created\">Date created</option>\n      <option value=\"sort-due-date\" id=\"sort-dones-due\">Due Date</option>\n      <option value=\"sort-priority\" id=\"sort-dones-priority\">Priority</option>\n    </select>\n  </div>\n  `\n\n  // Dump toDoneList\n  toDoneList.innerHTML = `\n  <h2 class=\"section-title\">TO DONEs</h2>\n  <div class=\"sort\">\n    <label for=\"sort-to-dones\">Sort by:</label>\n    <select name=\"\" id=\"sort-to-dones\">\n      <option value=\"sort-default\" id=\"sort-dos-default\">Default</option> \n      <option value=\"sort-date-created\" id=\"sort-dones-created\">Date created</option>\n      <option value=\"sort-due-date\" id=\"sort-dones-due\">Due date</option>\n      <option value=\"sort-priority\" id=\"sort-dones-priority\">Priority</option>\n    </select>\n  </div>\n  `\n\n  // Build To Dos\n  if (JSON.partse(_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i]).location === 'todos'){\n    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.length; i += 1){\n      let newTask = document.createElement('div');\n      newTask.classList = \"todo-item\";\n      newTask.innerHTML = \n      `\n      <div class=\"heading-bar\">\n        <h3 class=\"title\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].title}</h3>\n        <div class=\"btns\">\n          <button class=\"delete-btn\">&times;</button>\n          <button class=\"move-todones\" alt=\"Mark as complete\" title=\"Mark as complete\">&check;</button>\n        </div>\n      </div>\n      <p class=\"description\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].description}</p>\n      <div class=\"flags\">\n        <span class=\"priority priority__${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].priority}\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].priority}</span>\n        <p class=\"bumper\"></p>\n        <span class=\"due-date\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].dueDate}</span>\n      </div>\n    `\n    _index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.appendChild(newTask);\n    };\n  }\n\n\n  // Build To Dones list\n  if (JSON.partse(_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i]).location === 'todones'){\n    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.length; i += 1){\n      let doneTask = document.createElement('div');\n      doneTask.classList = \"todo-item\";\n      doneTask.innerHTML = `\n      <div class=\"heading-bar\">\n        <h3 class=\"title\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].title}</h3>\n        <div class=\"btns\">\n          <button class=\"move-todos\" title=\"restore\" alt=\"restore\"><span class=\"restore\">&circlearrowleft;</span></button>\n        </div>\n      </div>\n      <p class=\"description\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].description}</p>\n      <div class=\"flags\">\n        <span class=\"priority priority__${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].priority}\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].priority}</span>\n        <p class=\"bumper\"></p>\n        <span class=\"due-date\">${_globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks[i].dueDate}</span>\n      </div>\n    `\n    toDoneList.appendChild(doneTask);\n    };\n  }\n\n\n\n\n  // Truncate buttons\n\n  if (_truncate_js__WEBPACK_IMPORTED_MODULE_1__.toDos.length > 2 || _truncate_js__WEBPACK_IMPORTED_MODULE_1__.toDones.length > 2){\n    (0,_truncate_js__WEBPACK_IMPORTED_MODULE_1__.refreshTruncate)();\n  }\n\n};\n\nfunction emptyallTasks () {\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks = [];\n}\n\nfunction updateDeletebuttons(){\n  // Delete buttons\n  let deleteBtns = document.querySelectorAll('.delete-btn');\n  deleteBtns.forEach((button, index) => {\n    button.addEventListener('click', (e) => {\n      console.log(index);\n      _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.splice(index, 1) // don't need to reassign this.\n      e.target.parentElement.parentElement.parentElement.remove();\n    })\n  })\n};\n\nfunction updateCheckmarks () {\n  // Checkmarks\n  let checkmarks = document.querySelectorAll('.move-todones');\n  checkmarks.forEach((checkmark, index) => {\n    checkmark.addEventListener('click', (e) => {\n\n      let movedTask = _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.splice(index, 1)[0] // Splice AND get the item.\n\n      // change it's location property\n      movedTask.location = 'todones';\n      \n      function getIndex () {\n        // Match up two arrays by Id.\n        let correspondingTask = _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.find(item => JSON.parse(item[1]).id == movedTask.id)\n        let deleteIndex = _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.indexOf(correspondingTask)\n        console.log('Index to be deleted is: ')\n        console.log(deleteIndex) // this works.\n        \n      }\n\n      localStorage.setItem('newTask' + getIndex(), JSON.stringify(movedTask));\n\n      emptyallTasks();\n      e.target.parentElement.parentElement.parentElement.remove(); // Delete from the original position\n    })\n  })\n}\n\nfunction updateRestoreBtns () {\n  // Restore Buttons\n  let restoreBtns = document.querySelectorAll('.restore');\n\n  restoreBtns.forEach( (button, index) => {\n    button.addEventListener('click', (e) => {\n      let movedTask = _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.splice(index, 1)[0] // Splice AND get the item. Push only the item, not the whole new array\n      movedTask.location = 'todos';\n      tasksToDo.push(movedTask);\n      e.target.parentElement.parentElement.parentElement.parentElement.remove(); // Delete from the original position\n    })\n  })\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list-top/./src/render-tasks.js?");

/***/ }),

/***/ "./src/truncate.js":
/*!*************************!*\
  !*** ./src/truncate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   refreshTruncate: () => (/* binding */ refreshTruncate),\n/* harmony export */   toDones: () => (/* binding */ toDones),\n/* harmony export */   toDos: () => (/* binding */ toDos)\n/* harmony export */ });\nconst truncateBtn = document.querySelector('.truncate');\n\nlet chevron = document.querySelector('.shrink-controller', ':before');\n\nlet toDoList = document.getElementById('to-dos');\nlet toDoneList = document.getElementById('to-dones');\n\nlet toDos = toDoList.querySelectorAll('.todo-item');\nlet toDones = toDoneList.querySelectorAll('.todo-item');\n\n\nfunction refreshTruncate () {\n  \n  toDos = toDoList.querySelectorAll('.todo-item');\n  toDones = toDoneList.querySelectorAll('.todo-item');\n\n  console.log(toDos);\n  console.info(toDones);\n\n  if (toDos.length > 2){\n    toDos[2].classList.add('shrink-controller')\n    for (let i = 2; i < toDos.length; i += 1){\n      toDos[i].classList.add('shrink')\n    }\n  }\n\n  if (toDones.length > 2){\n    toDones[2].classList.add('shrink-controller')\n    for (let i = 2; i < toDones.length; i += 1){\n      toDones[i].classList.add('shrink')\n    }\n  }\n\n  console.log(chevron);\n\n};\n\ntruncateBtn.addEventListener(\"click\", () => {\n  refreshTruncate();\n})\n\n\n//# sourceURL=webpack://to-do-list-top/./src/truncate.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;