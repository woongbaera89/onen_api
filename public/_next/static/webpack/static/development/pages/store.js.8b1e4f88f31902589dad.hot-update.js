webpackHotUpdate("static\\development\\pages\\store.js",{

/***/ "./comps/slider.js":
/*!*************************!*\
  !*** ./comps/slider.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Develop Work\\onen\\comps\\slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function slider(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      i = _useState[0],
      setI = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      x = _useState2[0],
      setX = _useState2[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("i"), i--;
      if (i < 0) i = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("i"), data.length - 1);
      setX(i * -100);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick() {
      Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("i"), i++;
      if (i >= data.length) i = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("i"), 0);
      setX(i * -100);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "slider-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, data && data.map(function (each, idx) {
    return __jsx("div", {
      key: 'slide' + idx,
      style: {
        left: idx * 100 + '%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1336203617",
    dynamic: [x],
    __self: this
  }, ".arrow.__jsx-style-dynamic-selector{position:absolute;top:50%;z-index:9;margin-top:-30px;width:60px;height:60px;border-top:2px solid #FF7575;cursor:pointer;}.arrow.left.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;left:3%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.arrow.right.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;right:3%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUcwQixBQVVZLEFBS0MsQUFNbkIsQUFLTyxBQUdELEFBTUYsQUFHZ0IsWUFoQmQsSUFjbkIsRUFuQ1MsQUE2QkYsQ0FIUCxLQUlZLEVBN0JELElBU0YsQUFZUSxDQVBQLElBZ0JDLENBN0JPLEVBVW5CLEVBS0EsS0FlQyxDQVRBLE9BcEJZLFdBQ0MsWUFDaUIsNkJBQ2QsWUFnQ3NDLEdBL0J0RCxJQVVBLENBTEEsZ0tBMkJBIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcih7ZGF0YX0pIHtcclxuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGxlZnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaS0tO1xyXG4gICAgICAgIGlmKGk8MCkgaSA9IGRhdGEubGVuZ3RoLTE7XHJcbiAgICAgICAgc2V0WChpICogLTEwMClcclxuICAgICAgfX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgcmlnaHRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICAgIGlmKGk+PWRhdGEubGVuZ3RoKSBpID0gMDtcclxuICAgICAgICBzZXRYKGkgKiAtMTAwKVxyXG4gICAgICB9fT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItd3JhcFwiPlxyXG4gICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgoZWFjaCwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9eydzbGlkZScraWR4fSBjbGFzc05hbWU9XCJzbGlkZVwiIHN0eWxlPXt7bGVmdDppZHgqMTAwKyclJ319ID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtlYWNofS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuYXJyb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgei1pbmRleDo5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgd2lkdGg6NjBweDtcclxuICAgICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgICBib3JkZXItdG9wOjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvdy5sZWZ0IHtcclxuICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICBsZWZ0OjMlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKVxyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvdy5yaWdodCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIHJpZ2h0OjMlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgIG1hcmdpbjozNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGVyLXdyYXB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHt4fSUpO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpICB7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.8b1e4f88f31902589dad.hot-update.js.map