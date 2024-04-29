/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_pagelist_js"],{

/***/ "./src/pagelist.js":
/*!*************************!*\
  !*** ./src/pagelist.js ***!
  \*************************/
/***/ (() => {

eval("var PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        return \"<article class=\\\"cardGame\\\">\\n            <h1>\".concat(article.name, \"</h1>\\n            <h2>\").concat(article.released, \"</h2>\\n            <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n          </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .card-games');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"articles\\\">Loading...</div>\\n        </section>\\n      \";\n    preparePage();\n  };\n  console.log(\"LE RENDEZ\");\n  render();\n};\nconsole.log('hfdiushgfjkdshbfgsdq');\n\n//# sourceURL=webpack://my-webpack-project/./src/pagelist.js?");

/***/ })

}]);