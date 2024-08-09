"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./authContext.tsx":
/*!*************************!*\
  !*** ./authContext.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// contexts/AuthContext.tsx\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [authState, setAuthState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (false) {}\n        return null;\n    });\n    const loginData = (data)=>{\n        setAuthState(data);\n        localStorage.setItem(\"authData\", JSON.stringify(data));\n    };\n    const logout = ()=>{\n        setAuthState(null);\n        localStorage.removeItem(\"authData\");\n    };\n    const isAuthenticated = !!authState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            authState,\n            loginData,\n            logout,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\icksa\\\\OneDrive\\\\Desktop\\\\with-electron-typescript-app\\\\renderer\\\\authContext.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCOztBQUNnRDtBQXNCM0UsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUErQkk7QUFFekQsTUFBTUMsZUFBNEMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDcEUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFtQjtRQUMzRCxJQUFJLEtBQWtCLEVBQWEsRUFHbEM7UUFDRCxPQUFPO0lBQ1Q7SUFFQSxNQUFNYSxZQUFZLENBQUNDO1FBQ2pCUCxhQUFhTztRQUNiTCxhQUFhTSxPQUFPLENBQUMsWUFBWUosS0FBS0ssU0FBUyxDQUFDRjtJQUNsRDtJQUVBLE1BQU1HLFNBQVM7UUFDYlYsYUFBYTtRQUNiRSxhQUFhUyxVQUFVLENBQUM7SUFDMUI7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQyxDQUFDYjtJQUUxQixxQkFDRSw4REFBQ0osWUFBWWtCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZjtZQUFXTztZQUFXSTtZQUFRRTtRQUFnQjtrQkFDMUVkOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTWlCLFVBQVU7SUFDckIsTUFBTUMsVUFBVXRCLGlEQUFVQSxDQUFDQztJQUMzQixJQUFJLENBQUNxQixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXV0aENvbnRleHQudHN4P2Q2NjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGV4dHMvQXV0aENvbnRleHQudHN4XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgUmVhY3ROb2RlLCBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEF1dGhTdGF0ZSB7XG4gIHN1Y2lkOiBCaWdJbnRlZ2VyLFxuICBzbHVnOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgdXNlcl9uYW1lOiBzdHJpbmcsXG4gIGVtYWlsOiBzdHJpbmcsXG4gIHJvbGVfaWQ6IHN0cmluZyxcbiAgcm9sZV9uYW1lOiBzdHJpbmcsXG4gIHRva2VuOiBzdHJpbmcsXG4gIGRpc3RyaWJ1dG9yX2lkOiBzdHJpbmdcbiAgLy8gQWRkIG90aGVyIGZpZWxkcyBhcyBuZWVkZWRcbn1cblxuaW50ZXJmYWNlIEF1dGhDb250ZXh0UHJvcHMge1xuICBhdXRoU3RhdGU6IEF1dGhTdGF0ZSB8IG51bGw7XG4gIGxvZ2luRGF0YTogKGRhdGE6IEF1dGhTdGF0ZSkgPT4gdm9pZDtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFByb3BzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBGQzx7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFthdXRoU3RhdGUsIHNldEF1dGhTdGF0ZV0gPSB1c2VTdGF0ZTxBdXRoU3RhdGUgfCBudWxsPigoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBzYXZlZEF1dGhEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhEYXRhJyk7XG4gICAgICByZXR1cm4gc2F2ZWRBdXRoRGF0YSA/IEpTT04ucGFyc2Uoc2F2ZWRBdXRoRGF0YSkgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSk7XG5cbiAgY29uc3QgbG9naW5EYXRhID0gKGRhdGE6IEF1dGhTdGF0ZSkgPT4ge1xuICAgIHNldEF1dGhTdGF0ZShkYXRhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aERhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldEF1dGhTdGF0ZShudWxsKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aERhdGEnKTtcbiAgfTtcblxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIWF1dGhTdGF0ZTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhdXRoU3RhdGUsIGxvZ2luRGF0YSwgbG9nb3V0LCBpc0F1dGhlbnRpY2F0ZWQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCk6IEF1dGhDb250ZXh0UHJvcHMgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGhTdGF0ZSIsInNldEF1dGhTdGF0ZSIsInNhdmVkQXV0aERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibG9naW5EYXRhIiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./authContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authContext */ \"./authContext.tsx\");\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_authContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\icksa\\\\OneDrive\\\\Desktop\\\\with-electron-typescript-app\\\\renderer\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\icksa\\\\OneDrive\\\\Desktop\\\\with-electron-typescript-app\\\\renderer\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM4QztBQUU5QyxNQUFNQyxRQUE0QixDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3pELHFCQUNFLDhEQUFDSCxzREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoQ29udGV4dCc7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();