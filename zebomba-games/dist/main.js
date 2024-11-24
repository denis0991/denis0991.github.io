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

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst backGroundBtn = document.querySelector('.background__btn');\r\nconst person = document.querySelector('.background__person');\r\n\r\nconst points = [\r\n    { x: \"444\", y: \"505\" },\r\n        { x: \"408\", y: \"476\" },\r\n        { x: \"388\", y: \"465\" },\r\n        { x: \"370\", y: \"466\" },\r\n        { x: \"350\", y: \"474\" },\r\n        { x: \"333\", y: \"486\" },\r\n        { x: \"317\", y: \"495\" },\r\n        { x: \"298\", y: \"507\" },\r\n        { x: \"276\", y: \"518\" },\r\n        { x: \"260\", y: \"527\" },\r\n        { x: \"235\", y: \"534\" },\r\n        { x: \"210\", y: \"537\" },\r\n        { x: \"190\", y: \"537\" },\r\n        { x: \"171\", y: \"536\" },\r\n        { x: \"148\", y: \"531\" },\r\n        { x: \"127\", y: \"520\" },\r\n        { x: \"111\", y: \"509\" },\r\n        { x: \"95\", y: \"501\" },\r\n        { x: \"84\", y: \"488\" },\r\n        { x: \"87\", y: \"468\" },\r\n        { x: \"121\", y: \"446\" }\r\n].map(point => ({ x: Number(point.x), y: Number(point.y) }));\r\n\r\nlet position = 0;\r\n\r\nlet currentIndex = 0;\r\n\r\nperson.style.left = `${points[0].x - 10}px`;\r\nperson.style.top = `${points[0].y - 69}px`;\r\n\r\nfunction animateMove(start, end, callback) {\r\nconst duration = 300; // Длительность анимации\r\nconst startTime = performance.now();\r\nfunction move(timestamp) {\r\nconst elapsed = timestamp - startTime;\r\nconst progress = Math.min(elapsed / duration, 1);\r\nconst currentX = start.x + (end.x - start.x) * progress - 10;\r\nconst currentY = start.y + (end.y - start.y) * progress - 69;\r\nperson.style.left = `${currentX}px`;\r\nperson.style.top = `${currentY}px`;\r\nif (progress < 1) {\r\n    requestAnimationFrame(move);\r\n} else if (callback) {\r\n    callback();\r\n}\r\n}\r\n    requestAnimationFrame(move);\r\n}\r\n\r\nfunction moveToNextPoints() {\r\n    let steps = 0;\r\n    backGroundBtn.removeEventListener('click', moveToNextPoints);\r\n    function moveNext() {\r\n        if (steps < 4 && currentIndex < points.length - 1) {\r\n            animateMove(points[currentIndex], points[currentIndex + 1], () => {\r\n                currentIndex++;\r\n                steps++;\r\n                moveNext();\r\n            });\r\n        } else {\r\n            setTimeout(() => {\r\n                backGroundBtn.addEventListener('click', moveToNextPoints);\r\n            }, 300);\r\n        }\r\n    }\r\n\r\n    moveNext();\r\n}\r\n\r\nbackGroundBtn.addEventListener('click', moveToNextPoints);\n\n//# sourceURL=webpack:///./src/animation.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\nconst data = {\r\n    \"rating\": [\r\n\t\t{\r\n\t\t\t\"id\": \"123\",\r\n\t\t\t\"name\": \"Владимир\",\r\n\t\t\t\"lastName\": \"Ларионов\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"463\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"9\",\r\n\t\t\t\"name\": \"Владимир\",\r\n\t\t\t\"lastName\": \"Сергеев\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"521\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"231\",\r\n\t\t\t\"name\": \"Вениамин\",\r\n\t\t\t\"lastName\": \"Васильев\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"865\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"321\",\r\n\t\t\t\"name\": \"Мария\",\r\n\t\t\t\"lastName\": \"Логинова\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"865\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"492\",\r\n\t\t\t\"name\": \"Борис\",\r\n\t\t\t\"lastName\": \"Казанцев\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"784\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"452\",\r\n\t\t\t\"name\": \"Полина\",\r\n\t\t\t\"lastName\": \"Калинина\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"225\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"796\",\r\n\t\t\t\"name\": \"Даниил\",\r\n\t\t\t\"lastName\": \"Воробьёв\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"642\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"4\",\r\n\t\t\t\"name\": \"Эрик\",\r\n\t\t\t\"lastName\": \"Аксёнов\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"150\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"1155\",\r\n\t\t\t\"name\": \"Иван\",\r\n\t\t\t\"lastName\": \"Иванов\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"100\"\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"12145\",\r\n\t\t\t\"name\": \"Артем\",\r\n\t\t\t\"lastName\": \"Алексеев\",\r\n\t\t\t\"img\": \"../assets/img/container-for-friend.png\",\r\n\t\t\t\"points\": \"1000\"\r\n\t\t}\r\n    ],\r\n    \"friends\": [\r\n        {\r\n            \"id\": \"9\",\r\n            \"name\": \"Владимир\",\r\n            \"lastName\": \"Сергеев\",\r\n            \"img\": \"./male.png\"\r\n        },\r\n        {\r\n            \"id\": \"4\",\r\n            \"name\": \"Эрик\",\r\n            \"lastName\": \"Аксёнов\",\r\n            \"img\": \"./male.png\"\r\n        },\r\n        {\r\n            \"id\": \"15411\",\r\n            \"name\": \"Ирина\",\r\n            \"lastName\": \"Чеснокова\",\r\n            \"img\": \"./female.png\"\r\n        },\r\n        {\r\n            \"id\": \"15564\",\r\n            \"name\": \"Дарина\",\r\n            \"lastName\": \"Боброва\",\r\n            \"img\": \"./female.png\"\r\n        }\r\n    ]\r\n}\r\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ \"./src/animation.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n/* harmony import */ var _raiting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raiting.js */ \"./src/raiting.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst overlay = document.querySelector('.overlay');\r\nconst modal = document.querySelector('.overlay__modal');\r\nconst closeIcon = document.querySelector('.overlay__close');\r\nconst playground = document.querySelector('.background__playground');\r\n\r\nplayground.addEventListener('click', ()=> {\r\n    overlay.classList.add('overlay_active');\r\n    modal.classList.add('overlay__modal_active');\r\n})\r\n\r\ncloseIcon.addEventListener('click', () => {\r\n    overlay.classList.remove('overlay_active');\r\n    modal.classList.remove('overlay__modal_active');\r\n})\r\n\r\ndocument.addEventListener('click', (e)=>{\r\n    if (e.target.classList.contains('overlay')) {\r\n        overlay.classList.remove('overlay_active');\r\n        modal.classList.remove('overlay__modal_active');\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/raiting.js":
/*!************************!*\
  !*** ./src/raiting.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\nconst tableString = document.querySelector('.overlay__table-string');\r\n\r\n\r\n\r\nfunction checkRatingInFriends(rating, friends) {\r\n    return rating.map(ratedUser  => {\r\n        const isInFriends = friends.some(friend => friend.id === ratedUser .id);\r\n        return {\r\n            ...ratedUser ,\r\n            isInFriends\r\n        };\r\n    });\r\n}\r\n\r\nconst result = checkRatingInFriends(_data_js__WEBPACK_IMPORTED_MODULE_0__.data.rating, _data_js__WEBPACK_IMPORTED_MODULE_0__.data.friends);\r\n\r\nresult.forEach((element, index) => {\r\n    const overlayTableString = document.createElement('div');\r\n    overlayTableString.className = 'overlay__table-string-item string-item';\r\n    const number = document.createElement('p');\r\n    number.className = 'string-item__number';\r\n    number.textContent = index + 1;\r\n    const imgContainer = document.createElement('div');\r\n    imgContainer.className = 'string-item__img-container';\r\n    const img = document.createElement('img');\r\n    img.className = 'string-item__img'\r\n    img.src = element.img\r\n    img.alt = \"person's-icon\"\r\n    imgContainer.appendChild(img);\r\n    const name = document.createElement('p');\r\n    name.textContent = `${element.name} ${element.lastName}`\r\n    if (element.isInFriends) {\r\n        name.className = 'string-item__name string-item__friends';\r\n    } else {\r\n        name.className = 'string-item__name';\r\n    }\r\n    const raiting = document.createElement('p');\r\n    raiting.className = 'string-item__raiting';\r\n    raiting.textContent = element.points\r\n    overlayTableString.append(number, imgContainer, name, raiting);\r\n    tableString.append(overlayTableString)\r\n});\n\n//# sourceURL=webpack:///./src/raiting.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst sliderMoving = document.querySelector('.slider__moving');\r\nconst sliderNext = document.querySelector('.slider__next');\r\nconst sliderBack = document.querySelector('.slider__back');\r\n\r\nlet currentIndex = 0;\r\nconst itemWidth = 50;\r\nconst gap = 11;\r\nconst totalWidth = itemWidth + gap;\r\n\r\nconst totalItems = sliderMoving.children.length;\r\nconst visibleItems = 8;\r\nconst maxIndex = totalItems - visibleItems;\r\n\r\nfunction updateButtons() {\r\n    sliderNext.disabled = currentIndex >= maxIndex;\r\n    sliderBack.disabled = currentIndex <= 0;\r\n}\r\n\r\nupdateButtons();\r\n\r\nsliderNext.addEventListener('click', () => {\r\n    if (currentIndex < maxIndex) {\r\n        currentIndex++;\r\n        sliderMoving.style.transform = `translateX(-${currentIndex * totalWidth}px)`;\r\n        updateButtons();\r\n    }\r\n});\r\n\r\nsliderBack.addEventListener('click', () => {\r\n    if (currentIndex > 0) {\r\n        currentIndex--;\r\n        sliderMoving.style.transform = `translateX(-${currentIndex * totalWidth}px)`;\r\n        updateButtons();\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;