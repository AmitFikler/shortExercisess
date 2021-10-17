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

/***/ "./app/helpers/math.js":
/*!*****************************!*\
  !*** ./app/helpers/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"divide\": () => (/* binding */ divide),\n/* harmony export */   \"equals\": () => (/* binding */ equals)\n/* harmony export */ });\nfunction add(n1, n2) {\r\n    return n1 + n2\r\n}\r\n\r\nfunction sub(n1,n2){\r\n    return n1-n2\r\n}\r\n\r\nfunction multiply(n1,n2){\r\n    return n1*n2\r\n}\r\n\r\nfunction divide(n1,n2){\r\n    return n1/n2\r\n}\r\n\r\n\r\nfunction equals(n1,n2,fallback){\r\n    return fallback(n1,n2)\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/math.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./app/styles.css\");\n/* harmony import */ var _helpers_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/math */ \"./app/helpers/math.js\");\n\r\n\r\n\r\n\r\nconst plusBtn = document.getElementsByName(\"plus\")[0]\r\nconst subBtn = document.getElementsByName(\"sub\")[0]\r\nconst multiplyBtn = document.getElementsByName(\"multiply\")[0]\r\nconst divideBtn = document.getElementsByName(\"divide\")[0]\r\nconst resultInput = document.querySelector(\"input\")\r\nconst equelsBtn = document.getElementsByName(\"equels\")[0]\r\nconst dot = document.getElementsByName(\"dot\")[0]\r\nconst sqrt = document.getElementsByName(\"sqrt\")[0]\r\nconst deleteBtn = document.getElementsByName(\"delete\")[0]\r\n\r\nsqrt.addEventListener(\"click\",()=>{\r\n    resultInput.value = Math.sqrt(resultInput.value) \r\n})\r\n\r\ndot.addEventListener(\"click\",()=>{\r\n    if (resultInput.value.includes(\".\") || resultInput.value.length === 0){\r\n        return;\r\n    } else {\r\n        resultInput.value += \".\"\r\n    }\r\n})\r\n\r\ndeleteBtn.addEventListener(\"click\", ()=>{\r\n    resultInput.value = \"\"\r\n})\r\n\r\nplusBtn.addEventListener(\"click\",()=>{\r\n    calcObj.n1 = Number(resultInput.value);\r\n    calcObj.action = _helpers_math__WEBPACK_IMPORTED_MODULE_1__.add;\r\n    resultInput.value = \"\"\r\n})\r\n\r\nequelsBtn.addEventListener(\"click\",()=>{\r\n    calcObj.n2 = Number(resultInput.value)\r\n    resultInput.value = (0,_helpers_math__WEBPACK_IMPORTED_MODULE_1__.equals)(calcObj.n1, calcObj.n2, calcObj.action)\r\n})\r\n\r\nsubBtn.addEventListener(\"click\",()=>{\r\n    calcObj.n1 = Number(resultInput.value);\r\n    calcObj.action = _helpers_math__WEBPACK_IMPORTED_MODULE_1__.sub;\r\n    resultInput.value = \"\"\r\n})\r\nmultiplyBtn.addEventListener(\"click\",()=>{\r\n    calcObj.n1 = Number(resultInput.value);\r\n    calcObj.action = _helpers_math__WEBPACK_IMPORTED_MODULE_1__.multiply;\r\n    resultInput.value = \"\"\r\n})\r\ndivideBtn.addEventListener(\"click\",()=>{\r\n    calcObj.n1 = Number(resultInput.value);\r\n    calcObj.action = _helpers_math__WEBPACK_IMPORTED_MODULE_1__.divide;\r\n    resultInput.value = \"\"\r\n})\r\n\r\ndocument.querySelectorAll(\".number\").forEach(number =>{\r\n    number.addEventListener(\"click\",pressNumber)\r\n})\r\n\r\nfunction pressNumber(e){\r\n    resultInput.value = resultInput.value + e.target.value\r\n}\r\n\r\nlet calcObj = {}\r\n\r\n\r\nif (resultInput.value === `666`) {\r\n    resultInput.style.color = \"red\"\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./app/styles.css":
/*!************************!*\
  !*** ./app/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calc/./app/styles.css?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;