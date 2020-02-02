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
      var n = i - 1;
      if (n < 0) n = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("n"), data.length - 1);
      setI(n);
      setX(n * -100);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick() {
      var n = i + 1;
      if (n >= data.length) n = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("n"), 0);
      setI(n);
      setX(n * -100);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]) + " " + "slider-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1336203617", [x]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1336203617",
    dynamic: [x],
    __self: this
  }, ".arrow.__jsx-style-dynamic-selector{position:absolute;top:50%;z-index:9;margin-top:-30px;width:60px;height:60px;border-top:2px solid #FF7575;cursor:pointer;}.arrow.left.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;left:3%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.arrow.right.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;right:3%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJrQixBQUcwQixBQVVZLEFBS0MsQUFNbkIsQUFLTyxBQUdELEFBTUYsQUFHZ0IsWUFoQmQsSUFjbkIsRUFuQ1MsQUE2QkYsQ0FIUCxLQUlZLEVBN0JELElBU0YsQUFZUSxDQVBQLElBZ0JDLENBN0JPLEVBVW5CLEVBS0EsS0FlQyxDQVRBLE9BcEJZLFdBQ0MsWUFDaUIsNkJBQ2QsWUFnQ3NDLEdBL0J0RCxJQVVBLENBTEEsZ0tBMkJBIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcih7ZGF0YX0pIHtcclxuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGxlZnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbiA9IGktMTtcclxuICAgICAgICBpZihuPDApIG4gPSBkYXRhLmxlbmd0aC0xO1xyXG4gICAgICAgIHNldEkobilcclxuICAgICAgICBzZXRYKG4gKiAtMTAwKVxyXG4gICAgICB9fT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyByaWdodFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb25zdCBuID0gaSsxO1xyXG4gICAgICAgIGlmKG4+PWRhdGEubGVuZ3RoKSBuID0gMDtcclxuICAgICAgICBzZXRJKG4pXHJcbiAgICAgICAgc2V0WChuICogLTEwMClcclxuICAgICAgfX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLXdyYXBcIj5cclxuICAgICAge2RhdGEgJiYgZGF0YS5tYXAoKGVhY2gsIGlkeCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXsnc2xpZGUnK2lkeH0gY2xhc3NOYW1lPVwic2xpZGVcIiBzdHlsZT17e2xlZnQ6aWR4KjEwMCsnJSd9fSA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZWFjaH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmFycm93IHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICBtYXJnaW4tdG9wOi0zMHB4O1xyXG4gICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuYXJyb3cubGVmdCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgbGVmdDozJTtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcclxuICAgICAgfVxyXG4gICAgICAuYXJyb3cucmlnaHQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICByaWdodDozJTtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpZGVyIHtcclxuICAgICAgICBtYXJnaW46MzZweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGV7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlci13cmFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7eH0lKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.4b47a853a7a2ee011874.hot-update.js.map