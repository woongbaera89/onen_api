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
    fetch("http://localhost:8080/notices").then(function (response) {
      if (response.status == 200) return response.json();
    }).then(function (data) {
      return setData(data);
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
  }, "ul.jsx-343086068,li.jsx-343086068{list-style:none;margin:0;padding:0;}.title.jsx-343086068{font-size:24px;text-align:center;font-weight:bold;margin:50px 0 20px;}ul.jsx-343086068{padding:30px 30px 60px;}.box.jsx-343086068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:36px;border-bottom:1px solid #aaa;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.fold.jsx-343086068{display:none;padding:40px;}.box.jsx-343086068 div.jsx-343086068:nth-child(1){text-align:center;width:15%;}.box.jsx-343086068 div.jsx-343086068:nth-child(2){width:50%;}.box.jsx-343086068 div.jsx-343086068:nth-child(3){width:30%;}li.head.jsx-343086068{font-weight:bold;border-top:1px solid #000;border-bottom:1px solid #000;}li.jsx-343086068:last-child{border-bottom:1px solid #000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxub3RpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUcwQixBQU9ELEFBTVEsQUFHVixBQVFBLEFBS0ssQUFJUixBQUdBLEFBR08sQUFLWSxVQVY5QixBQUdBLEdBWmMsRUFqQkssQ0FQVCxDQXVDaUIsQ0FWaEIsS0FoQlgsRUFaVyxDQXdCWCxFQUtBLENBY0EsSUFwQ2tCLEVBTmxCLFFBc0M4QixPQS9CVixtQkFDcEIsR0ErQkEsRUF6QitCLG1IQUNsQixZQUNpQiw2QkFDViw2RkFDUixXQUNaIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxub3RpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ha3JlZCBmcm9tICdtYXJrZWQnXHJcblxyXG5mdW5jdGlvbiBOb3RpY2VQYWdlKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL25vdGljZXNcIilcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihkYXRhID0+IHNldERhdGEoZGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGljZSA9ICh0YXJnZXQpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RpY2VcIit0YXJnZXQpO1xyXG4gICAgaWYoZWwpIHtcclxuICAgICAgaWYoZWwuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGVsc2UgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPuybkOyVpOydmCDsg4jroZzsmrQg7IaM7Iud7J6F64uI64ukPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICDrsojtmLhcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAg7KCc66qpXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIOuTseuhneydvFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge2RhdGEubWFwKChlYWNoLCBpZHgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9eydiJytpZHh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiIG9uQ2xpY2s9e29wZW5Ob3RpY2UuYmluZChudWxsLCBlYWNoLmlkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmxlbmd0aC1pZHh9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtlYWNoLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZWFjaC5jcmVhdGVkX2F0LnNsaWNlKDAsMTApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD17YG5vdGljZSR7ZWFjaC5pZH1gfSBjbGFzc05hbWU9XCJmb2xkIGhpZGVcIiBcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7X19odG1sOiBNYWtyZWQoZWFjaC5jb250ZW50KX0gfS8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgdWwsIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgIG1hcmdpbjowOyBcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW46NTBweCAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6MzBweCAzMHB4IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBoZWlnaHQ6MzZweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9sZCB7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOjQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm94IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3ggZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3ggZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmhlYWQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljZVBhZ2UiXX0= */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\pages\\\\notice.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (NoticePage);

/***/ })

})
//# sourceMappingURL=notice.js.3c865d351dba0f8fd743.hot-update.js.map