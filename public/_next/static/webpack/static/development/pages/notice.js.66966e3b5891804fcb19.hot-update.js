webpackHotUpdate("static\\development\\pages\\notice.js",{

/***/ "./pages/notice.js":
/*!*************************!*\
  !*** ./pages/notice.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Develop Work\\onen\\pages\\notice.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NoticePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("http://localhost:1337/notices").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    });
  }, []);

  var openNotice = function openNotice(target) {
    var el = document.getElementById("notice" + target);

    if (el) {
      if (el.style.display !== 'block') el.style.display = 'block';else el.style.display = 'none';
    }
  };

  return __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-343086068" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\uC6D0\uC564\uC758 \uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uC785\uB2C8\uB2E4"), __jsx("ul", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-343086068" + " " + "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-343086068" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\uBC88\uD638"), __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\uC81C\uBAA9"), __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\uB4F1\uB85D\uC77C"))), data.map(function (each, idx) {
    return __jsx("li", {
      key: 'b' + idx,
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      onClick: openNotice.bind(null, each.id),
      className: "jsx-343086068" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, data.length - idx), __jsx("div", {
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, each.title), __jsx("div", {
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, each.created_at.slice(0, 10))), __jsx("div", {
      id: "notice".concat(each.id),
      dangerouslySetInnerHTML: {
        __html: marked__WEBPACK_IMPORTED_MODULE_2___default()(each.content)
      },
      className: "jsx-343086068" + " " + "fold hide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "343086068",
    __self: this
  }, "ul.jsx-343086068,li.jsx-343086068{list-style:none;margin:0;padding:0;}.title.jsx-343086068{font-size:24px;text-align:center;font-weight:bold;margin:50px 0 20px;}ul.jsx-343086068{padding:30px 30px 60px;}.box.jsx-343086068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:36px;border-bottom:1px solid #aaa;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.fold.jsx-343086068{display:none;padding:40px;}.box.jsx-343086068 div.jsx-343086068:nth-child(1){text-align:center;width:15%;}.box.jsx-343086068 div.jsx-343086068:nth-child(2){width:50%;}.box.jsx-343086068 div.jsx-343086068:nth-child(3){width:30%;}li.head.jsx-343086068{font-weight:bold;border-top:1px solid #000;border-bottom:1px solid #000;}li.jsx-343086068:last-child{border-bottom:1px solid #000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxub3RpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUcwQixBQU9ELEFBTVEsQUFHVixBQVFBLEFBS0ssQUFJUixBQUdBLEFBR08sQUFLWSxVQVY5QixBQUdBLEdBWmMsRUFqQkssQ0FQVCxDQXVDaUIsQ0FWaEIsS0FoQlgsRUFaVyxDQXdCWCxFQUtBLENBY0EsSUFwQ2tCLEVBTmxCLFFBc0M4QixPQS9CVixtQkFDcEIsR0ErQkEsRUF6QitCLG1IQUNsQixZQUNpQiw2QkFDViw2RkFDUixXQUNaIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxub3RpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ha3JlZCBmcm9tICdtYXJrZWQnXHJcblxyXG5mdW5jdGlvbiBOb3RpY2VQYWdlKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L25vdGljZXNcIilcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcGVuTm90aWNlID0gKHRhcmdldCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGljZVwiK3RhcmdldCk7XHJcbiAgICBpZihlbCkge1xyXG4gICAgICBpZihlbC5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgZWxzZSBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+7JuQ7JWk7J2YIOyDiOuhnOyatCDshozsi53snoXri4jri6Q8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIOuyiO2YuFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICDsoJzrqqlcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAg65Ox66Gd7J28XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGVhY2gsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17J2InK2lkeH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgb25DbGljaz17b3Blbk5vdGljZS5iaW5kKG51bGwsIGVhY2guaWQpfT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEubGVuZ3RoLWlkeH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2VhY2gudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtlYWNoLmNyZWF0ZWRfYXQuc2xpY2UoMCwxMCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtgbm90aWNlJHtlYWNoLmlkfWB9IGNsYXNzTmFtZT1cImZvbGQgaGlkZVwiIFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtfX2h0bWw6IE1ha3JlZChlYWNoLmNvbnRlbnQpfSB9Lz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICB1bCwgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgbWFyZ2luOjA7IFxyXG4gICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgIG1hcmdpbjo1MHB4IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzozMHB4IDMwcHggNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGhlaWdodDozNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2FhYTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb2xkIHtcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6NDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3ggZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOjE1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveCBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveCBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkuaGVhZCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWNlUGFnZSJdfQ== */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\pages\\\\notice.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (NoticePage);

/***/ })

})
//# sourceMappingURL=notice.js.66966e3b5891804fcb19.hot-update.js.map