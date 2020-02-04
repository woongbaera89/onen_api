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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "slider",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "bt-arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "arrow ",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "bt-arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "arrow ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "slider-wrap",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "dd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("img", {
      src: each.replace(".jpg", "_m.jpg"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1333882147", [x]]]) + " " + "mm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1333882147",
    dynamic: [x],
    __self: this
  }, ".bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-50px;width:100px;height:100px;padding:20px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:60px;height:60px;border-top:2px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{width:auto;height:100%;}.slide.__jsx-style-dynamic-selector{text-align:center;position:absolute;top:0;width:100%;height:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){.slider.__jsx-style-dynamic-selector{margin:18px;}.bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-20px;width:40px;height:40px;padding:10px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:20px;height:20px;border-top:1px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:1px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:1px solid #FF7575;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUd5QixBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsQUFJckIsQUFLQSxBQUlNLEFBUUYsQUFHZ0IsQUFNbEIsQUFHRyxBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsUUFwRWpDLEFBMkRBLENBcERBLEFBMkRBLEVBeEVjLEFBeUJELEFBa0NDLENBdkNJLEFBMEJqQixHQXhEbUIsQUEyREEsQ0FackIsRUFSbUIsS0E1QmEsQUF5QmhDLEFBa0NnQyxPQW5EOUIsQUFZZSxBQStDZixDQXBEQSxBQTJEQSxFQXBGUyxBQTJEQSxHQXBCSixLQXRDTSxBQTJEQSxDQXBCRCxJQVRaLEtBN0JvQixBQTJEQSxDQWxEbEIsQUEyREEsQ0E3QlcsWUFDRixHQXZDSSxBQTJERCxPQW5CZCxJQW9CZSxDQTNEQyxXQTREQSxFQTNEQSxBQWlCZCxBQTJEQSxFQWxFQSxBQTJEQSxTQVRBLEVBM0RBLFdBMkNvRCx3S0FDdEQiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXHNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVyKHtkYXRhfSkge1xyXG4gIGNvbnN0IFtpLCBzZXRJXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnQtYXJyb3cgbGVmdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGktMTtcclxuICAgICAgICBpZihuPDApIG4gPSBkYXRhLmxlbmd0aC0xO1xyXG4gICAgICAgIHNldEkobilcclxuICAgICAgICBzZXRYKG4gKiAtMTAwKVxyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidC1hcnJvdyByaWdodFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGkrMTtcclxuICAgICAgICBpZihuPj1kYXRhLmxlbmd0aCkgbiA9IDA7XHJcbiAgICAgICAgc2V0SShuKVxyXG4gICAgICAgIHNldFgobiAqIC0xMDApXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci13cmFwXCI+XHJcbiAgICAgIHtkYXRhICYmIGRhdGEubWFwKChlYWNoLCBpZHgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17J3NsaWRlJytpZHh9IGNsYXNzTmFtZT1cInNsaWRlXCIgc3R5bGU9e3tsZWZ0OmlkeCoxMDArJyUnfX0gPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZFwiIHNyYz17ZWFjaH0vPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbVwiIHNyYz17ZWFjaC5yZXBsYWNlKFwiLmpwZ1wiLCBcIl9tLmpwZ1wiKX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYnQtYXJyb3d7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93ID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0IHtcclxuICAgICAgICAgIGxlZnQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LmxlZnQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCB7XHJcbiAgICAgICAgICByaWdodDoxJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCA+IGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgbWFyZ2luOjM2cHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogYXV0bzsgXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGVyLXdyYXB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHt4fSUpO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpICB7XHJcblxyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgbWFyZ2luOjE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvd3tcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgei1pbmRleDo5O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDotMjBweDtcclxuICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93ID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0IHtcclxuICAgICAgICAgIGxlZnQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LmxlZnQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCB7XHJcbiAgICAgICAgICByaWdodDoxJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCA+IGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.a05db6eb8a075f88901c.hot-update.js.map