(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\brand.js"],{

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

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fbrand&absolutePagePath=D%3A%5CDevelop%20Work%5Conen%5Cpages%5Cbrand.js!./":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fbrand&absolutePagePath=D%3A%5CDevelop%20Work%5Conen%5Cpages%5Cbrand.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/brand", function() {
      var mod = __webpack_require__(/*! ./pages/brand.js */ "./pages/brand.js")
      if(true) {
        module.hot.accept(/*! ./pages/brand.js */ "./pages/brand.js", function() {
          if(!next.router.components["/brand"]) return
          var updatedPage = __webpack_require__(/*! ./pages/brand.js */ "./pages/brand.js")
          next.router.update("/brand", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/brand.js":
/*!************************!*\
  !*** ./pages/brand.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrandPage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_floatmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/floatmenu */ "./comps/floatmenu.js");
var _jsxFileName = "D:\\Develop Work\\onen\\pages\\brand.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function BrandPage() {
  return __jsx("div", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_comps_floatmenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menu: ["vision", "brand_story", "campaign", "BI"],
    handleClick: function handleClick(idx) {
      var el = document.getElementsByTagName("section")[idx];

      if (el) {
        el.scrollIntoView({
          behavior: "smooth"
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "../static/brand_vision.jpg",
    className: "jsx-2340659209" + " " + "dd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: "../static/brand_vision_m.jpg",
    className: "jsx-2340659209" + " " + "mm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: "../static/brand_story.jpg",
    className: "jsx-2340659209" + " " + "dd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("img", {
    src: "../static/brand_story_m.jpg",
    className: "jsx-2340659209" + " " + "mm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2340659209" + " " + "video-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "now / new", __jsx("br", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uC6D0\uC564\uC5D0\uC11C \uC990\uACA8\uBCF4\uC138\uC694")), __jsx("iframe", {
    src: "https://www.youtube.com/embed/6xT4PlPeK80",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2340659209" + " " + "video-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "nice shot / nineteen", __jsx("br", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\uC6D0\uC564\uC5D0\uC11C \uD568\uAED8\uD558\uC138\uC694")), __jsx("iframe", {
    src: "https://www.youtube.com/embed/ETOhai2nvD8",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2340659209" + " " + "video-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "nonsense / no matter", __jsx("br", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\uC6D0\uC564\uC5D0\uC11C \uCC3E\uC544\uBCF4\uC138\uC694")), __jsx("iframe", {
    src: "https://www.youtube.com/embed/2svzivZPazM",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2340659209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("img", {
    src: "../static/brand_bi.jpg",
    className: "jsx-2340659209" + " " + "dd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("img", {
    src: "../static/brand_bi_m.jpg",
    className: "jsx-2340659209" + " " + "mm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2340659209",
    __self: this
  }, "section.jsx-2340659209{text-align:center;}img.jsx-2340659209{vertical-align:top;}.video-title.jsx-2340659209{font-weight:bold;font-size:26px;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;padding:100px 0 24px;}.video-title.jsx-2340659209 small.jsx-2340659209{font-size:21px;}iframe.jsx-2340659209{width:720px;height:405px;margin:0 auto;}iframe.jsx-2340659209:last-child{margin-bottom:50px;}@media only screen and (max-width:960px){.video-title.jsx-2340659209{font-weight:bold;font-size:15px;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;padding:50px 0 15px;}.video-title.jsx-2340659209 small.jsx-2340659209{font-size:11px;}iframe.jsx-2340659209{width:90vw;height:50.625vw;margin:0 auto;}iframe.jsx-2340659209:last-child{margin-bottom:25px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxicmFuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBRzRCLEFBR0MsQUFHRixBQU1GLEFBR0gsQUFLTyxBQUtBLEFBTUYsQUFHSixBQUtRLFdBSkgsQ0FuQkwsR0FIZCxBQW1CRSxFQXpCYyxBQW1CRSxDQXpCbEIsQ0FHQSxBQWlCQSxBQW1CRSxNQXZCYSxFQW1CRSxLQTVCTSxBQW1CRSxPQVR6QixFQW1CRSxnR0E1Qm9CLEFBbUJDLG9CQUNyQixDQW5CRiIsImZpbGUiOiJEOlxcRGV2ZWxvcCBXb3JrXFxvbmVuXFxwYWdlc1xcYnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxvYXRtZW51IGZyb20gJy4uL2NvbXBzL2Zsb2F0bWVudSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyYW5kUGFnZSgpIHtcclxuICByZXR1cm4gKCBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGbG9hdG1lbnUgXHJcbiAgICAgICAgbWVudT17W1widmlzaW9uXCIsXCJicmFuZF9zdG9yeVwiLFwiY2FtcGFpZ25cIixcIkJJXCJdfVxyXG4gICAgICAgIGhhbmRsZUNsaWNrPXsoaWR4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGBzZWN0aW9uYClbaWR4XTtcclxuICAgICAgICAgIGlmKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9fS8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRkXCIgc3JjPVwiLi4vc3RhdGljL2JyYW5kX3Zpc2lvbi5qcGdcIi8+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1tXCIgc3JjPVwiLi4vc3RhdGljL2JyYW5kX3Zpc2lvbl9tLmpwZ1wiLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRkXCIgc3JjPVwiLi4vc3RhdGljL2JyYW5kX3N0b3J5LmpwZ1wiLz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW1cIiBzcmM9XCIuLi9zdGF0aWMvYnJhbmRfc3RvcnlfbS5qcGdcIi8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby10aXRsZVwiPm5vdyAvIG5ldzxici8+PHNtYWxsPuybkOyVpOyXkOyEnCDsppDqsqjrs7TshLjsmpQ8L3NtYWxsPjwvZGl2PlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC82eFQ0UGxQZUs4MFwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj5uaWNlIHNob3QgLyBuaW5ldGVlbjxici8+PHNtYWxsPuybkOyVpOyXkOyEnCDtlajqu5jtlZjshLjsmpQ8L3NtYWxsPjwvZGl2PlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9FVE9oYWkybnZEOFwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj5ub25zZW5zZSAvIG5vIG1hdHRlcjxici8+PHNtYWxsPuybkOyVpOyXkOyEnCDssL7slYTrs7TshLjsmpQ8L3NtYWxsPjwvZGl2PlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8yc3Z6aXZaUGF6TVwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZFwiIHNyYz1cIi4uL3N0YXRpYy9icmFuZF9iaS5qcGdcIi8+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1tXCIgc3JjPVwiLi4vc3RhdGljL2JyYW5kX2JpX20uanBnXCIvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlkZW8tdGl0bGUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6LTAuNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzoxMDBweCAwIDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWRlby10aXRsZSBzbWFsbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6MjFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgIHdpZHRoOjcyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjQwNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWZyYW1lOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSAge1xyXG5cclxuICAgICAgICAgIC52aWRlby10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzotMC41cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NTBweCAwIDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkZW8tdGl0bGUgc21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjkwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MC42MjV2dztcclxuICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmcmFtZTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\pages\\\\brand.js */"));
}

/***/ }),

/***/ 2:
/*!*********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fbrand&absolutePagePath=D%3A%5CDevelop%20Work%5Conen%5Cpages%5Cbrand.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fbrand&absolutePagePath=D%3A%5CDevelop%20Work%5Conen%5Cpages%5Cbrand.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fbrand&absolutePagePath=D%3A%5CDevelop%20Work%5Conen%5Cpages%5Cbrand.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=brand.js.map