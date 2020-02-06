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

var animating = false;

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

  var menuClick = function menuClick(idx) {
    setselected(idx);

    if (handleClick) {
      animating = true;
      handleClick(idx);
      setTimeout(function () {
        animating = false;
      }, 3000);
    }
  };

  var listener = function listener(e) {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0);
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
    var els = document.getElementsByTagName("section");

    if (els && els.length > 0) {
      for (var i = 0; i < els.length; i++) {
        var el = els[i];

        if (elementInViewport(el)) {
          if (!animating) setselected(i);
          break;
        }
      }
    }
  };

  var resize = function resize(e) {
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", listener);
    listener();
    return function () {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
      lineNumber: 74
    },
    __self: this
  }, menu[0] === "korean" ? __jsx("img", {
    src: "../static/ic_top_w.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }) : __jsx("img", {
    src: "../static/ic_top_b.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx("div", {
    ref: menuRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + ('box ' + fixed || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, menu.map(function (each, idx) {
    return __jsx("li", {
      key: "m" + idx,
      onClick: menuClick.bind(null, idx),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + (selected == idx || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, each);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "359071814",
    dynamic: [right - 36, right],
    __self: this
  }, ".move-top.__jsx-style-dynamic-selector{position:fixed;right:".concat(right - 36, "px;bottom:240px;z-index:99;width:70px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:").concat(right, "px;z-index:3;}ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}li.true.__jsx-style-dynamic-selector{background:#FF7575;}@media only screen and (max-width:960px){.move-top.__jsx-style-dynamic-selector{position:fixed;right:0px;bottom:120px;z-index:99;width:32px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0px;right:20px;z-index:1;}ul.__jsx-style-dynamic-selector{right:20px;}li.__jsx-style-dynamic-selector{font-size:11px;height:22px;line-height:20px;padding:0 9px;border:2px solid #000;min-width:38px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZrQixBQUd5QixBQU9JLEFBSUosQUFNQyxBQUtFLEFBSUgsQUFjSSxBQUlGLEFBT0ksQUFJSixBQU1KLEFBR0ksV0FGaEIsSUE3RG9DLEFBVy9CLEFBZVMsQUFrQkgsQUFXRixBQVNJLENBL0NMLEVBVk8sQUFlTCxBQTZCTyxDQVhuQixFQTVCc0MsRUE0Q3hCLEVBdENILEFBMkJLLEVBb0JJLEVBMUNwQixDQUlrQixJQW5CbEIsQUE0Q0UsQUFLWSxDQXRDZCxHQTJCYyxNQVlaLEFBUWdCLEdBdENMLEVBbUJDLEdBOUNBLE1BWUYsQUFzRGEsQ0F0Q1AsQ0FtQmhCLEtBOUNVLEdBWVosUUFYWSxBQTJCSSxJQXNDRSxPQWhFbEIsSUEyQmdCLElBc0NkLFdBckNxQixzQkFDTixnQkFDSyxxQkFDSCxrQkFDRCxpQkFDbEIiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXGZsb2F0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmxldCBhbmltYXRpbmcgPSBmYWxzZTtcclxuZnVuY3Rpb24gZmxvYXRtZW51KHttZW51LCBoYW5kbGVDbGlja30pIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldHNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaXhlZCwgc2V0Zml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyaWdodCwgc2V0cmlnaHRdID0gdXNlU3RhdGUoMzYpO1xyXG4gIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYoKTtcclxuICBcclxuICBjb25zdCBlbGVtZW50SW5WaWV3cG9ydCA9IChlbCkgPT4ge1xyXG4gICAgdmFyIHRvcCA9IGVsLm9mZnNldFRvcDtcclxuICAgIHZhciBsZWZ0ID0gZWwub2Zmc2V0TGVmdDtcclxuICAgIHZhciB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcclxuICBcclxuICAgIHdoaWxlKGVsLm9mZnNldFBhcmVudCkge1xyXG4gICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcclxuICAgICAgbGVmdCArPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdG9wIDwgKHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCkgJiZcclxuICAgICAgbGVmdCA8ICh3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aCkgJiZcclxuICAgICAgKHRvcCArIGhlaWdodCkgPiB3aW5kb3cucGFnZVlPZmZzZXQgJiZcclxuICAgICAgKGxlZnQgKyB3aWR0aCkgPiB3aW5kb3cucGFnZVhPZmZzZXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtZW51Q2xpY2sgPSAoaWR4KSA9PiB7XHJcbiAgICBzZXRzZWxlY3RlZChpZHgpO1xyXG4gICAgaWYoaGFuZGxlQ2xpY2spIHtcclxuICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgaGFuZGxlQ2xpY2soaWR4KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0aW5nPSBmYWxzZTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ZW5lciA9IGUgPT4ge1xyXG4gICAgc2V0Zml4ZWQobWVudVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKVxyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcblxyXG4gICAgY29uc3QgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpO1xyXG4gICAgaWYoZWxzICYmIGVscy5sZW5ndGggPiAwKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgZWwgPSBlbHNbaV07XHJcbiAgICAgICAgaWYoZWxlbWVudEluVmlld3BvcnQoZWwpKXtcclxuICAgICAgICAgIGlmKCFhbmltYXRpbmcpIHNldHNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzaXplID0gZSA9PiB7XHJcbiAgICBzZXRyaWdodCgzNitNYXRoLm1heCgoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aC0xMzY0KS8yLCAwKSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgbGlzdGVuZXIoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92ZS10b3BcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuICAgICAgICBpZihlbCkge1xyXG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fT5cclxuICAgICAgICB7bWVudVswXSA9PT0gXCJrb3JlYW5cIiA/IChcclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljX3RvcF93LnBuZ1wiLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNfdG9wX2IucG5nXCIvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHJlZj17bWVudVJlZn0gY2xhc3NOYW1lPXsnYm94ICcrZml4ZWR9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttZW51Lm1hcCgoZWFjaCxpZHgpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17XCJtXCIraWR4fSBjbGFzc05hbWU9e3NlbGVjdGVkID09IGlkeH0gb25DbGljaz17bWVudUNsaWNrLmJpbmQobnVsbCwgaWR4KX0+XHJcbiAgICAgICAgICAgICAge2VhY2h9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5tb3ZlLXRvcCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgIHJpZ2h0OiR7cmlnaHQtMzZ9cHg7XHJcbiAgICAgICAgICBib3R0b206MjQwcHg7XHJcbiAgICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgICAgd2lkdGg6NzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC50cnVlIHVsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICByaWdodDoke3JpZ2h0fXB4O1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwsIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OjM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOjIzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzowIDE4cHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6ODBweDtcclxuICAgICAgICAgIGJvcmRlcjozcHggc29saWQgIzAwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDotM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS50cnVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I0ZGNzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkgIHtcclxuICAgICAgICAgIC5tb3ZlLXRvcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICByaWdodDowcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbToxMjBweDtcclxuICAgICAgICAgICAgei1pbmRleDo5OTtcclxuICAgICAgICAgICAgd2lkdGg6MzJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDotM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC50cnVlIHVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OjIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjM4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmbG9hdG1lbnUiXX0= */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\floatmenu.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (floatmenu);

/***/ })

})
//# sourceMappingURL=brand.js.195f303c97642feab55d.hot-update.js.map