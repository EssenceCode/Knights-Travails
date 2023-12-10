/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/knight-driver.js":
/*!**************************************!*\
  !*** ./src/modules/knight-driver.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ knightTest)
/* harmony export */ });
/* harmony import */ var _knight_travails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight-travails */ "./src/modules/knight-travails.js");


function knightTest(x, y, maxTime = 8) {
    
    let counter = 0;
  
    if(!Array.isArray(x) && !Array.isArray(y)) {
        while(counter < maxTime) {
            
            const randomNum = Array.from({length: 2}, ()=> Math.floor(Math.random() * 8));
            const randomNum2 = Array.from({length: 2}, ()=> Math.floor(Math.random() * 8));
    
            const knightsTravail = (0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__["default"])(randomNum, randomNum2)

            console.log(knightsTravail);
    
            counter += 1;
        }
        
        return true;
    };

    
   
    return (0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
};

/***/ }),

/***/ "./src/modules/knight-travails.js":
/*!****************************************!*\
  !*** ./src/modules/knight-travails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnightMoves)
/* harmony export */ });
function reversePrint(arr) {

    const reverseArr = arr.reverse()
    console.log(`initial position: [${reverseArr[0]}] => destination: [${reverseArr[reverseArr.length - 1]}] `)    
    console.log(` => You made it in ${reverseArr.length - 1} moves!  Here's your path:`)
    reverseArr.forEach((val) => console.log(val))
};

function KnightMoves(startPos, endPos) {
    const board = Array.from({length: 8}, () => Array(8).fill(false));
    const knightsPath = Array.from({length: 8}, () => Array(8).fill(null));

    const dirX = [2, 2, - 2, - 2, 1, - 1, 1, - 1];
    const dirY = [1, - 1, 1, - 1, 2, 2, - 2, - 2 ];

    const queue = [startPos];

    board[startPos[0]][startPos[1]] = true;

    while(queue.length !== 0) {
        
        const currentMove = queue.shift();
      
        if(currentMove[0] === endPos[0] && currentMove[1] === endPos[1]) break;

        const row = currentMove[0];
        const col = currentMove[1];

        for (let i = 0; i < knightsPath.length; i += 1) {
            
            const newRow = row + dirX[i];
            const newCol = col + dirY[i];

            if(newRow >= 0 && newCol >= 0 && newRow <= 7 && newCol <= 7 && board[newRow][newCol] === false) {
                
                queue.push([newRow, newCol]);

                board[newRow][newCol] = true;
                knightsPath[newRow][newCol] = [row, col];
            };  
        };
        
    };

    let moveIndex = endPos;
    const pathway = [];

    while(moveIndex !== null) {
        
        pathway.push(moveIndex)
        moveIndex = knightsPath[moveIndex[0]][moveIndex[1]];
    };

    return reversePrint(pathway)
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_knight_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/knight-driver */ "./src/modules/knight-driver.js");


  
console.log((0,_modules_knight_driver__WEBPACK_IMPORTED_MODULE_0__["default"])())    

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQSxtQ0FBbUMsNERBQVc7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDREQUFXO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBLHNDQUFzQyxjQUFjLHFCQUFxQixrQ0FBa0M7QUFDM0csc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBOztBQUVlO0FBQ2YsOEJBQThCLFVBQVU7QUFDeEMsb0NBQW9DLFVBQVU7O0FBRTlDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlEOztBQUVqRDtBQUNBLFlBQVksa0VBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL21vZHVsZXMva25pZ2h0LWRyaXZlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL21vZHVsZXMva25pZ2h0LXRyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLbmlnaHRNb3ZlcyBmcm9tIFwiLi9rbmlnaHQtdHJhdmFpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga25pZ2h0VGVzdCh4LCB5LCBtYXhUaW1lID0gOCkge1xuICAgIFxuICAgIGxldCBjb3VudGVyID0gMDtcbiAgXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoeCkgJiYgIUFycmF5LmlzQXJyYXkoeSkpIHtcbiAgICAgICAgd2hpbGUoY291bnRlciA8IG1heFRpbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAyfSwgKCk9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21OdW0yID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAyfSwgKCk9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBrbmlnaHRzVHJhdmFpbCA9IEtuaWdodE1vdmVzKHJhbmRvbU51bSwgcmFuZG9tTnVtMilcblxuICAgICAgICAgICAgY29uc29sZS5sb2coa25pZ2h0c1RyYXZhaWwpO1xuICAgIFxuICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgXG4gICBcbiAgICByZXR1cm4gS25pZ2h0TW92ZXMoeCwgeSk7XG59OyIsImZ1bmN0aW9uIHJldmVyc2VQcmludChhcnIpIHtcblxuICAgIGNvbnN0IHJldmVyc2VBcnIgPSBhcnIucmV2ZXJzZSgpXG4gICAgY29uc29sZS5sb2coYGluaXRpYWwgcG9zaXRpb246IFske3JldmVyc2VBcnJbMF19XSA9PiBkZXN0aW5hdGlvbjogWyR7cmV2ZXJzZUFycltyZXZlcnNlQXJyLmxlbmd0aCAtIDFdfV0gYCkgICAgXG4gICAgY29uc29sZS5sb2coYCA9PiBZb3UgbWFkZSBpdCBpbiAke3JldmVyc2VBcnIubGVuZ3RoIC0gMX0gbW92ZXMhICBIZXJlJ3MgeW91ciBwYXRoOmApXG4gICAgcmV2ZXJzZUFyci5mb3JFYWNoKCh2YWwpID0+IGNvbnNvbGUubG9nKHZhbCkpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLbmlnaHRNb3ZlcyhzdGFydFBvcywgZW5kUG9zKSB7XG4gICAgY29uc3QgYm9hcmQgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDh9LCAoKSA9PiBBcnJheSg4KS5maWxsKGZhbHNlKSk7XG4gICAgY29uc3Qga25pZ2h0c1BhdGggPSBBcnJheS5mcm9tKHtsZW5ndGg6IDh9LCAoKSA9PiBBcnJheSg4KS5maWxsKG51bGwpKTtcblxuICAgIGNvbnN0IGRpclggPSBbMiwgMiwgLSAyLCAtIDIsIDEsIC0gMSwgMSwgLSAxXTtcbiAgICBjb25zdCBkaXJZID0gWzEsIC0gMSwgMSwgLSAxLCAyLCAyLCAtIDIsIC0gMiBdO1xuXG4gICAgY29uc3QgcXVldWUgPSBbc3RhcnRQb3NdO1xuXG4gICAgYm9hcmRbc3RhcnRQb3NbMF1dW3N0YXJ0UG9zWzFdXSA9IHRydWU7XG5cbiAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb3ZlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIFxuICAgICAgICBpZihjdXJyZW50TW92ZVswXSA9PT0gZW5kUG9zWzBdICYmIGN1cnJlbnRNb3ZlWzFdID09PSBlbmRQb3NbMV0pIGJyZWFrO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IGN1cnJlbnRNb3ZlWzBdO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50TW92ZVsxXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtuaWdodHNQYXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHJvdyArIGRpclhbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdDb2wgPSBjb2wgKyBkaXJZW2ldO1xuXG4gICAgICAgICAgICBpZihuZXdSb3cgPj0gMCAmJiBuZXdDb2wgPj0gMCAmJiBuZXdSb3cgPD0gNyAmJiBuZXdDb2wgPD0gNyAmJiBib2FyZFtuZXdSb3ddW25ld0NvbF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcblxuICAgICAgICAgICAgICAgIGJvYXJkW25ld1Jvd11bbmV3Q29sXSA9IHRydWU7XG4gICAgICAgICAgICAgICAga25pZ2h0c1BhdGhbbmV3Um93XVtuZXdDb2xdID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIH07ICBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGxldCBtb3ZlSW5kZXggPSBlbmRQb3M7XG4gICAgY29uc3QgcGF0aHdheSA9IFtdO1xuXG4gICAgd2hpbGUobW92ZUluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIFxuICAgICAgICBwYXRod2F5LnB1c2gobW92ZUluZGV4KVxuICAgICAgICBtb3ZlSW5kZXggPSBrbmlnaHRzUGF0aFttb3ZlSW5kZXhbMF1dW21vdmVJbmRleFsxXV07XG4gICAgfTtcblxuICAgIHJldHVybiByZXZlcnNlUHJpbnQocGF0aHdheSlcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQga25pZ2h0VGVzdCBmcm9tIFwiLi9tb2R1bGVzL2tuaWdodC1kcml2ZXJcIjtcblxuICBcbmNvbnNvbGUubG9nKGtuaWdodFRlc3QoKSkgICAgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=