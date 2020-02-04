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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "slider",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "bt-arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "arrow ",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "bt-arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "arrow ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "slider-wrap",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "dd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("img", {
      src: each.replace(".jpg", "_m.jpg"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3766469482", [x]]]) + " " + "mm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3766469482",
    dynamic: [x],
    __self: this
  }, ".bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-50px;width:100px;height:100px;padding:20px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:60px;height:60px;border-top:2px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{text-align:center;position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){.slider.__jsx-style-dynamic-selector{margin:18px;}.bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-20px;width:40px;height:40px;padding:10px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:20px;height:20px;border-top:1px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:1px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:1px solid #FF7575;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUd5QixBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsQUFJckIsQUFLTyxBQUdELEFBT0YsQUFHZ0IsQUFNbEIsQUFHRyxBQVVKLEFBS0gsQUFJc0IsQUFHckIsQUFJc0IsUUFsRWpDLEFBeURBLENBbERBLEFBeURBLEVBdEVjLEFBeURBLENBckNJLEFBd0JqQixHQXREbUIsQUF5REEsQ0FackIsRUFQbUIsQ0FIbkIsSUF4QmdDLEFBeURBLE9BakQ5QixBQVllLEFBNkNmLENBbERBLEFBeURBLEVBbEZTLEFBeURBLEdBbkJKLEtBckNNLEFBeURBLENBbkJELElBUlosS0E3Qm9CLEFBeURBLENBaERsQixBQXlEQSxDQTVCUyxVQUNYLEtBdENlLEFBeURELFdBQ0MsQ0F6REMsV0EwREEsRUF6REEsQUFpQmQsQUF5REEsRUFoRUEsQUF5REEsU0FUQSxFQXpEQSxXQXlDb0Qsd0tBQ3REIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcih7ZGF0YX0pIHtcclxuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0LWFycm93IGxlZnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgbGV0IG4gPSBpLTE7XHJcbiAgICAgICAgaWYobjwwKSBuID0gZGF0YS5sZW5ndGgtMTtcclxuICAgICAgICBzZXRJKG4pXHJcbiAgICAgICAgc2V0WChuICogLTEwMClcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnQtYXJyb3cgcmlnaHRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgbGV0IG4gPSBpKzE7XHJcbiAgICAgICAgaWYobj49ZGF0YS5sZW5ndGgpIG4gPSAwO1xyXG4gICAgICAgIHNldEkobilcclxuICAgICAgICBzZXRYKG4gKiAtMTAwKVxyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItd3JhcFwiPlxyXG4gICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgoZWFjaCwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9eydzbGlkZScraWR4fSBjbGFzc05hbWU9XCJzbGlkZVwiIHN0eWxlPXt7bGVmdDppZHgqMTAwKyclJ319ID5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGRcIiBzcmM9e2VhY2h9Lz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW1cIiBzcmM9e2VhY2gucmVwbGFjZShcIi5qcGdcIiwgXCJfbS5qcGdcIil9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmJ0LWFycm93e1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICB6LWluZGV4Ojk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOi01MHB4O1xyXG4gICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdyA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDo2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cubGVmdCB7XHJcbiAgICAgICAgICBsZWZ0OjElO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0ID4gZGl2IHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cucmlnaHQge1xyXG4gICAgICAgICAgcmlnaHQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnQtYXJyb3cucmlnaHQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgIG1hcmdpbjozNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGVyLXdyYXB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHt4fSUpO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpICB7XHJcblxyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgbWFyZ2luOjE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvd3tcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgei1pbmRleDo5O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDotMjBweDtcclxuICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93ID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5sZWZ0IHtcclxuICAgICAgICAgIGxlZnQ6MSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0LWFycm93LmxlZnQgPiBkaXYge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCB7XHJcbiAgICAgICAgICByaWdodDoxJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idC1hcnJvdy5yaWdodCA+IGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.9e6aea91e3c700dbb0f8.hot-update.js.map