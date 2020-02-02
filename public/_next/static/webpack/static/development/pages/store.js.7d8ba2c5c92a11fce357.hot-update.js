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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3667152935", [x]]]) + " " + "slider",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3667152935", [x]]]) + " " + "arrow left",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3667152935", [x]]]) + " " + "arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3667152935", [x]]]) + " " + "slider-wrap",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3667152935", [x]]]) + " " + "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: each,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3667152935", [x]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3667152935",
    dynamic: [x],
    __self: this
  }, ".arrow.__jsx-style-dynamic-selector{position:absolute;top:50%;z-index:9;margin-top:-30px;width:60px;height:60px;border-top:2px solid #FF7575;}.arrow.left.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;left:5%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.arrow.right.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;right:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}img.__jsx-style-dynamic-selector{vertical-align:top;}.slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}.slide.__jsx-style-dynamic-selector:first-child{position:static;}.slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(x, "%);-ms-transform:translateX(").concat(x, "%);transform:translateX(").concat(x, "%);}@media only screen and (max-width:960px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUcwQixBQVNZLEFBS0MsQUFNbkIsQUFLTyxBQUdELEFBTUYsQUFHZ0IsWUFoQmQsSUFjbkIsRUFsQ1MsQUE0QkYsQ0FIUCxLQUlZLEVBNUJELElBUUYsQUFZUSxDQVBSLElBZ0JFLENBNUJPLEVBU25CLENBS0EsTUFlQyxDQVRBLE9BbkJZLFdBQ0MsWUFDaUIsNkJBQzlCLFlBK0JzRCxNQXJCdEQsRUFMQSxnS0EyQkEiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXHNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVyKHtkYXRhfSkge1xyXG4gIGNvbnN0IFtpLCBzZXRJXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgbGVmdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpLS07XHJcbiAgICAgICAgaWYoaTwwKSBpID0gZGF0YS5sZW5ndGgtMTtcclxuICAgICAgICBzZXRYKGkgKiAtMTAwKVxyXG4gICAgICB9fT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyByaWdodFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpKys7XHJcbiAgICAgICAgaWYoaT49ZGF0YS5sZW5ndGgpIGkgPSAwO1xyXG4gICAgICAgIHNldFgoaSAqIC0xMDApXHJcbiAgICAgIH19PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci13cmFwXCI+XHJcbiAgICAgIHtkYXRhICYmIGRhdGEubWFwKChlYWNoLCBpZHgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17J3NsaWRlJytpZHh9IGNsYXNzTmFtZT1cInNsaWRlXCIgc3R5bGU9e3tsZWZ0OmlkeCoxMDArJyUnfX0gPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2VhY2h9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICB6LWluZGV4Ojk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMzBweDtcclxuICAgICAgICB3aWR0aDo2MHB4O1xyXG4gICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgIH1cclxuICAgICAgLmFycm93LmxlZnQge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCAjRkY3NTc1O1xyXG4gICAgICAgIGxlZnQ6NSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpXHJcbiAgICAgIH1cclxuICAgICAgLmFycm93LnJpZ2h0IHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkICNGRjc1NzU7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpZGVyIHtcclxuICAgICAgICBtYXJnaW46MzZweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGV7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlci13cmFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7eH0lKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\slider.js */")));
}

/***/ })

})
//# sourceMappingURL=store.js.7d8ba2c5c92a11fce357.hot-update.js.map