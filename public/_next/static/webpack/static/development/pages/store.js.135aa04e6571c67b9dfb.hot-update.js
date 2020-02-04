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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "slider",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "bt-arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "arrow ",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "bt-arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "arrow ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "slider-wrap",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "dd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("img", {
      src: each.replace(".jpg", "_m.jpg"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["397115170", [x]]]) + " " + "mm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "397115170",
    dynamic: [x],
    __self: this
  }, ".bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-50px;width:100px;height:100px;padding:20px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:60px;height:60px;border-top:2px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{width:auto;height:100%;}.slide.__jsx-style-dynamic-selector{text-align:center;position:absolute;top:0;width:100%;height:100%;z-index:1;overflow:hidden;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slide.__jsx-style-dynamic-selector:first-child img.__jsx-style-dynamic-selector{height:auto;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){.slider.__jsx-style-dynamic-selector{margin:18px;}.bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-20px;width:40px;height:40px;padding:10px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:20px;height:20px;border-top:1px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:1px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:1px solid #FF7575;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUd5QixBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsQUFJckIsQUFLQSxBQUlNLEFBU0YsQUFHSixBQUdvQixBQU1sQixBQUdHLEFBVUosQUFLSCxBQUlzQixBQUdyQixBQUlzQixRQXhFakMsQUErREEsQ0F4REEsQUErREEsRUE1RWMsQUF5QkQsQUFzQ0MsQ0EzQ0ksQUFxQm5CLEFBU0UsR0E1RG1CLEFBK0RBLENBZnJCLEVBVG1CLEtBNUJhLEFBeUJoQyxBQXNDZ0MsT0F2RDlCLEFBWWUsQUFtRGYsQ0F4REEsQUErREEsRUF4RlMsQUErREEsR0F4QkosS0F0Q00sQUErREEsQ0F4QkQsSUFUWixLQTdCb0IsQUErREEsQ0F0RGxCLEFBK0RBLENBakNXLFlBQ0YsR0F2Q0ksQUErREQsT0F2QkcsSUF3QkYsQ0EvREMsV0F3Q2hCLEFBd0JnQixFQS9EQSxBQWlCZCxBQStEQSxFQXRFQSxBQStEQSxTQVRBLEVBL0RBLFdBK0NvRCx3S0FDdEQiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXHNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVyKHtkYXRhfSkge1xyXG4gIGNvbnN0IFtpLCBzZXRJXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnQtYXJyb3cgbGVmdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGktMTtcclxuICAgICAgICBpZihuPDApIG4gPSBkYXRhLmxlbmd0aC0xO1xyXG4gICAgICAgIHNldEkobilcclxuICAgICAgICBzZXRYKG4gKiAtMTAwKVxyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidC1hcnJvdyByaWdodFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGkrMTtcclxuICAgICAgICBpZihuPj1kYXRhLmxlbmd0aCkgbiA9IDA7XHJcbiAgICAgICAgc2V0SShuKVxyXG4gICAgICAgIHNldFgobiAqIC0xMDApXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci13cmFwXCI+XHJcbiAgICAgIHtkYXRhICYmIGRhdGEubWFwKChlYWNoLCBpZHgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17J3NsaWRlJytpZHh9IGNsYXNzTmFtZT1cInNsaWRlXCIgc3R5bGU9e3tsZWZ0OmlkeCoxMDArJyUnfX0gPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZFwiIHNyYz17ZWFjaH0vPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbVwiIHNyYz17ZWFjaC5yZXBsYWNlKFwiLmpwZ1wiLCBcIl9tLmpwZ1wiKX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYnQtYXJyb3d7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93ID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0IHtcclxuICAgICAgICAgIGxlZnQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LmxlZnQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCB7XHJcbiAgICAgICAgICByaWdodDoxJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCA+IGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgbWFyZ2luOjM2cHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogYXV0bzsgXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlOmZpcnN0LWNoaWxkIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlci13cmFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7eH0lKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG5cclxuICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgIG1hcmdpbjoxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3d7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTIwcHg7XHJcbiAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdyA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cubGVmdCB7XHJcbiAgICAgICAgICBsZWZ0OjElO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0ID4gZGl2IHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cucmlnaHQge1xyXG4gICAgICAgICAgcmlnaHQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cucmlnaHQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.135aa04e6571c67b9dfb.hot-update.js.map