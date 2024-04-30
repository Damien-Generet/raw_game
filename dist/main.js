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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\nvar apiRawg = \"3723143257c14de4a3334afc67a98153\";\nconsole.log(\"Hello World!\");\nvar searchBar = document.getElementById(\"searchBar\");\nvar research = document.getElementById(\"research\");\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  console.log(_routes__WEBPACK_IMPORTED_MODULE_0__.routes);\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _routes__WEBPACK_IMPORTED_MODULE_0__.routes[pageName];\n  console.log(pageFunction);\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\nsearchBar.addEventListener('submit', function () {\n  console.log(searchBar.value);\n  window.location.assign(\"\".concat(window.location) + \"/\" + \"\".concat(research.value));\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/pagedetail.js":
/*!***************************!*\
  !*** ./src/pagedetail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageDetail: () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar apiRawg = \"3723143257c14de4a3334afc67a98153\";\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(apiRawg)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-detail\\\">\\n          <div class=\\\"article\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <p class=\\\"description\\\"></p>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pagedetail.js?");

/***/ }),

/***/ "./src/pagelist.js":
/*!*************************!*\
  !*** ./src/pagelist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar apiRawg = \"3723143257c14de4a3334afc67a98153\";\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    console.log(cleanedArgument);\n    var displayResults = function displayResults(articles, publishers) {\n      var iMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      var iMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 9;\n      var showMoreBtn = document.getElementById(\"show-more__btn\");\n      var resultsContent = [];\n      console.log(articles);\n      console.log(publishers);\n      var generateHTML = function generateHTML(article) {\n        var genreNames = article.genres.map(function (genre) {\n          return genre.name;\n        }); //recuperation of all genre of the game\n        // const publisherLoop = publishers.forEach(publisher => {\n        //     publisher.games.forEach(game => {\n        //   if(game.name == article.name){\n        //     return publisher\n        //   }\n        // });\n        // });\n\n        var findPublisher = function findPublisher(article) {\n          var _iterator = _createForOfIteratorHelper(publishers),\n            _step;\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var _publisher = _step.value;\n              var publisherGame = _publisher.games.find(function (game) {\n                return game.name === article.name;\n              });\n              if (publisherGame) {\n                return _publisher;\n              }\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n          return null;\n        };\n        var publisher = findPublisher(article);\n        console.log(publisher);\n        // const publisher = publisherLoop(article);\n        return \"\\n          <div class=\\\"col cardGame\\\">\\n            <div class=\\\"card\\\">\\n              <div class=\\\"default-view\\\">\\n                <div style=\\\"background-image: url('\".concat(article.background_image, \"')\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n                </div>\\n                <div class=\\\"card-body\\\">\\n                    <h5 class=\\\"card-title\\\">\").concat(article.name, \"</h5>\\n                    <icon></icon>\\n                </div>\\n              </div> \\n              <div class=\\\"hover-view\\\">\\n                <div class=\\\"card-body\\\">\\n                  <h5 class=\\\"card-title\\\">\").concat(article.name, \"</h5>\\n                  <p>Date de sortie: \").concat(article.released, \"</p>\\n                  <p>\\xC9diteur: \").concat(publisher ? publisher.name : 'Inconnu', \"</p>\\n                  <p>Genre(s): \").concat(genreNames.join(', '), \"</p>\\n                  <p>Note: \").concat(article.rating, \"/10 (\").concat(article.ratings_count, \" votes)</p>\\n                </div>   \\n              </div>\\n            </div>\\n          </div>\");\n      };\n      var addNewResult = function addNewResult(article) {\n        var articleHTML = generateHTML(article);\n        resultsContent.push(articleHTML);\n      };\n      articles.slice(iMin, iMax).forEach(function (article) {\n        return addNewResult(article);\n      });\n      if (resultsContent.length > 18) {\n        console.log(\"coucou je suis 27\");\n        showMoreBtn.classList.add(\"toggle-display\");\n      } else {\n        showMoreBtn.classList.remove(\"toggle-display\");\n      }\n      //  resultsContent = articles.slice(iMin, iMax).map((article) => (\n\n      // ));\n      showMoreBtn.addEventListener('click', function () {\n        displayResults(articles, publishers, iMin, iMax + 9);\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      console.log(resultsContainer);\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n    var fetchList = function fetchList(url, argument, urlDev) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        fetch(urlDev).then(function (devResponse) {\n          return devResponse.json();\n        }).then(function (devResponse) {\n          displayResults(responseData.results, devResponse.results);\n        });\n      });\n      //   return responseData.results\n      // displayResults(responseData.results)\n    };\n    fetchList(\"https://api.rawg.io/api/games?&page_size=27&key=\".concat(apiRawg), cleanedArgument, \"https://api.rawg.io/api/publishers?&page_size=100&key=\".concat(apiRawg));\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <div class=\\\"page-list\\\">\\n          <div class=\\\"articles card-group row row-cols-md-3 g-4\\\">Loading...</div>\\n        </div>\\n      \";\n    preparePage();\n  };\n  console.log(\"LE RENDER\");\n  render();\n};\nconsole.log(\"fichier pagelist.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pagelist.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routes: () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _pagelist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagelist */ \"./src/pagelist.js\");\n/* harmony import */ var _pagedetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagedetail */ \"./src/pagedetail.js\");\n\n\nvar routes = {\n  'pagelist': _pagelist__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  'pagedetail': _pagedetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\nconsole.log(\"COUCOU LES AMIS\");\n\n//# sourceURL=webpack://my-webpack-project/./src/routes.js?");

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