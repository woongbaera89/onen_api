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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "slider",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "bt-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "arrow right",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "bt-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "slider-wrap",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1239630854", [x]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1239630854",
    dynamic: [x],
    __self: this
  }, ".bt-arrow.__jsx-style-dynamic-selector{padding:20px;cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-30px;width:100px;height:100px;padding:20px;}.arrow.__jsx-style-dynamic-selector{width:60px;height:60px;border-top:2px solid #FF7575;}.arrow.left.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;left:3%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.arrow.right.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;right:3%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUd1QixBQVdKLEFBS21CLEFBS0MsQUFNbkIsQUFLTyxBQUdELEFBTUYsQUFHZ0IsV0FoQ3BCLENBZ0JNLENBM0JELEdBeUNsQixFQU5PLENBSFAsSUFwQjhCLENBd0JsQixJQW5DUyxFQWVaLEFBWVEsQ0FQUCxJQWdCQyxHQW5CWixFQUtBLEtBZUMsQ0FwQ1csQUEyQlgsTUFoQkEsRUFWYSxVQUNPLGlCQUNMLFlBQ0MsYUFDQSxXQXFDc0MsRUFwQ3BELEtBZUYsQ0FMQSxnS0EyQkEiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXHNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVyKHtkYXRhfSkge1xyXG4gIGNvbnN0IFtpLCBzZXRJXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnQtYXJyb3dcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgbGV0IG4gPSBpLTE7XHJcbiAgICAgICAgaWYobjwwKSBuID0gZGF0YS5sZW5ndGgtMTtcclxuICAgICAgICBzZXRJKG4pXHJcbiAgICAgICAgc2V0WChuICogLTEwMClcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyByaWdodFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidC1hcnJvd1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGkrMTtcclxuICAgICAgICBpZihuPj1kYXRhLmxlbmd0aCkgbiA9IDA7XHJcbiAgICAgICAgc2V0SShuKVxyXG4gICAgICAgIHNldFgobiAqIC0xMDApXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgcmlnaHRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLXdyYXBcIj5cclxuICAgICAge2RhdGEgJiYgZGF0YS5tYXAoKGVhY2gsIGlkeCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXsnc2xpZGUnK2lkeH0gY2xhc3NOYW1lPVwic2xpZGVcIiBzdHlsZT17e2xlZnQ6aWR4KjEwMCsnJSd9fSA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZWFjaH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYnQtYXJyb3d7XHJcbiAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgd2lkdGg6NjBweDtcclxuICAgICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgICBib3JkZXItdG9wOjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvdy5sZWZ0IHtcclxuICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICBsZWZ0OjMlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKVxyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvdy5yaWdodCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIHJpZ2h0OjMlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgIG1hcmdpbjozNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGVyLXdyYXB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHt4fSUpO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpICB7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.bf79350dc8ca65e674c5.hot-update.js.map