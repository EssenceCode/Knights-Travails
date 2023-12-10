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
    
            console.log((0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__["default"])(randomNum, randomNum2));
    
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

    reversePrint(pathway)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQSx3QkFBd0IsNERBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDREQUFXO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBLHNDQUFzQyx1QkFBdUI7QUFDN0Q7QUFDQTs7QUFFZTtBQUNmLDhCQUE4QixVQUFVO0FBQ3hDLG9DQUFvQyxVQUFVOztBQUU5QztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pRDs7QUFFakQ7QUFDQSxZQUFZLGtFQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9tb2R1bGVzL2tuaWdodC1kcml2ZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9tb2R1bGVzL2tuaWdodC10cmF2YWlscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS25pZ2h0TW92ZXMgZnJvbSBcIi4va25pZ2h0LXRyYXZhaWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtuaWdodFRlc3QoeCwgeSwgbWF4VGltZSA9IDgpIHtcbiAgICBcbiAgICBsZXQgY291bnRlciA9IDA7XG4gIFxuICAgIGlmKCFBcnJheS5pc0FycmF5KHgpICYmICFBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICAgIHdoaWxlKGNvdW50ZXIgPCBtYXhUaW1lKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU51bSA9IEFycmF5LmZyb20oe2xlbmd0aDogMn0sICgpPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCkpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtMiA9IEFycmF5LmZyb20oe2xlbmd0aDogMn0sICgpPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCkpO1xuICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coS25pZ2h0TW92ZXMocmFuZG9tTnVtLCByYW5kb21OdW0yKSk7XG4gICAgXG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBcbiAgIFxuICAgIHJldHVybiBLbmlnaHRNb3Zlcyh4LCB5KTtcbn07IiwiZnVuY3Rpb24gcmV2ZXJzZVByaW50KGFycikge1xuXG4gICAgY29uc3QgcmV2ZXJzZUFyciA9IGFyci5yZXZlcnNlKCkgICAgXG4gICAgY29uc29sZS5sb2coYCA9PiBZb3UgbWFkZSBpdCBpbiAke3JldmVyc2VBcnIubGVuZ3RoIC0gMX0gbW92ZXMhICBIZXJlJ3MgeW91ciBwYXRoOmApXG4gICAgcmV2ZXJzZUFyci5mb3JFYWNoKCh2YWwpID0+IGNvbnNvbGUubG9nKHZhbCkpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLbmlnaHRNb3ZlcyhzdGFydFBvcywgZW5kUG9zKSB7XG4gICAgY29uc3QgYm9hcmQgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDh9LCAoKSA9PiBBcnJheSg4KS5maWxsKGZhbHNlKSk7XG4gICAgY29uc3Qga25pZ2h0c1BhdGggPSBBcnJheS5mcm9tKHtsZW5ndGg6IDh9LCAoKSA9PiBBcnJheSg4KS5maWxsKG51bGwpKTtcblxuICAgIGNvbnN0IGRpclggPSBbMiwgMiwgLSAyLCAtIDIsIDEsIC0gMSwgMSwgLSAxXTtcbiAgICBjb25zdCBkaXJZID0gWzEsIC0gMSwgMSwgLSAxLCAyLCAyLCAtIDIsIC0gMiBdO1xuXG4gICAgY29uc3QgcXVldWUgPSBbc3RhcnRQb3NdO1xuXG4gICAgYm9hcmRbc3RhcnRQb3NbMF1dW3N0YXJ0UG9zWzFdXSA9IHRydWU7XG5cbiAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb3ZlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIFxuICAgICAgICBpZihjdXJyZW50TW92ZVswXSA9PT0gZW5kUG9zWzBdICYmIGN1cnJlbnRNb3ZlWzFdID09PSBlbmRQb3NbMV0pIGJyZWFrO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IGN1cnJlbnRNb3ZlWzBdO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50TW92ZVsxXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtuaWdodHNQYXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHJvdyArIGRpclhbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdDb2wgPSBjb2wgKyBkaXJZW2ldO1xuXG4gICAgICAgICAgICBpZihuZXdSb3cgPj0gMCAmJiBuZXdDb2wgPj0gMCAmJiBuZXdSb3cgPD0gNyAmJiBuZXdDb2wgPD0gNyAmJiBib2FyZFtuZXdSb3ddW25ld0NvbF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcblxuICAgICAgICAgICAgICAgIGJvYXJkW25ld1Jvd11bbmV3Q29sXSA9IHRydWU7XG4gICAgICAgICAgICAgICAga25pZ2h0c1BhdGhbbmV3Um93XVtuZXdDb2xdID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIH07ICBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGxldCBtb3ZlSW5kZXggPSBlbmRQb3M7XG4gICAgY29uc3QgcGF0aHdheSA9IFtdO1xuXG4gICAgd2hpbGUobW92ZUluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIFxuICAgICAgICBwYXRod2F5LnB1c2gobW92ZUluZGV4KVxuICAgICAgICBtb3ZlSW5kZXggPSBrbmlnaHRzUGF0aFttb3ZlSW5kZXhbMF1dW21vdmVJbmRleFsxXV07XG4gICAgfTtcblxuICAgIHJldmVyc2VQcmludChwYXRod2F5KVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBrbmlnaHRUZXN0IGZyb20gXCIuL21vZHVsZXMva25pZ2h0LWRyaXZlclwiO1xuXG4gIFxuY29uc29sZS5sb2coa25pZ2h0VGVzdCgpKSAgICBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==