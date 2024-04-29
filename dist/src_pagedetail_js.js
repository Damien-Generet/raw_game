/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_pagedetail_js"],{

/***/ "./src/pagedetail.js":
/*!***************************!*\
  !*** ./src/pagedetail.js ***!
  \***************************/
/***/ (() => {

eval("var PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(API_KEY)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-detail\\\">\\n          <div class=\\\"article\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <p class=\\\"description\\\"></p>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n  render();\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/pagedetail.js?");

/***/ })

}]);