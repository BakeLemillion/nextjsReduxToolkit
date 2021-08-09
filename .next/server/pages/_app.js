(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store/store */ "./redux/store/store.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\bbaur\\Desktop\\brodata\\nextjs-blog\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // This default export is required in a new `pages/_app.js` file.

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (_redux_store_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(MyApp));

/***/ }),

/***/ "./redux/store/store.js":
/*!******************************!*\
  !*** ./redux/store/store.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toolkit_toolkitSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolkit/toolkitSlice */ "./redux/toolkit/toolkitSlice.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const rootRedusers = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  [_toolkit_toolkitSlice__WEBPACK_IMPORTED_MODULE_1__.default.name]: _toolkit_toolkitSlice__WEBPACK_IMPORTED_MODULE_1__.default.reducer
});

const makeStore = () => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer
});

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootRedusers(state, action);
  }
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./redux/toolkit/toolkitSlice.js":
/*!***************************************!*\
  !*** ./redux/toolkit/toolkitSlice.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": function() { return /* binding */ increment; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["asd", "123123"]
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    }

  },
  extraReducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return _objectSpread(_objectSpread({}, state), action.payload.some);
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (slice);
const {
  increment
} = slice.actions;

/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcmVkdXgvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3JlZHV4L3Rvb2xraXQvdG9vbGtpdFNsaWNlLmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJyb290UmVkdXNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJzbGljZSIsInJlZHVjZXIiLCJtYWtlU3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiY291bnQiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ0b2RvcyIsInJlZHVjZXJzIiwiaW5jcmVtZW50IiwiZXh0cmFSZWR1Y2VycyIsImNvbnNvbGUiLCJsb2ciLCJzb21lIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3JDLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBRUQsK0RBQWVDLGlFQUFBLENBQWtCSCxLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1JLFlBQVksR0FBR0Msc0RBQWUsQ0FBQztBQUNqQyxHQUFDQywrREFBRCxHQUFjQSxrRUFBYUM7QUFETSxDQUFELENBQXBDOztBQUlBLE1BQU1DLFNBQVMsR0FBRyxNQUNkQyxnRUFBYyxDQUFDO0FBQ1hGO0FBRFcsQ0FBRCxDQURsQjs7QUFLTyxNQUFNQSxPQUFPLEdBQUcsQ0FBQ0csS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3RDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsdURBQXBCLEVBQTZCO0FBQ3pCLFVBQU1DLFNBQVMsbUNBQ1JKLEtBRFEsR0FFUkMsTUFBTSxDQUFDSSxPQUZDLENBQWY7O0FBSUEsUUFBSUwsS0FBSyxDQUFDTSxLQUFWLEVBQWlCRixTQUFTLENBQUNFLEtBQVYsR0FBa0JOLEtBQUssQ0FBQ00sS0FBeEI7QUFDakIsV0FBT0YsU0FBUDtBQUNILEdBUEQsTUFPTztBQUNILFdBQU9WLFlBQVksQ0FBQ00sS0FBRCxFQUFRQyxNQUFSLENBQW5CO0FBQ0g7QUFDSixDQVhNO0FBYUEsTUFBTVIsT0FBTyxHQUFHYyxpRUFBYSxDQUFDVCxTQUFELEVBQVk7QUFBRVUsT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJQO0FBQ0E7QUFFQSxNQUFNWixLQUFLLEdBQUdhLDZEQUFXLENBQUM7QUFDdEJDLE1BQUksRUFBRSxTQURnQjtBQUV0QkMsY0FBWSxFQUFFO0FBQ1ZMLFNBQUssRUFBRSxDQURHO0FBRVZNLFNBQUssRUFBRSxDQUFDLEtBQUQsRUFBUSxRQUFSO0FBRkcsR0FGUTtBQU10QkMsVUFBUSxFQUFFO0FBQ05DLGFBQVMsQ0FBQ2QsS0FBRCxFQUFRO0FBQ2JBLFdBQUssQ0FBQ00sS0FBTixHQUFjTixLQUFLLENBQUNNLEtBQU4sR0FBYyxDQUE1QjtBQUNIOztBQUhLLEdBTlk7QUFXdEJTLGVBQWEsRUFBRTtBQUNYLEtBQUNaLHVEQUFELEdBQVcsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzFCZSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCakIsS0FBdkIsRUFBOEJDLE1BQU0sQ0FBQ0ksT0FBckM7QUFDQSw2Q0FDT0wsS0FEUCxHQUVPQyxNQUFNLENBQUNJLE9BQVAsQ0FBZWEsSUFGdEI7QUFJSDtBQVBVO0FBWE8sQ0FBRCxDQUF6QjtBQXNCQSwrREFBZXRCLEtBQWY7QUFDTyxNQUFNO0FBQUVrQjtBQUFGLElBQWdCbEIsS0FBSyxDQUFDdUIsT0FBNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJQLDhDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL2luZGV4LmNzcydcclxuXHJcbi8vIFRoaXMgZGVmYXVsdCBleHBvcnQgaXMgcmVxdWlyZWQgaW4gYSBuZXcgYHBhZ2VzL19hcHAuanNgIGZpbGUuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApOyIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjcmVhdGVTbGljZSwgVGh1bmtBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHNsaWNlIGZyb20gXCIuLi90b29sa2l0L3Rvb2xraXRTbGljZVwiXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBBY3Rpb24sIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVzZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIFtzbGljZS5uYW1lXTogc2xpY2UucmVkdWNlcixcclxufSk7XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxyXG4gICAgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgICAgIHJlZHVjZXJcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnRcclxuICAgICAgICByZXR1cm4gbmV4dFN0YXRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByb290UmVkdXNlcnMoc3RhdGUsIGFjdGlvbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTsiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5jb25zdCBzbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidG9vbGtpdFwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgdG9kb3M6IFtcImFzZFwiLCBcIjEyMzEyM1wiXVxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5jcmVtZW50KHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQgKyAxXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICBbSFlEUkFURV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuc29tZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNlXHJcbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCB9ID0gc2xpY2UuYWN0aW9ucyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==