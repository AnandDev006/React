
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
require('D:/DANGER/GitHub/React/Uber/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/button */ "baseui/button");
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_button__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\DANGER\\GitHub\\React\\Uber\\src\\pages\\home.js";



const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  overrides: {
    BaseButton: {
      style: ({
        $theme
      }) => ({
        color: $theme.colors.negative
      })
    }
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Hi");

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.e8d89296fa5f095fbdbf.hot-update.js.map