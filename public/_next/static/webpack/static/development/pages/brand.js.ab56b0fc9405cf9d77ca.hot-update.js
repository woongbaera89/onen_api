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
    return function () {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
      lineNumber: 73
    },
    __self: this
  }, menu[0] === "korean" ? __jsx("img", {
    src: "../static/ic_top_w.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }) : __jsx("img", {
    src: "../static/ic_top_b.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    ref: menuRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + ('box ' + fixed || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, menu.map(function (each, idx) {
    return __jsx("li", {
      key: "m" + idx,
      onClick: menuClick.bind(null, idx),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["359071814", [right - 36, right]]]) + " " + (selected == idx || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, each);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "359071814",
    dynamic: [right - 36, right],
    __self: this
  }, ".move-top.__jsx-style-dynamic-selector{position:fixed;right:".concat(right - 36, "px;bottom:240px;z-index:99;width:70px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:").concat(right, "px;z-index:3;}ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}li.true.__jsx-style-dynamic-selector{background:#FF7575;}@media only screen and (max-width:960px){.move-top.__jsx-style-dynamic-selector{position:fixed;right:0px;bottom:120px;z-index:99;width:32px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0px;right:20px;z-index:1;}ul.__jsx-style-dynamic-selector{right:20px;}li.__jsx-style-dynamic-selector{font-size:11px;height:22px;line-height:20px;padding:0 9px;border:2px solid #000;min-width:38px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZrQixBQUd5QixBQU9JLEFBSUosQUFNQyxBQUtFLEFBSUgsQUFjSSxBQUlGLEFBT0ksQUFJSixBQU1KLEFBR0ksV0FGaEIsSUE3RG9DLEFBVy9CLEFBZVMsQUFrQkgsQUFXRixBQVNJLENBL0NMLEVBVk8sQUFlTCxBQTZCTyxDQVhuQixFQTVCc0MsRUE0Q3hCLEVBdENILEFBMkJLLEVBb0JJLEVBMUNwQixDQUlrQixJQW5CbEIsQUE0Q0UsQUFLWSxDQXRDZCxHQTJCYyxNQVlaLEFBUWdCLEdBdENMLEVBbUJDLEdBOUNBLE1BWUYsQUFzRGEsQ0F0Q1AsQ0FtQmhCLEtBOUNVLEdBWVosUUFYWSxBQTJCSSxJQXNDRSxPQWhFbEIsSUEyQmdCLElBc0NkLFdBckNxQixzQkFDTixnQkFDSyxxQkFDSCxrQkFDRCxpQkFDbEIiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXGZsb2F0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmxldCBhbmltYXRpbmcgPSBmYWxzZTtcclxuZnVuY3Rpb24gZmxvYXRtZW51KHttZW51LCBoYW5kbGVDbGlja30pIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldHNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaXhlZCwgc2V0Zml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyaWdodCwgc2V0cmlnaHRdID0gdXNlU3RhdGUoMzYpO1xyXG4gIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYoKTtcclxuICBcclxuICBjb25zdCBlbGVtZW50SW5WaWV3cG9ydCA9IChlbCkgPT4ge1xyXG4gICAgdmFyIHRvcCA9IGVsLm9mZnNldFRvcDtcclxuICAgIHZhciBsZWZ0ID0gZWwub2Zmc2V0TGVmdDtcclxuICAgIHZhciB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcclxuICBcclxuICAgIHdoaWxlKGVsLm9mZnNldFBhcmVudCkge1xyXG4gICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcclxuICAgICAgbGVmdCArPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdG9wIDwgKHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCkgJiZcclxuICAgICAgbGVmdCA8ICh3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aCkgJiZcclxuICAgICAgKHRvcCArIGhlaWdodCkgPiB3aW5kb3cucGFnZVlPZmZzZXQgJiZcclxuICAgICAgKGxlZnQgKyB3aWR0aCkgPiB3aW5kb3cucGFnZVhPZmZzZXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtZW51Q2xpY2sgPSAoaWR4KSA9PiB7XHJcbiAgICBzZXRzZWxlY3RlZChpZHgpO1xyXG4gICAgaWYoaGFuZGxlQ2xpY2spIHtcclxuICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgaGFuZGxlQ2xpY2soaWR4KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0aW5nPSBmYWxzZTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ZW5lciA9IGUgPT4ge1xyXG4gICAgc2V0Zml4ZWQobWVudVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKVxyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcblxyXG4gICAgY29uc3QgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpO1xyXG4gICAgaWYoZWxzICYmIGVscy5sZW5ndGggPiAwKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgZWwgPSBlbHNbaV07XHJcbiAgICAgICAgaWYoZWxlbWVudEluVmlld3BvcnQoZWwpKXtcclxuICAgICAgICAgIGlmKCFhbmltYXRpbmcpIHNldHNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzaXplID0gZSA9PiB7XHJcbiAgICBzZXRyaWdodCgzNitNYXRoLm1heCgoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aC0xMzY0KS8yLCAwKSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZlLXRvcFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgICAgIGlmKGVsKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH19PlxyXG4gICAgICAgIHttZW51WzBdID09PSBcImtvcmVhblwiID8gKFxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaWNfdG9wX3cucG5nXCIvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pY190b3BfYi5wbmdcIi8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPXttZW51UmVmfSBjbGFzc05hbWU9eydib3ggJytmaXhlZH0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21lbnUubWFwKChlYWNoLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtcIm1cIitpZHh9IGNsYXNzTmFtZT17c2VsZWN0ZWQgPT0gaWR4fSBvbkNsaWNrPXttZW51Q2xpY2suYmluZChudWxsLCBpZHgpfT5cclxuICAgICAgICAgICAgICB7ZWFjaH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm1vdmUtdG9wIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgcmlnaHQ6JHtyaWdodC0zNn1weDtcclxuICAgICAgICAgIGJvdHRvbToyNDBweDtcclxuICAgICAgICAgIHotaW5kZXg6OTk7XHJcbiAgICAgICAgICB3aWR0aDo3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94e1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDotM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LnRydWUgdWwge1xyXG4gICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgIHJpZ2h0OiR7cmlnaHR9cHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCwgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6MzZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6MjNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICBoZWlnaHQ6NDRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjAgMThweDtcclxuICAgICAgICAgIG1pbi13aWR0aDo4MHB4O1xyXG4gICAgICAgICAgYm9yZGVyOjNweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0zcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLnRydWUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojRkY3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG4gICAgICAgICAgLm1vdmUtdG9wIHtcclxuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OjBweDtcclxuICAgICAgICAgICAgYm90dG9tOjEyMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgICAgICB3aWR0aDozMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOi0zcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LnRydWUgdWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6MjBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcmlnaHQ6MjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDlweDtcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MzhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZsb2F0bWVudSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\floatmenu.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (floatmenu);

/***/ })

})
//# sourceMappingURL=brand.js.ab56b0fc9405cf9d77ca.hot-update.js.map