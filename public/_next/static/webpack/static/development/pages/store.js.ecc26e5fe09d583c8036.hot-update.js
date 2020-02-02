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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Develop Work\\onen\\comps\\slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function slider(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      i = _useState[0],
      setI = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      x = _useState2[0],
      setX = _useState2[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      var n = i - 1;
      if (n < 0) n = data.length - 1;
      setI(n);
      setX(n * -100);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "bt-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      var n = i + 1;
      if (n >= data.length) n = 0;
      setI(n);
      setX(n * -100);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "bt-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "slider-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, data && data.map(function (each, idx) {
    return __jsx("div", {
      key: 'slide' + idx,
      style: {
        left: idx * 100 + '%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1723058888", [x]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1723058888",
    dynamic: [x],
    __self: this
  }, ".bt-arrow.__jsx-style-dynamic-selector{padding:20px;cursor:pointer;}.arrow.__jsx-style-dynamic-selector{position:absolute;top:50%;z-index:9;margin-top:-30px;width:60px;height:60px;border-top:2px solid #FF7575;}.arrow.left.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;left:3%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.arrow.right.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;right:3%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUd1QixBQUlHLEFBU1ksQUFLQyxBQU1uQixBQUtPLEFBR0QsQUFNRixBQUdnQixZQWhCZCxDQXhCRCxHQXNDbEIsRUFsQ1MsQUE0QkYsQ0FIUCxLQUlZLEVBNUJELEVBSlQsRUFZTyxBQVlRLENBUFAsSUFnQkMsQ0E1Qk8sRUFTbkIsRUFLQSxLQWVDLENBVEEsT0FuQlksV0FDQyxZQUNpQiw2QkFDOUIsWUErQnNELE9BckJ0RCxDQUxBLGdLQTJCQSIsImZpbGUiOiJEOlxcRGV2ZWxvcCBXb3JrXFxvbmVuXFxjb21wc1xcc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZXIoe2RhdGF9KSB7XHJcbiAgY29uc3QgW2ksIHNldEldID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbeCwgc2V0WF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidC1hcnJvd1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGktMTtcclxuICAgICAgICBpZihuPDApIG4gPSBkYXRhLmxlbmd0aC0xO1xyXG4gICAgICAgIHNldEkobilcclxuICAgICAgICBzZXRYKG4gKiAtMTAwKVxyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0LWFycm93XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGxldCBuID0gaSsxO1xyXG4gICAgICAgIGlmKG4+PWRhdGEubGVuZ3RoKSBuID0gMDtcclxuICAgICAgICBzZXRJKG4pXHJcbiAgICAgICAgc2V0WChuICogLTEwMClcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyByaWdodFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItd3JhcFwiPlxyXG4gICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgoZWFjaCwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9eydzbGlkZScraWR4fSBjbGFzc05hbWU9XCJzbGlkZVwiIHN0eWxlPXt7bGVmdDppZHgqMTAwKyclJ319ID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtlYWNofS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5idC1hcnJvd3tcclxuICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgLmFycm93IHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICBtYXJnaW4tdG9wOi0zMHB4O1xyXG4gICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgfVxyXG4gICAgICAuYXJyb3cubGVmdCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgbGVmdDozJTtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcclxuICAgICAgfVxyXG4gICAgICAuYXJyb3cucmlnaHQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICByaWdodDozJTtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpZGVyIHtcclxuICAgICAgICBtYXJnaW46MzZweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGV7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlci13cmFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7eH0lKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.ecc26e5fe09d583c8036.hot-update.js.map