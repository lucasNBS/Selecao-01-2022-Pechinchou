"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reports",{

/***/ "./pages/components/Report.js":
/*!************************************!*\
  !*** ./pages/components/Report.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Report; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Report.module.css */ \"./styles/Report.module.css\");\n/* harmony import */ var _styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Report(param) {\n    var reports = param.reports;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                id: (_styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1___default().local),\n                children: reports.local\n            }, void 0, false, {\n                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/components/Report.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                id: (_styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1___default().date),\n                children: reports.date\n            }, void 0, false, {\n                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/components/Report.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                id: (_styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1___default().time),\n                children: reports.time\n            }, void 0, false, {\n                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/components/Report.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                id: (_styles_Report_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),\n                children: reports.description\n            }, void 0, false, {\n                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/components/Report.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/components/Report.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n};\n_c = Report;\nvar _c;\n$RefreshReg$(_c, \"Report\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1JlcG9ydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWtEO0FBRW5DLFNBQVNDLE1BQU0sQ0FBRSxLQUFTLEVBQUc7UUFBWixPQUFRLEdBQVIsS0FBUyxDQUFSQyxPQUFPO0lBQ3RDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUosNEVBQWU7OzBCQUM3Qiw4REFBQ00sSUFBRTtnQkFBQ0MsRUFBRSxFQUFFUCx3RUFBVzswQkFBR0UsT0FBTyxDQUFDTSxLQUFLOzs7OztvQkFBTTswQkFDekMsOERBQUNGLElBQUU7Z0JBQUNDLEVBQUUsRUFBRVAsdUVBQVU7MEJBQUdFLE9BQU8sQ0FBQ08sSUFBSTs7Ozs7b0JBQU07MEJBQ3ZDLDhEQUFDSCxJQUFFO2dCQUFDQyxFQUFFLEVBQUVQLHVFQUFVOzBCQUFHRSxPQUFPLENBQUNRLElBQUk7Ozs7O29CQUFNOzBCQUN2Qyw4REFBQ0MsR0FBQztnQkFBQ0osRUFBRSxFQUFFUCw4RUFBaUI7MEJBQUdFLE9BQU8sQ0FBQ1UsV0FBVzs7Ozs7b0JBQUs7Ozs7OztZQUMvQyxDQUNQO0NBQ0Y7QUFUdUJYLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SZXBvcnQuanM/OTg5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9SZXBvcnQubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcG9ydCgge3JlcG9ydHN9ICkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGg0IGlkPXtzdHlsZS5sb2NhbH0+e3JlcG9ydHMubG9jYWx9PC9oND5cbiAgICAgIDxoNCBpZD17c3R5bGUuZGF0ZX0+e3JlcG9ydHMuZGF0ZX08L2g0PlxuICAgICAgPGg0IGlkPXtzdHlsZS50aW1lfT57cmVwb3J0cy50aW1lfTwvaDQ+XG4gICAgICA8cCBpZD17c3R5bGUuZGVzY3JpcHRpb259PntyZXBvcnRzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZSIsIlJlcG9ydCIsInJlcG9ydHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoNCIsImlkIiwibG9jYWwiLCJkYXRlIiwidGltZSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Report.js\n"));

/***/ })

});