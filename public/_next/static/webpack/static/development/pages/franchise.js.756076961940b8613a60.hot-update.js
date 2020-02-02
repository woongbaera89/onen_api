webpackHotUpdate("static\\development\\pages\\franchise.js",{

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

  var listener = function listener(e) {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0);
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
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
      lineNumber: 29
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
      lineNumber: 30
    },
    __self: this
  }, menu[0] === "korean" ? __jsx("img", {
    src: "../static/ic_top_w.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }) : __jsx("img", {
    src: "../static/ic_top_b.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    ref: menuRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + ('box ' + fixed || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
        lineNumber: 45
      },
      __self: this
    }, each);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "359071814",
    dynamic: [right - 36, right],
    __self: this
  }, ".move-top.__jsx-style-dynamic-selector{position:fixed;right:".concat(right - 36, "px;bottom:240px;z-index:99;width:70px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:").concat(right, "px;z-index:3;}ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}li.true.__jsx-style-dynamic-selector{background:#FF7575;}@media only screen and (max-width:960px){.move-top.__jsx-style-dynamic-selector{position:fixed;right:0px;bottom:120px;z-index:99;width:32px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0px;right:20px;z-index:1;}ul.__jsx-style-dynamic-selector{right:20px;}li.__jsx-style-dynamic-selector{font-size:11px;height:22px;line-height:20px;padding:0 9px;border:2px solid #000;min-width:38px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUd5QixBQU9JLEFBSUosQUFNQyxBQUtFLEFBSUgsQUFjSSxBQUlGLEFBT0ksQUFJSixBQU1KLEFBR0ksV0FGaEIsSUE3RG9DLEFBVy9CLEFBZVMsQUFrQkgsQUFXRixBQVNJLENBL0NMLEVBVk8sQUFlTCxBQTZCTyxDQVhuQixFQTVCc0MsRUE0Q3hCLEVBdENILEFBMkJLLEVBb0JJLEVBMUNwQixDQUlrQixJQW5CbEIsQUE0Q0UsQUFLWSxDQXRDZCxHQTJCYyxNQVlaLEFBUWdCLEdBdENMLEVBbUJDLEdBOUNBLE1BWUYsQUFzRGEsQ0F0Q1AsQ0FtQmhCLEtBOUNVLEdBWVosUUFYWSxBQTJCSSxJQXNDRSxPQWhFbEIsSUEyQmdCLElBc0NkLFdBckNxQixzQkFDTixnQkFDSyxxQkFDSCxrQkFDRCxpQkFDbEIiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXGZsb2F0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIGZsb2F0bWVudSh7bWVudSwgaGFuZGxlQ2xpY2t9KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZml4ZWQsIHNldGZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmlnaHQsIHNldHJpZ2h0XSA9IHVzZVN0YXRlKDM2KTtcclxuICBjb25zdCBtZW51UmVmID0gdXNlUmVmKCk7XHJcbiAgXHJcblxyXG4gIGNvbnN0IGxpc3RlbmVyID0gZSA9PiB7XHJcbiAgICBzZXRmaXhlZChtZW51UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApXHJcbiAgICBzZXRyaWdodCgzNitNYXRoLm1heCgoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aC0xMzY0KS8yLCAwKSlcclxuICB9O1xyXG4gIGNvbnN0IHJlc2l6ZSA9IGUgPT4ge1xyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldHJpZ2h0KDM2K01hdGgubWF4KChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLTEzNjQpLzIsIDApKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlbmVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92ZS10b3BcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuICAgICAgICBpZihlbCkge1xyXG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fT5cclxuICAgICAgICB7bWVudVswXSA9PT0gXCJrb3JlYW5cIiA/IChcclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljX3RvcF93LnBuZ1wiLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNfdG9wX2IucG5nXCIvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHJlZj17bWVudVJlZn0gY2xhc3NOYW1lPXsnYm94ICcrZml4ZWR9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttZW51Lm1hcCgoZWFjaCxpZHgpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17XCJtXCIraWR4fSBjbGFzc05hbWU9e3NlbGVjdGVkID09IGlkeH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHNlbGVjdGVkKGlkeCk7XHJcbiAgICAgICAgICAgICAgaWYoaGFuZGxlQ2xpY2spIGhhbmRsZUNsaWNrKGlkeCk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIHtlYWNofVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubW92ZS10b3Age1xyXG4gICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICByaWdodDoke3JpZ2h0LTM2fXB4O1xyXG4gICAgICAgICAgYm90dG9tOjI0MHB4O1xyXG4gICAgICAgICAgei1pbmRleDo5OTtcclxuICAgICAgICAgIHdpZHRoOjcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3h7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOi0zcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gudHJ1ZSB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgcmlnaHQ6JHtyaWdodH1weDtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsLCBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDozNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZToyM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgIGhlaWdodDo0NHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MCAxOHB4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOjgwcHg7XHJcbiAgICAgICAgICBib3JkZXI6M3B4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6LTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkudHJ1ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpICB7XHJcbiAgICAgICAgICAubW92ZS10b3Age1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICBib3R0b206MTIwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6OTk7XHJcbiAgICAgICAgICAgIHdpZHRoOjMycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6LTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gudHJ1ZSB1bCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDozOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmxvYXRtZW51Il19 */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\floatmenu.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (floatmenu);

/***/ })

})
//# sourceMappingURL=franchise.js.756076961940b8613a60.hot-update.js.map