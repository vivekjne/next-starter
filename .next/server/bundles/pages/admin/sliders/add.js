module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);
var _jsxFileName = "/home/dev293/Documents/node-study/nodeauthapp/components/Header.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var linkStyle = {
  marginRight: 15
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isOpen: false
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "mainContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-3047142155"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-3047142155"
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-3047142155"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css",
        integrity: "sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3047142155"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:400,700",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-3047142155"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-3047142155"
      }, !this.props.isAdmin && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["Navbar"], {
        color: "dark",
        dark: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "NextShop"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavLink"], {
        style: {
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Login"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavLink"], {
        style: {
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Signup"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, !this.props.isAdmin && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavLink"], {
        style: {
          cursor: 'pointer',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png",
        style: {
          width: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-3047142155"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cart_count",
        style: {
          position: 'absolute',
          textAlign: 'center',
          height: '25px',
          width: '25px',
          right: '-2px',
          top: '0px',
          background: 'red',
          borderRadius: '50%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3047142155"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          color: '#fff',
          textAlign: 'center',
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-3047142155"
      }, this.props.cart_no))))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3047142155",
        css: "*.jsx-3047142155{margin:0;box-sizing:border-box;}.jsx-3047142155,#cart_count.jsx-3047142155{-webkit-transition:2s;transition:2s;}.jsx-3047142155,#mainContainer.jsx-3047142155{font-family:'Lato',sans-serif;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFZSxBQUd5QixBQUtULEFBRWtDLFNBTHBDLHFCQU1hLENBTlosS0FHRSxHQUlXLFVBQ1giLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZGV2MjkzL0RvY3VtZW50cy9ub2RlLXN0dWR5L25vZGVhdXRoYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtcbiAgICBDb2xsYXBzZSxcbiAgICBOYXZiYXIsXG4gICAgTmF2YmFyVG9nZ2xlcixcbiAgICBOYXZiYXJCcmFuZCxcbiAgICBOYXYsXG4gICAgTmF2SXRlbSxcbiAgICBOYXZMaW5rLFxuICAgIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICAgIERyb3Bkb3duVG9nZ2xlLFxuICAgIERyb3Bkb3duTWVudSxcbiAgICBEcm9wZG93bkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZT17XG4gICAgICAgIGlzT3BlbjpmYWxzZVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1TbWxlcDVqQ3cvd0c3aGRrd1EvWjVuTEllZnZlUVJJWTluZnk2eG9SMXVSWUJ0cFpnSTYzMzlGNWRndm0vZTlCXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuaXNBZG1pbiAmJiA8TmF2YmFyIGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPk5leHRTaG9wPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IG5hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+TG9naW48L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5TaWdudXA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmsgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuaXNBZG1pbiAmJjxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLHBvc2l0aW9uOidyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnNoYXJlaWNvbi5uZXQvZGF0YS81MTJ4NTEyLzIwMTYvMDIvMDcvMjgxMjIzX2NhcnRfNTEyeDUxMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzQwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJ0X2NvdW50XCIgc3R5bGU9e3twb3NpdGlvbjonYWJzb2x1dGUnLHRleHRBbGlnbjonY2VudGVyJyxoZWlnaHQ6JzI1cHgnLHdpZHRoOicyNXB4JyxyaWdodDonLTJweCcsdG9wOicwcHgnLGJhY2tncm91bmQ6J3JlZCcsYm9yZGVyUmFkaXVzOic1MCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNmZmYnLHRleHRBbGlnbjonY2VudGVyJyxmb250U2l6ZTonMTJweCd9fT57dGhpcy5wcm9wcy5jYXJ0X25vfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluayA+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgI2NhcnRfY291bnR7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICNtYWluQ29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxufSBcbiJdfQ== */\n/*@ sourceURL=components/Header.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/home/dev293/Documents/node-study/nodeauthapp/components/MyLayout.js";



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    isAdmin: props.isAdmin,
    title: props.page_title,
    cart_no: props.cart_no,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/dev293/Documents/node-study/nodeauthapp/components/Sidebar.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-666292170" + " " + "sidebar-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    id: "list-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-666292170"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/admin/categories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    style: {
      borderBottom: '1px solid #fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-666292170" + " " + ((props.activeLink == 'categories' ? props.active : props.inactive) || "")
  }, 'Categories'.toUpperCase())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/admin/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    style: {
      borderBottom: '1px solid #fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-666292170" + " " + ((props.activeLink == 'products' ? props.active : props.inactive) || "")
  }, 'Products'.toUpperCase())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/admin/sliders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    style: {
      borderBottom: '1px solid #fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-666292170" + " " + ((props.activeLink == 'sliders' ? props.active : props.inactive) || "")
  }, 'Sliders'.toUpperCase())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    style: {
      borderBottom: '1px solid #fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-666292170" + " " + "list-item"
  }, 'Settings'.toUpperCase())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "666292170",
    css: ".sidebar-container.jsx-666292170{background:#8e44ad;padding:10px;height:100vh;width:250px;color:#fff;font-family:'Lato',sans-serif;position:fixed;}.jsx-666292170,#list-container.jsx-666292170{list-style-type:none;}.jsx-666292170,.list-item.jsx-666292170{padding:5px;color:#bbb;cursor:pointer;}.jsx-666292170,.list-item.jsx-666292170:active{color:#fff;}.jsx-666292170,.list-item.jsx-666292170:hover{color:#fff;}.jsx-666292170,.list-active.jsx-666292170{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnFCLEFBSStDLEFBV3ZCLEFBR2dCLEFBT2hCLEFBR0EsQUFJQSxXQVBDLEFBR0EsQUFJQSxDQWJjLE9BZEUsRUFVaEIsRUFNRCxTQWZpQixNQWVoQixPQWRlLFlBQ0gsV0FDcUIsOEJBRWxDLGVBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RldjI5My9Eb2N1bWVudHMvbm9kZS1zdHVkeS9ub2RlYXV0aGFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmV4cG9ydCBkZWZhdWx0IChwcm9wcyk9PihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vY2F0ZWdvcmllc1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5hY3RpdmVMaW5rPT0nY2F0ZWdvcmllcyc/cHJvcHMuYWN0aXZlOnByb3BzLmluYWN0aXZlfSBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkICNmZmYnfX0+eydDYXRlZ29yaWVzJy50b1VwcGVyQ2FzZSgpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZHVjdHNcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMuYWN0aXZlTGluaz09J3Byb2R1Y3RzJz9wcm9wcy5hY3RpdmU6cHJvcHMuaW5hY3RpdmV9IHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgI2ZmZid9fT57J1Byb2R1Y3RzJy50b1VwcGVyQ2FzZSgpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vc2xpZGVyc1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5hY3RpdmVMaW5rPT0nc2xpZGVycyc/cHJvcHMuYWN0aXZlOnByb3BzLmluYWN0aXZlfSBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkICNmZmYnfX0+eydTbGlkZXJzJy50b1VwcGVyQ2FzZSgpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkICNmZmYnfX0+eydTZXR0aW5ncycudG9VcHBlckNhc2UoKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojOGU0NGFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgI2xpc3QtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVte1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNiYmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0LWl0ZW06YWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVtOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0LWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/Sidebar.js */"
  }));
});

/***/ }),

/***/ "./pages/admin/sliders/add.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddSliders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Sidebar__ = __webpack_require__("./components/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);

var _jsxFileName = "/home/dev293/Documents/node-study/nodeauthapp/pages/admin/sliders/add.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var PostLink = function PostLink(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.title)));
};

var AddSliders =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddSliders, _React$Component);

  function AddSliders() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AddSliders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AddSliders.__proto__ || Object.getPrototypeOf(AddSliders)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        email: '',
        password: '',
        submitted: false,
        cartValue: 0,
        activeLink: 'categories',
        image: 'http://via.placeholder.com/350x150',
        currentFile: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.setState({
          submitted: true
        });

        alert("".concat(_this.state.email, ",").concat(_this.state.password));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "addToCart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(product) {
          var cart, cartValue;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return JSON.parse(localStorage.getItem('cart'));

                case 2:
                  cart = _context.sent;
                  cartValue = 0;

                  if (cart) {
                    cartValue = cart.length;
                  } else {
                    cart = [];
                  }

                  cart.push(product);
                  console.log(cartValue);
                  localStorage.setItem('cart', JSON.stringify(cart));

                  _this.setState({
                    cartValue: Number(cartValue) + 1
                  });

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "renderAlert", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Alert"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, "Your email is ", _this.state.email, " and password is ", _this.state.password);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var file = e.target.files[0];
        console.log(file);
        var reader = new FileReader();

        reader.onload = function (theFile) {
          return function (e) {
            console.log(e.target.result);

            _this.setState({
              image: e.target.result,
              currentFile: file
            });
          };
        }(file);

        reader.readAsDataURL(file); // Read in the image file as a data URL.
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var form = new FormData();
        form.append('name', e.target.name.value);
        form.append('image', e.target.cat_image.files[0], e.target.cat_image.files[0].name);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = form.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var pair = _step.value;
            console.log(pair[0] + ', ' + pair[1]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()('http://localhost:3000/api/sliders/add', {
          method: 'POST',
          body: form
        }).then(function (res) {
          return res.json().then(function (res) {
            return console.log(res);
          });
        });
      }
    }), _temp));
  }

  _createClass(AddSliders, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var listClasses = ['list-item'];
      var listClassesActive = ['list-item', 'active'];
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */], {
        isAdmin: true,
        page_title: "Nextify",
        cart_no: this.state.cartValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-3859040454"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"], {
        md: {
          size: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Sidebar__["a" /* default */], {
        active: listClassesActive,
        inactive: listClasses,
        activeLink: 'sliders',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-3859040454" + " " + "sliderFormContainer"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          _this2.submit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-3859040454"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-3859040454"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Enter Slider Name",
        value: this.state.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-3859040454"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-3859040454"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: this.state.image,
        alt: "slider image",
        style: {
          maxHeight: '150px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-3859040454"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-3859040454"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        name: "cat_image",
        type: "file",
        onChange: function onChange(e) {
          return _this2.handleImage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-3859040454"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-3859040454"
      })))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3859040454",
        css: ".sidebar-container.jsx-3859040454{background:#8e44ad;padding:10px;height:100vh;width:250px;color:#fff font-family:'Lato',sans-serif;position:fixed;}.jsx-3859040454,#list-container.jsx-3859040454{list-style-type:none;}.jsx-3859040454,.list-item.jsx-3859040454{padding:5px;color:#bbb;cursor:pointer;}.jsx-3859040454,.list-item.jsx-3859040454:active{color:#fff;}.jsx-3859040454,.list-item.jsx-3859040454:hover{color:#fff;}.jsx-3859040454,.list-active.jsx-3859040454{color:#fff;}.jsx-3859040454,th.jsx-3859040454{color:#444;}.jsx-3859040454,.active.jsx-3859040454{font-weight:700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3NsaWRlcnMvYWRkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIcUIsQUFJK0MsQUFXdkIsQUFHZ0IsQUFPaEIsQUFHQSxBQUlBLEFBSUEsQUFHQSxXQWRDLEFBR0EsQUFJQSxBQUlBLENBakJjLElBb0JkLEdBbENnQixFQVVoQixFQU1ELFNBZmlCLE1BZWhCLE9BZGUsWUFFa0IseUNBRWxDLGVBQUMiLCJmaWxlIjoicGFnZXMvYWRtaW4vc2xpZGVycy9hZGQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZGV2MjkzL0RvY3VtZW50cy9ub2RlLXN0dWR5L25vZGVhdXRoYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xuaW1wb3J0IHsgIExpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSAsQnV0dG9uLEFsZXJ0LCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgRm9ybVRleHQsQ29udGFpbmVyLFJvdyxDb2wsVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuXG5jb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gIDwvbGk+XG4pXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRTbGlkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRlPXtcbiAgICAgICAgZW1haWw6JycsXG4gICAgICAgIHBhc3N3b3JkOicnLFxuICAgICAgICBzdWJtaXR0ZWQ6ZmFsc2UsXG4gICAgICAgIGNhcnRWYWx1ZTowLFxuICAgICAgICBhY3RpdmVMaW5rOidjYXRlZ29yaWVzJyxcbiAgICAgICAgaW1hZ2U6J2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM1MHgxNTAnLFxuICAgICAgICBjdXJyZW50RmlsZTpudWxsXG4gICAgfVxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0dGVkOnRydWV9KVxuICAgICAgIGFsZXJ0KGAke3RoaXMuc3RhdGUuZW1haWx9LCR7dGhpcy5zdGF0ZS5wYXNzd29yZH1gKVxuICAgIH1cblxuICAgIFxuXG4gICAgYWRkVG9DYXJ0PWFzeW5jKHByb2R1Y3QpPT57XG4gICAgICAgIGxldCBjYXJ0ICA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcbiAgICAgICAgbGV0IGNhcnRWYWx1ZSA9IDBcbiAgICAgICAgaWYoY2FydCl7XG4gICAgICAgICAgICBjYXJ0VmFsdWUgPSBjYXJ0Lmxlbmd0aFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNhcnQgPSBbXVxuICAgICAgICB9XG4gICAgICAgIGNhcnQucHVzaChwcm9kdWN0KVxuICAgICAgICBjb25zb2xlLmxvZyhjYXJ0VmFsdWUpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JyxKU09OLnN0cmluZ2lmeShjYXJ0KSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FydFZhbHVlOk51bWJlcihjYXJ0VmFsdWUpKzF9KVxuICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlckFsZXJ0PSgpPT4oXG4gICAgICAgIDxBbGVydCA+XG4gICAgICAgIFlvdXIgZW1haWwgaXMge3RoaXMuc3RhdGUuZW1haWx9IGFuZCBwYXNzd29yZCBpcyB7dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgIDwvQWxlcnQ+XG4gICAgKVxuXG4gICAgaGFuZGxlSW1hZ2U9KGUpPT57XG4gICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgY29uc29sZS5sb2coZmlsZSlcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKHRoZUZpbGUpPT57XG4gICAgICAgICAgICByZXR1cm4gKGUpID0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWFnZTplLnRhcmdldC5yZXN1bHQsY3VycmVudEZpbGU6ZmlsZX0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKGZpbGUpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgIC8vIFJlYWQgaW4gdGhlIGltYWdlIGZpbGUgYXMgYSBkYXRhIFVSTC5cbiAgICAgICAgXG4gICAgfVxuICAgIHN1Ym1pdD0oZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgXG4gICAgICAgIFxuICAgICAgICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoJ25hbWUnLGUudGFyZ2V0Lm5hbWUudmFsdWUpO1xuICAgICAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLGUudGFyZ2V0LmNhdF9pbWFnZS5maWxlc1swXSxlLnRhcmdldC5jYXRfaW1hZ2UuZmlsZXNbMF0ubmFtZSk7XG4gICAgICAgIGZvciAodmFyIHBhaXIgb2YgZm9ybS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhaXJbMF0rICcsICcgKyBwYWlyWzFdKTsgXG4gICAgICAgIH1cbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NsaWRlcnMvYWRkJyx7XG4gICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgICBib2R5OmZvcm0sXG4gICAgICAgIFxuICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkudGhlbihyZXM9PmNvbnNvbGUubG9nKHJlcykpXG4gICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgbGlzdENsYXNzZXMgPSBbJ2xpc3QtaXRlbSddO1xuICAgICAgICBsZXQgbGlzdENsYXNzZXNBY3RpdmUgPSBbJ2xpc3QtaXRlbScgLCdhY3RpdmUnXVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxMYXlvdXQgaXNBZG1pbj17dHJ1ZX0gcGFnZV90aXRsZT1cIk5leHRpZnlcIiBjYXJ0X25vPXt0aGlzLnN0YXRlLmNhcnRWYWx1ZX0gPlxuICAgICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17e3NpemU6M319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXIgYWN0aXZlPXtsaXN0Q2xhc3Nlc0FjdGl2ZX0gaW5hY3RpdmU9e2xpc3RDbGFzc2VzfSBhY3RpdmVMaW5rPXsnc2xpZGVycyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJGb3JtQ29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4OjEsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e3RoaXMuc3VibWl0KGUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFNsaWRlciBOYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLmltYWdlfSBhbHQ9XCJzbGlkZXIgaW1hZ2VcIiBzdHlsZT17e21heEhlaWdodDonMTUwcHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2F0X2ltYWdlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpPT50aGlzLmhhbmRsZUltYWdlKGUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM4ZTQ0YWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICNsaXN0LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3QtaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojYmJiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVtOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3QtaXRlbTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdC1hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQ0NFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NzAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgIFxuICAgICAgICAgIClcbiAgICB9XG59IFxuXG4vLyBBZG1pbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cycpXG4vLyAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgIFxuICAgXG4vLyAvLyAgICBjb25zb2xlLmxvZyhkYXRhLnByb2R1Y3RzKVxuICBcbi8vIC8vICAgICByZXR1cm4ge1xuLy8gLy8gICAgICAgcHJvZHVjdHM6IGRhdGEucHJvZHVjdHNcbi8vIC8vICAgICB9XG4vLyAgIH0iXX0= */\n/*@ sourceURL=pages/admin/sliders/add.js */"
      }));
    }
  }]);

  return AddSliders;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component); // Admin.getInitialProps = async function() {
// //     const res = await fetch('http://localhost:3000/api/products')
// //     const data = await res.json()
// //    console.log(data.products)
// //     return {
// //       products: data.products
// //     }
//   }




/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/admin/sliders/add.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=add.js.map