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

  var menuClick = function menuClick(idx) {
    //setselected(idx);
    if (handleClick) {
      handleClick(idx);
    }
  };

  var listener = function listener() {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0);
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
    var els = document.getElementsByTagName("section");

    if (els && els.length > 0) {
      for (var i = 0; i < els.length; i++) {
        var el = els[i];

        if (elementInViewport(el)) {
          setselected(i);
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]) + " " + "move-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, menu[0] === "korean" ? __jsx("img", {
    src: "../static/ic_top_w.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }) : __jsx("img", {
    src: "../static/ic_top_b.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx("div", {
    ref: menuRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]) + " " + ('box ' + fixed || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, menu.map(function (each, idx) {
    return __jsx("li", {
      key: "m" + idx,
      onClick: menuClick.bind(null, idx),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["660658214", [right - 36, right]]]) + " " + (selected == idx || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, each);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "660658214",
    dynamic: [right - 36, right],
    __self: this
  }, ".move-top.__jsx-style-dynamic-selector{position:fixed;right:".concat(right - 36, "px;bottom:240px;z-index:99;width:70px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:").concat(right, "px;z-index:3;}ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}li.true.__jsx-style-dynamic-selector{background:#FF7575;}li.__jsx-style-dynamic-selector:active{background:#FF7575;}@media only screen and (max-width:960px){.move-top.__jsx-style-dynamic-selector{position:fixed;right:0px;bottom:120px;z-index:99;width:32px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0px;right:20px;z-index:1;}ul.__jsx-style-dynamic-selector{right:20px;}li.__jsx-style-dynamic-selector{font-size:11px;height:22px;line-height:20px;padding:0 9px;border:2px solid #000;min-width:38px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZrQixBQUd5QixBQU9JLEFBSUosQUFNQyxBQUtFLEFBSUgsQUFjSSxBQUdBLEFBSUYsQUFPSSxBQUlKLEFBTUosQUFHSSxXQUZoQixJQWhFb0MsQUFXL0IsQUFlUyxBQXFCSCxBQVdGLEFBU0ksQ0FsREwsRUFWTyxBQWVMLEFBZ0NPLENBZG5CLEFBR0EsRUEvQnNDLEVBK0N4QixFQXpDSCxBQThCSyxFQW9CSSxFQTdDcEIsQ0FJa0IsSUFuQmxCLEFBK0NFLEFBS1ksQ0F6Q2QsR0E4QmMsTUFZWixBQVFnQixHQXpDTCxFQXNCQyxHQWpEQSxNQVlGLEFBeURhLENBekNQLENBc0JoQixLQWpEVSxHQVlaLFFBWFksQUEyQkksSUF5Q0UsT0FuRWxCLElBMkJnQixJQXlDZCxXQXhDcUIsc0JBQ04sZ0JBQ0sscUJBQ0gsa0JBQ0QsaUJBQ2xCIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBmbG9hdG1lbnUoe21lbnUsIGhhbmRsZUNsaWNrfSkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0c2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2ZpeGVkLCBzZXRmaXhlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JpZ2h0LCBzZXRyaWdodF0gPSB1c2VTdGF0ZSgzNik7XHJcbiAgY29uc3QgbWVudVJlZiA9IHVzZVJlZigpO1xyXG4gIFxyXG4gIGNvbnN0IGVsZW1lbnRJblZpZXdwb3J0ID0gKGVsKSA9PiB7XHJcbiAgICB2YXIgdG9wID0gZWwub2Zmc2V0VG9wO1xyXG4gICAgdmFyIGxlZnQgPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgdmFyIHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XHJcbiAgICB2YXIgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG4gIFxyXG4gICAgd2hpbGUoZWwub2Zmc2V0UGFyZW50KSB7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgICB0b3AgKz0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICBsZWZ0ICs9IGVsLm9mZnNldExlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0b3AgPCAod2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0KSAmJlxyXG4gICAgICBsZWZ0IDwgKHdpbmRvdy5wYWdlWE9mZnNldCArIHdpbmRvdy5pbm5lcldpZHRoKSAmJlxyXG4gICAgICAodG9wICsgaGVpZ2h0KSA+IHdpbmRvdy5wYWdlWU9mZnNldCAmJlxyXG4gICAgICAobGVmdCArIHdpZHRoKSA+IHdpbmRvdy5wYWdlWE9mZnNldFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1lbnVDbGljayA9IChpZHgpID0+IHtcclxuICAgIC8vc2V0c2VsZWN0ZWQoaWR4KTtcclxuICAgIGlmKGhhbmRsZUNsaWNrKSB7XHJcbiAgICAgIGhhbmRsZUNsaWNrKGlkeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIHNldGZpeGVkKG1lbnVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMClcclxuICAgIHNldHJpZ2h0KDM2K01hdGgubWF4KChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLTEzNjQpLzIsIDApKVxyXG5cclxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKTtcclxuICAgIGlmKGVscyAmJiBlbHMubGVuZ3RoID4gMCl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGVsID0gZWxzW2ldO1xyXG4gICAgICAgIGlmKGVsZW1lbnRJblZpZXdwb3J0KGVsKSl7XHJcbiAgICAgICAgICBzZXRzZWxlY3RlZChpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2l6ZSA9IGUgPT4ge1xyXG4gICAgc2V0cmlnaHQoMzYrTWF0aC5tYXgoKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtMTM2NCkvMiwgMCkpXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldHJpZ2h0KDM2K01hdGgubWF4KChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLTEzNjQpLzIsIDApKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlbmVyKTtcclxuICAgIGxpc3RlbmVyKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmUtdG9wXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbiAgICAgICAgaWYoZWwpIHtcclxuICAgICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfX0+XHJcbiAgICAgICAge21lbnVbMF0gPT09IFwia29yZWFuXCIgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pY190b3Bfdy5wbmdcIi8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ljX3RvcF9iLnBuZ1wiLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9e21lbnVSZWZ9IGNsYXNzTmFtZT17J2JveCAnK2ZpeGVkfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWVudS5tYXAoKGVhY2gsaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e1wibVwiK2lkeH0gY2xhc3NOYW1lPXtzZWxlY3RlZCA9PSBpZHh9IG9uQ2xpY2s9e21lbnVDbGljay5iaW5kKG51bGwsIGlkeCl9PlxyXG4gICAgICAgICAgICAgIHtlYWNofVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubW92ZS10b3Age1xyXG4gICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICByaWdodDoke3JpZ2h0LTM2fXB4O1xyXG4gICAgICAgICAgYm90dG9tOjI0MHB4O1xyXG4gICAgICAgICAgei1pbmRleDo5OTtcclxuICAgICAgICAgIHdpZHRoOjcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3h7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOi0zcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gudHJ1ZSB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgcmlnaHQ6JHtyaWdodH1weDtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsLCBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDozNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZToyM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgIGhlaWdodDo0NHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6MCAxOHB4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOjgwcHg7XHJcbiAgICAgICAgICBib3JkZXI6M3B4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6LTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkudHJ1ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNGRjc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpICB7XHJcbiAgICAgICAgICAubW92ZS10b3Age1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICBib3R0b206MTIwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6OTk7XHJcbiAgICAgICAgICAgIHdpZHRoOjMycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6LTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gudHJ1ZSB1bCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDozOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmxvYXRtZW51Il19 */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\floatmenu.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (floatmenu);

/***/ })

})
//# sourceMappingURL=brand.js.cb55614b6901665727ba.hot-update.js.map