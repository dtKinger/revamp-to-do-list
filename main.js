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

eval("// Init a count to track tasks\nif (localStorage.taskCounter){\n  __webpack_require__.g.taskCounter = parseInt(localStorage.getItem('taskCounter'));\n} else { \n  __webpack_require__.g.taskCounter = 0;\n}\n\n// Init an array to hold all tasks from Local Storage\n// tasksToDo[] and completedTasks[] will be built by filtering allTasks\nif (localStorage.length > 0){\n  [...__webpack_require__.g.allTasks] = Object.entries(localStorage);\n} else {\n  __webpack_require__.g.allTasks = [];\n}\n\n\n//# sourceURL=webpack://to-do-list-top/./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoneList: () => (/* binding */ toDoneList),\n/* harmony export */   topNav: () => (/* binding */ topNav)\n/* harmony export */ });\n/* harmony import */ var _render_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-tasks.js */ \"./src/render-tasks.js\");\n/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-task.js */ \"./src/new-task.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.js */ \"./src/sort.js\");\n/* harmony import */ var _truncate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./truncate.js */ \"./src/truncate.js\");\n\n\n\n\n\nconst topNav = document.getElementById('top-nav');\nconst toDoList = document.getElementById('to-dos');\nconst toDoneList = document.getElementById('to-dones');\n\n /* =================== \\\n|       Initialize       |\n \\ =================== */\n\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n(0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateAllButtons)();\n(0,_truncate_js__WEBPACK_IMPORTED_MODULE_3__.refreshTruncate)()\n\n /* =================== \\\n|      END PAGE LOAD     |\n \\ =================== */\n// ==================== \\\\\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.classList.contains('move-todones') || e.target.classList.contains('restore') || e.target.classList.contains('delete-btn')){\n    \n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_0__.updateAllButtons)();\n    (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.clickSwitch)();\n    (0,_truncate_js__WEBPACK_IMPORTED_MODULE_3__.refreshTruncate)();\n  };\n});\n\nwindow.addEventListener('click', (e) => {\n  if (e.target != _new_task_js__WEBPACK_IMPORTED_MODULE_1__.addNewForm ){\n    (0,_new_task_js__WEBPACK_IMPORTED_MODULE_1__.helpCloseAddModal)();\n  }\n  if (e.target == _new_task_js__WEBPACK_IMPORTED_MODULE_1__.addToDo){\n    (0,_new_task_js__WEBPACK_IMPORTED_MODULE_1__.helpOpenAddModal)();\n  }\n})\n\nfunction getLocalStorage () {\n  // Rebuild the allTasks array\n  if (localStorage){\n    // Instead of Object.entries, should I loop through\n    // So that I can skip the taskCounter entry?\n    [...allTasks] = Object.entries(localStorage);\n  }\n}\n\n\n\n//# sourceURL=webpack://to-do-list-top/./src/index.js?");

/***/ }),

/***/ "./src/new-task.js":
/*!*************************!*\
  !*** ./src/new-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewForm: () => (/* binding */ addNewForm),\n/* harmony export */   addToDo: () => (/* binding */ addToDo),\n/* harmony export */   helpCloseAddModal: () => (/* binding */ helpCloseAddModal),\n/* harmony export */   helpOpenAddModal: () => (/* binding */ helpOpenAddModal),\n/* harmony export */   newTask: () => (/* binding */ newTask),\n/* harmony export */   newToDoObj: () => (/* binding */ newToDoObj)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/globals.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _render_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-tasks.js */ \"./src/render-tasks.js\");\n/* harmony import */ var _truncate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate.js */ \"./src/truncate.js\");\n\n\n\n\nconst addToDo = document.getElementById('add-todo-btn'); // Add ToDo Button in Nav\nconst addNewForm = document.getElementById('add-new-to-do');\n\nlet newTask = '';\n\nclass Task {\n  constructor (title, description, priority, dueDate, createdAt, location, id){\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n    this.createdAt = createdAt;\n    this.location = location;\n    this.id = id;\n  }  \n}\n\naddToDo.addEventListener('click', () => {\n  setTimeout(() => {\n    addNewForm.querySelector('#title').focus();\n  }, 50);\n});\n\naddNewForm.addEventListener('submit', newToDoObj);\nfunction newToDoObj (e) {\n    e.preventDefault();\n    // Prepare the task count\n    __webpack_require__.g.taskCounter += 1;\n    localStorage.setItem('taskCounter', __webpack_require__.g.taskCounter);\n    \n    //capture input values.\n    let title = document.getElementById('title').value;\n    let description = document.getElementById('description').value;\n    let priority = document.getElementById('priority-select').value;\n    let dueDate = document.getElementById('date-picker').value;\n    let createdAt = new Date();\n    let location = 'todos';\n    let id = taskCounter;\n\n    let taskDetails = new Task(title, description, priority, dueDate, createdAt, location, id)\n    \n    localStorage.setItem('newTask' + parseInt(__webpack_require__.g.taskCounter), JSON.stringify(taskDetails));\n\n    addNewForm.reset();\n    addNewForm.querySelector('#title').focus();\n\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();\n    (0,_render_tasks_js__WEBPACK_IMPORTED_MODULE_1__.updateAllButtons)();\n    (0,_truncate_js__WEBPACK_IMPORTED_MODULE_2__.refreshTruncate)();\n}\n\naddToDo.addEventListener('click', () => {\n  if (!addNewForm.classList.contains('show')){\n    helpOpenAddModal();\n  } else if (addNewForm.classList.contains('show')){\n    helpCloseAddModal();\n  }\n});\n\nfunction helpOpenAddModal () {\n  addNewForm.classList.add('show')\n}\n\nfunction helpCloseAddModal () {\n  addNewForm.classList.remove('show');\n}\n\n// Let Escape key close the Add ToDo box\nwindow.addEventListener('keyup', (e) => {\n  if (document.querySelector('.show')){\n  let target = document.querySelector('.show')  \n    if (e.key === 'Escape'){\n      target.classList.remove('show')\n    }\n  };\n});\n\n\n//# sourceURL=webpack://to-do-list-top/./src/new-task.js?");

/***/ }),

/***/ "./src/render-tasks.js":
/*!*****************************!*\
  !*** ./src/render-tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pureRender: () => (/* binding */ pureRender),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks),\n/* harmony export */   updateAllButtons: () => (/* binding */ updateAllButtons),\n/* harmony export */   updateCheckmarks: () => (/* binding */ updateCheckmarks),\n/* harmony export */   updateDeletebuttons: () => (/* binding */ updateDeletebuttons),\n/* harmony export */   updateRestoreBtns: () => (/* binding */ updateRestoreBtns)\n/* harmony export */ });\n/* harmony import */ var _truncate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncate.js */ \"./src/truncate.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction renderTasks () {\n\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)();\n  pureRender();\n  \n};\n\n// These 3 functions executed on click of an event button\nfunction updateDeletebuttons(){\n  // Delete buttons\n  let deleteBtns = document.querySelectorAll('.delete-btn');\n  deleteBtns.forEach((button) => {\n    button.addEventListener('click', (e) => {\n      // remove from local Storage\n      let targetId = e.target.parentElement.parentElement.dataset.taskId;\n      localStorage.removeItem(`newTask${targetId}`);\n      checkTaskCounter();\n    });\n  });\n}\n\nfunction updateCheckmarks () {\n  // Checkmarks\n  let checkmarks = document.querySelectorAll('.move-todones');\n  checkmarks.forEach((checkmark) => {\n    checkmark.addEventListener('click', (e) => {\n      // Read the target ID\n      let targetId = e.target.parentElement.parentElement.dataset.taskId;\n      // Get it\n      let overwrite = JSON.parse(localStorage.getItem(`newTask${targetId}`));\n      // Transform it\n      overwrite.location = 'todones';\n      // Set it\n      localStorage.setItem(`newTask${targetId}`, JSON.stringify(overwrite));\n    });\n  });\n}\n\nfunction updateRestoreBtns () {\n  // Restore Buttons\n  let restoreBtns = document.querySelectorAll('.restore');\n  restoreBtns.forEach( (button) => {\n    button.addEventListener('click', (e) => {\n      // Read the target ID\n      let targetId = e.target.parentElement.parentElement.parentElement.dataset.taskId;\n      // Get it\n      let restore = JSON.parse(localStorage.getItem(`newTask${targetId}`));\n      // Transform it\n      restore.location = 'todos';\n      // Set it\n      localStorage.setItem(`newTask${targetId}`, JSON.stringify(restore));\n    });\n  });\n}\n\nfunction updateAllButtons () {\n  updateCheckmarks();\n  updateDeletebuttons();\n  updateRestoreBtns();\n}\n\nfunction checkTaskCounter () {\n  let toDoItems = document.querySelectorAll('.todo-item');\n  let toDoneItems = document.querySelectorAll('.todone-item') \n  console.log(toDoItems);\n  console.log(toDoneItems);\n  if (toDoItems.length == 1 && toDoneItems.length == 0){\n    taskCounter = 0;\n    localStorage.removeItem('taskCounter');\n  }\n}\n\nfunction pureRender () {\n  // clear front end\n    /// Dump toDoList\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.toDoList.innerHTML = `\n    <h2 class=\"section-title\">TO DOs</h2>\n    `\n    /// Dump toDoneList\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.toDoneList.innerHTML = `\n    <h2 class=\"section-title\">TO DONEs</h2>\n    `\n\n  // Build To Dos\n  if (allTasks){\n    for (let i = 0; i < allTasks.length; i += 1){\n      // ignore the taskCounter which would parseInt as truthy\n      if (!parseInt(allTasks[i][1]) && JSON.parse(allTasks[i][1]).location === 'todos'){\n      let newTask = document.createElement('div');\n      newTask.classList = \"todo-item\";\n      newTask.innerHTML = \n      `\n      <div class=\"heading-bar\" data-task-id=\"${JSON.parse(allTasks[i][1]).id}\">\n        <h3 class=\"title\">${JSON.parse(allTasks[i][1]).title}</h3>\n        <div class=\"btns\">\n          <button class=\"delete-btn\">&times;</button>\n          <button class=\"move-todones\" alt=\"Mark as complete\" title=\"Mark as complete\">&check;</button>\n        </div>\n      </div>\n      <p class=\"description\">${JSON.parse(allTasks[i][1]).description}</p>\n      <div class=\"flags\">\n        <span class=\"priority priority__${JSON.parse(allTasks[i][1]).priority}\">${JSON.parse(allTasks[i][1]).priority}</span>\n        <p class=\"bumper\"></p>\n        <span class=\"due-date\">${JSON.parse(allTasks[i][1]).dueDate}</span>\n      </div>\n      `\n      _index_js__WEBPACK_IMPORTED_MODULE_1__.toDoList.appendChild(newTask);\n      // Make a vidusally hidden div and delete-btn to synchronize\n      // the delete-btns with the localStorage array ordering.\n      } else if (parseInt(allTasks[i][1])){\n        let hiddenCounterDeleteBtn = document.createElement('div');\n        let hiddenCheckmarkBtn = document.createElement('div');\n        hiddenCounterDeleteBtn.classList = ('delete-btn task-counter');\n        hiddenCheckmarkBtn.classList = ('move-todones task-counter');\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.toDoList.append(hiddenCounterDeleteBtn, hiddenCheckmarkBtn);\n      // ignore the taskCounter which would parseInt as truthy\n      } else if (!parseInt(allTasks[i][1]) && JSON.parse(allTasks[i][1]).location === 'todones') {\n        // Build To Dones list\n        let doneTask = document.createElement('div');\n        doneTask.classList = \"todo-item\";\n        doneTask.innerHTML = `\n          <div class=\"heading-bar\" data-task-id=\"${JSON.parse(allTasks[i][1]).id}\">\n            <h3 class=\"title\">${JSON.parse(allTasks[i][1]).title}</h3>\n            <div class=\"btns\">\n              <button class=\"move-todos\" title=\"restore\" alt=\"restore\"><span class=\"restore\">&circlearrowleft;</span></button>\n            </div>\n          </div>\n          <p class=\"description\">${JSON.parse(allTasks[i][1]).description}</p>\n          <div class=\"flags\">\n            <span class=\"priority priority__${JSON.parse(allTasks[i][1]).priority}\">${JSON.parse(allTasks[i][1]).priority}</span>\n            <p class=\"bumper\"></p>\n            <span class=\"due-date\">${JSON.parse(allTasks[i][1]).dueDate}</span>\n          </div>\n        `\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.toDoneList.appendChild(doneTask);\n      };\n    };\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list-top/./src/render-tasks.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DATE_CREATED: () => (/* binding */ DATE_CREATED),\n/* harmony export */   DEFAULT: () => (/* binding */ DEFAULT),\n/* harmony export */   DUE_DATE: () => (/* binding */ DUE_DATE),\n/* harmony export */   PRIORITY: () => (/* binding */ PRIORITY),\n/* harmony export */   SORT: () => (/* binding */ SORT),\n/* harmony export */   clickSwitch: () => (/* binding */ clickSwitch),\n/* harmony export */   sortSwitch: () => (/* binding */ sortSwitch)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _render_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-tasks */ \"./src/render-tasks.js\");\n/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate */ \"./src/truncate.js\");\n\n\n\n\nconst SORT = document.querySelector('#sort-items');\nconst DEFAULT = document.querySelector('#sort-items-default').value;\nconst DATE_CREATED = document.querySelector('#sort-items-created').value;\nconst DUE_DATE = document.querySelector('#sort-items-due').value;\nconst PRIORITY = document.querySelector('#sort-items-priority').value;\n\nSORT.addEventListener('change', (e) => {\n  sortSwitch(e);\n});\n\nfunction compareCreationDate( a, b ){\n  if (JSON.parse(a[1]).createdAt < JSON.parse(b[1]).createdAt){\n    return -1;\n  } else if (JSON.parse(a[1]).createdAt > JSON.parse(b[1]).createdAt){\n    return 1;\n  } else {\n    return 0;\n  };\n}\n\nfunction compareDueDate ( a, b ) {\n  if (JSON.parse(a[1]).dueDate < JSON.parse(b[1]).dueDate){\n    return -1;\n  } else if (JSON.parse(a[1]).dueDate > JSON.parse(b[1]).dueDate){\n    return 1;\n  } else {\n    return 0;\n  };\n}\n\nfunction comparePriority ( a, b ) {\n\n  // Assign a numerical value to priorities to sort them\n  let priorityMap = (whichArray) => {\n    if (JSON.parse(whichArray[1]).priority == 'high'){\n      return 1;\n    } else if (JSON.parse(whichArray[1]).priority == 'medium') {\n      return 2;\n    } else if (JSON.parse(whichArray[1]).priority == 'low') {\n      return 3;\n    };\n  } \n  \n\n  if (priorityMap(a) < priorityMap(b)){\n    return -1;\n  } else if (priorityMap(a) > priorityMap(b)){\n    return 1;\n  } else {\n    return 0;\n  }\n}\n\nfunction refreshEverything () {\n  (0,_render_tasks__WEBPACK_IMPORTED_MODULE_1__.pureRender)();\n  (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.refreshTruncate)();\n  (0,_render_tasks__WEBPACK_IMPORTED_MODULE_1__.updateAllButtons)();\n}\n\nfunction sortSwitch (e) {\n  switch(e.target.value){\n    case DEFAULT : \n    // sort\n    (0,___WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n    refreshEverything();\n    break;\n\n    case DATE_CREATED : \n    // sort\n    allTasks.sort(compareCreationDate)\n    refreshEverything();\n    break;\n\n    case DUE_DATE : \n    // sort\n    allTasks.sort(compareDueDate)\n    refreshEverything();\n    break;\n\n    case PRIORITY :\n    // sort\n    allTasks.sort(comparePriority)\n    // allTasks.reverse();\n    refreshEverything();\n  }\n}\n\nfunction clickSwitch() {\n  // Get the sort filter\n  let currentSortFilter = SORT.options[SORT.selectedIndex].value;\n  switch(currentSortFilter){\n    case DEFAULT : \n    // sort\n    (0,___WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n    refreshEverything();\n    break;\n\n    case DATE_CREATED : \n    // sort\n    allTasks.sort(compareCreationDate)\n    refreshEverything();\n    break;\n\n    case DUE_DATE : \n    // sort\n    allTasks.sort(compareDueDate)\n    refreshEverything();\n    break;\n\n    case PRIORITY :\n    // sort\n    allTasks.sort(comparePriority)\n    // allTasks.reverse();\n    refreshEverything();\n  }\n}\n\n//# sourceURL=webpack://to-do-list-top/./src/sort.js?");

/***/ }),

/***/ "./src/truncate.js":
/*!*************************!*\
  !*** ./src/truncate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkTruncation: () => (/* binding */ checkTruncation),\n/* harmony export */   refreshTruncate: () => (/* binding */ refreshTruncate),\n/* harmony export */   toDones: () => (/* binding */ toDones),\n/* harmony export */   toDos: () => (/* binding */ toDos)\n/* harmony export */ });\nconst truncateBtn = document.querySelector('.truncate');\n\nlet chevron = document.querySelector('.shrink-controller', ':before');\n\nlet toDoList = document.getElementById('to-dos');\nlet toDoneList = document.getElementById('to-dones');\n\nlet toDos;\nlet toDones;\n\n\nfunction refreshTruncate () {\n  \n  toDos = toDoList.querySelectorAll('.todo-item');\n  toDones = toDoneList.querySelectorAll('.todo-item');\n\n  checkTruncation();\n\n};\n\ntruncateBtn.addEventListener(\"click\", () => {\n  refreshTruncate();\n})\n\nfunction checkTruncation () {\n  if (toDos.length > 2){\n    toDos[2].classList.add('shrink-controller')\n    for (let i = 2; i < toDos.length; i += 1){\n      toDos[i].classList.add('shrink')\n    }\n  }\n\n  if (toDones.length > 2){\n    toDones[2].classList.add('shrink-controller')\n    for (let i = 2; i < toDones.length; i += 1){\n      toDones[i].classList.add('shrink')\n    }\n  }\n}\n\n//# sourceURL=webpack://to-do-list-top/./src/truncate.js?");

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