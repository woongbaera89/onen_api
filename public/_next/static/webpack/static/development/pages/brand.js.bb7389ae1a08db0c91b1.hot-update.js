webpackHotUpdate("static\\development\\pages\\brand.js",{

/***/ "./comps/floatmenu.js":
/*!****************************!*\
  !*** ./comps/floatmenu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Develop Work\\onen\\comps\\floatmenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function floatmenu(_ref) {
  var menu = _ref.menu,
      handleClick = _ref.handleClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selected = _useState[0],
      setselected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fixed = _useState2[0],
      setfixed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(36),
      right = _useState3[0],
      setright = _useState3[1];

  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var elementInViewport = function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
  };

  var listener = function listener(e) {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0);
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
    var els = document.getElementsByTagName("section");
    console.log(els); // els.map((el, idx) => {
    //   console.log(el, idx, elementInViewport(el))
    // })
  };

  var resize = function resize(e) {
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", listener);
    return function () {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      var el = document.getElementById("app");

      if (el) {
        el.scrollIntoView({
          behavior: "smooth"
        });
      }
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + "move-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, menu[0] === "korean" ? __jsx("img", {
    src: "../static/ic_top_w.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }) : __jsx("img", {
    src: "../static/ic_top_b.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx("div", {
    ref: menuRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + ('box ' + fixed || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, menu.map(function (each, idx) {
    return __jsx("li", {
      key: "m" + idx,
      onClick: function onClick() {
        setselected(idx);
        if (handleClick) handleClick(idx);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + (selected == idx || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, each);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "359071814",
    dynamic: [right - 36, right],
    __self: this
  }, ".move-top.__jsx-style-dynamic-selector{position:fixed;right:".concat(right - 36, "px;bottom:240px;z-index:99;width:70px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:").concat(right, "px;z-index:3;}ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}li.true.__jsx-style-dynamic-selector{background:#FF7575;}@media only screen and (max-width:960px){.move-top.__jsx-style-dynamic-selector{position:fixed;right:0px;bottom:120px;z-index:99;width:32px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0px;right:20px;z-index:1;}ul.__jsx-style-dynamic-selector{right:20px;}li.__jsx-style-dynamic-selector{font-size:11px;height:22px;line-height:20px;padding:0 9px;border:2px solid #000;min-width:38px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZrQixBQUd5QixBQU9JLEFBSUosQUFNQyxBQUtFLEFBSUgsQUFjSSxBQUlGLEFBT0ksQUFJSixBQU1KLEFBR0ksV0FGaEIsSUE3RG9DLEFBVy9CLEFBZVMsQUFrQkgsQUFXRixBQVNJLENBL0NMLEVBVk8sQUFlTCxBQTZCTyxDQVhuQixFQTVCc0MsRUE0Q3hCLEVBdENILEFBMkJLLEVBb0JJLEVBMUNwQixDQUlrQixJQW5CbEIsQUE0Q0UsQUFLWSxDQXRDZCxHQTJCYyxNQVlaLEFBUWdCLEdBdENMLEVBbUJDLEdBOUNBLE1BWUYsQUFzRGEsQ0F0Q1AsQ0FtQmhCLEtBOUNVLEdBWVosUUFYWSxBQTJCSSxJQXNDRSxPQWhFbEIsSUEyQmdCLElBc0NkLFdBckNxQixzQkFDTixnQkFDSyxxQkFDSCxrQkFDRCxpQkFDbEIiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXGZsb2F0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIGZsb2F0bWVudSh7bWVudSwgaGFuZGxlQ2xpY2t9KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZml4ZWQsIHNldGZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmlnaHQsIHNldHJpZ2h0XSA9IHVzZVN0YXRlKDM2KTtcclxuICBjb25zdCBtZW51UmVmID0gdXNlUmVmKCk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEluVmlld3BvcnQgPSAoZWwpID0+IHtcclxuICAgIHZhciB0b3AgPSBlbC5vZmZzZXRUb3A7XHJcbiAgICB2YXIgbGVmdCA9IGVsLm9mZnNldExlZnQ7XHJcbiAgICB2YXIgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XHJcbiAgXHJcbiAgICB3aGlsZShlbC5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgIHRvcCArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRvcCA8ICh3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQpICYmXHJcbiAgICAgIGxlZnQgPCAod2luZG93LnBhZ2VYT2Zmc2V0ICsgd2luZG93LmlubmVyV2lkdGgpICYmXHJcbiAgICAgICh0b3AgKyBoZWlnaHQpID4gd2luZG93LnBhZ2VZT2Zmc2V0ICYmXHJcbiAgICAgIChsZWZ0ICsgd2lkdGgpID4gd2luZG93LnBhZ2VYT2Zmc2V0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdGVuZXIgPSBlID0+IHtcclxuICAgIHNldGZpeGVkKG1lbnVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMClcclxuICAgIHNldHJpZ2h0KDM2K01hdGgubWF4KChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLTEzNjQpLzIsIDApKVxyXG5cclxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVscylcclxuICAgIC8vIGVscy5tYXAoKGVsLCBpZHgpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coZWwsIGlkeCwgZWxlbWVudEluVmlld3BvcnQoZWwpKVxyXG5cclxuICAgIC8vIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzaXplID0gZSA9PiB7XHJcbiAgICBzZXRyaWdodCgzNitNYXRoLm1heCgoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aC0xMzY0KS8yLCAwKSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZlLXRvcFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgICAgIGlmKGVsKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH19PlxyXG4gICAgICAgIHttZW51WzBdID09PSBcImtvcmVhblwiID8gKFxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNfdG9wX3cucG5nXCIvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pY190b3BfYi5wbmdcIi8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPXttZW51UmVmfSBjbGFzc05hbWU9eydib3ggJytmaXhlZH0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21lbnUubWFwKChlYWNoLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtcIm1cIitpZHh9IGNsYXNzTmFtZT17c2VsZWN0ZWQgPT0gaWR4fSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0c2VsZWN0ZWQoaWR4KTtcclxuICAgICAgICAgICAgICBpZihoYW5kbGVDbGljaykgaGFuZGxlQ2xpY2soaWR4KTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAge2VhY2h9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5tb3ZlLXRvcCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgIHJpZ2h0OiR7cmlnaHQtMzZ9cHg7XHJcbiAgICAgICAgICBib3R0b206MjQwcHg7XHJcbiAgICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgICAgd2lkdGg6NzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC50cnVlIHVsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICByaWdodDoke3JpZ2h0fXB4O1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwsIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OjM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOjIzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzowIDE4cHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6ODBweDtcclxuICAgICAgICAgIGJvcmRlcjozcHggc29saWQgIzAwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDotM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS50cnVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I0ZGNzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkgIHtcclxuICAgICAgICAgIC5tb3ZlLXRvcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICByaWdodDowcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbToxMjBweDtcclxuICAgICAgICAgICAgei1pbmRleDo5OTtcclxuICAgICAgICAgICAgd2lkdGg6MzJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDotM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC50cnVlIHVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OjIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjM4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmbG9hdG1lbnUiXX0= */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\floatmenu.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (floatmenu);

/***/ })

})
//# sourceMappingURL=brand.js.bb7389ae1a08db0c91b1.hot-update.js.map