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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "slider",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "bt-arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "arrow ",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "bt-arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "arrow ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "slider-wrap",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1455917361", [x]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1455917361",
    dynamic: [x],
    __self: this
  }, ".bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-50px;width:100px;height:100px;padding:20px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:60px;height:60px;border-top:2px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){.slider.__jsx-style-dynamic-selector{margin:18px;}.bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-20px;width:40px;height:40px;padding:10px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:20px;height:20px;border-top:1px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:1px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:1px solid #FF7575;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUd5QixBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsQUFJckIsQUFLTyxBQUdELEFBTUYsQUFHZ0IsQUFNbEIsQUFHRyxBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsUUFqRWpDLEFBd0RBLENBakRBLEFBd0RBLEVBckVjLEFBd0RBLENBcENJLEFBdUJqQixHQXJEbUIsQUF3REEsQ0FackIsRUFOTyxDQUhQLElBeEJnQyxBQXdEQSxDQTVCcEIsTUFwQlYsQUFZZSxBQTRDZixDQWpEQSxBQXdEQSxFQWpGUyxBQXdEQSxFQWpCQSxNQXRDRSxBQXdEQSxJQWpCYixDQVRBLEtBN0JvQixBQXdEQSxDQS9DbEIsQUF3REEsZ0JBaEVhLEFBd0RELFdBQ0MsQ0F4REMsV0F5REEsRUF4REEsQUFpQmQsQUF3REEsRUEvREEsQUF3REEsU0FUQSxFQXhEQSxXQXdDb0Qsd0tBQ3REIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcih7ZGF0YX0pIHtcclxuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0LWFycm93IGxlZnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgbGV0IG4gPSBpLTE7XHJcbiAgICAgICAgaWYobjwwKSBuID0gZGF0YS5sZW5ndGgtMTtcclxuICAgICAgICBzZXRJKG4pXHJcbiAgICAgICAgc2V0WChuICogLTEwMClcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnQtYXJyb3cgcmlnaHRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgbGV0IG4gPSBpKzE7XHJcbiAgICAgICAgaWYobj49ZGF0YS5sZW5ndGgpIG4gPSAwO1xyXG4gICAgICAgIHNldEkobilcclxuICAgICAgICBzZXRYKG4gKiAtMTAwKVxyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItd3JhcFwiPlxyXG4gICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgoZWFjaCwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9eydzbGlkZScraWR4fSBjbGFzc05hbWU9XCJzbGlkZVwiIHN0eWxlPXt7bGVmdDppZHgqMTAwKyclJ319ID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtlYWNofS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5idC1hcnJvd3tcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgei1pbmRleDo5O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDotNTBweDtcclxuICAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6NjBweDtcclxuICAgICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LmxlZnQge1xyXG4gICAgICAgICAgbGVmdDoxJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cubGVmdCA+IGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LnJpZ2h0IHtcclxuICAgICAgICAgIHJpZ2h0OjElO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZylcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LnJpZ2h0ID4gZGl2IHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDoycHggc29saWQgI0ZGNzU3NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAuc2xpZGVyIHtcclxuICAgICAgICBtYXJnaW46MzZweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGV7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlci13cmFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7eH0lKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG5cclxuICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgIG1hcmdpbjoxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3d7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIHotaW5kZXg6OTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTIwcHg7XHJcbiAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdyA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cubGVmdCB7XHJcbiAgICAgICAgICBsZWZ0OjElO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0ID4gZGl2IHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cucmlnaHQge1xyXG4gICAgICAgICAgcmlnaHQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cucmlnaHQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.0a89bb65484206bd3103.hot-update.js.map