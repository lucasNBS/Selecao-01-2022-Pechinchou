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

/***/ "./pages/reports.js":
/*!**************************!*\
  !*** ./pages/reports.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reports; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var _components_Report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Report */ \"./pages/components/Report.js\");\n/* harmony import */ var _styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Reports.module.css */ \"./styles/Reports.module.css\");\n/* harmony import */ var _styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Reports() {\n    var handleShow = function handleShow() {\n        document.getElementById(\"post\").style.display = \"block\";\n        document.getElementsByTagName(\"input\")[3].value = position.coords.latitude;\n        document.getElementsByTagName(\"input\")[4].value = position.coords.longitude;\n    };\n    var handleClose = function handleClose() {\n        document.getElementById(\"post\").style.display = \"none\";\n        document.getElementsByTagName(\"input\")[0].value = \"\";\n        document.getElementsByTagName(\"input\")[1].value = \"\";\n        document.getElementsByTagName(\"input\")[2].value = \"\";\n        document.getElementsByTagName(\"input\")[3].value = \"\";\n        document.getElementsByTagName(\"input\")[4].value = \"\";\n        document.getElementsByTagName(\"textarea\")[0].value = \"\";\n    };\n    var handleCriar = function handleCriar() {\n        var date = document.getElementsByTagName(\"input\")[0].value;\n        var hour = document.getElementsByTagName(\"input\")[1].value;\n        var local = document.getElementsByTagName(\"input\")[2].value;\n        var latitude = document.getElementsByTagName(\"input\")[3].value;\n        var longitude = document.getElementsByTagName(\"input\")[4].value;\n        var description = document.getElementsByTagName(\"textarea\")[0].value;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"DEN\\xdaNCIAS REALIZADAS\"\n                        }, void 0, false, {\n                            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: handleShow,\n                            children: \"Criar den\\xfancia\"\n                        }, void 0, false, {\n                            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().reports),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Report__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                userName: \"Lucas\",\n                                date: \"22/02/2006\",\n                                local: \"Centro da cidade\",\n                                time: \"08:45\",\n                                description: \"Maus tratos \\xe0 animais\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                    id: \"post\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().postcontent),\n                        autoComplete: \"off\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"PREENCHA AS INFORMA\\xc7\\xd5ES\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().time),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"date\",\n                                        children: [\n                                            \"Data:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                id: \"report-date\",\n                                                name: \"date\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 22\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"hour\",\n                                        children: [\n                                            \"Hora:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                id: \"report-hour\",\n                                                name: \"hour\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().local),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"local\",\n                                        children: [\n                                            \"Local:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"e-mail\",\n                                                id: \"report-local\",\n                                                name: \"local\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"latitude\",\n                                        children: [\n                                            \"Latitude:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"e-mail\",\n                                                id: \"report-latitude\",\n                                                name: \"latitude\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 26\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"longitude\",\n                                        children: [\n                                            \"Longitude:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"e-mail\",\n                                                id: \"report-longitude\",\n                                                name: \"longitude\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"description\",\n                                        children: \"Descri\\xe7\\xe3o do crime:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        type: \"password\",\n                                        id: (_styles_Reports_module_css__WEBPACK_IMPORTED_MODULE_3___default().reportdescription),\n                                        name: \"description\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleCriar,\n                                type: \"button\",\n                                children: \"PUBLICAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClose,\n                                type: \"button\",\n                                children: \"CANCELAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/reports.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = Reports;\nvar _c;\n$RefreshReg$(_c, \"Reports\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXBvcnRzLmpzP2NlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuL2NvbXBvbmVudHMvUmVwb3J0XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9SZXBvcnRzLm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBvcnRzKCkge1xuICBcbiAgZnVuY3Rpb24gaGFuZGxlU2hvdygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdCcpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzNdLnZhbHVlPXBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVs0XS52YWx1ZT1wb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3QnKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlPVwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMV0udmFsdWU9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVsyXS52YWx1ZT1cIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzNdLnZhbHVlPVwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbNF0udmFsdWU9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS52YWx1ZT1cIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ3JpYXIoKSB7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZTtcbiAgICBsZXQgaG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzFdLnZhbHVlO1xuICAgIGxldCBsb2NhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzJdLnZhbHVlO1xuICAgIGxldCBsYXRpdHVkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzNdLnZhbHVlO1xuICAgIGxldCBsb25naXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVs0XS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8aDI+REVOw5pOQ0lBUyBSRUFMSVpBREFTPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTaG93fT5DcmlhciBkZW7Dum5jaWE8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcG9ydHN9PlxuICAgICAgICAgICAgPFJlcG9ydCB1c2VyTmFtZT1cIkx1Y2FzXCIgZGF0ZT1cIjIyLzAyLzIwMDZcIiBsb2NhbD1cIkNlbnRybyBkYSBjaWRhZGVcIiB0aW1lPVwiMDg6NDVcIiBkZXNjcmlwdGlvbj1cIk1hdXMgdHJhdG9zIMOgIGFuaW1haXNcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGlkPVwicG9zdFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rjb250ZW50fSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgIDxoMz5QUkVFTkNIQSBBUyBJTkZPUk1Bw4fDlUVTPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgIERhdGE6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZXBvcnQtZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvdXJcIj5cbiAgICAgICAgICAgICAgIEhvcmE6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZXBvcnQtaG91clwiIG5hbWU9XCJob3VyXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2FsfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhbFwiPlxuICAgICAgICAgICAgICAgIExvY2FsOjxpbnB1dCB0eXBlPVwiZS1tYWlsXCIgaWQ9XCJyZXBvcnQtbG9jYWxcIiBuYW1lPVwibG9jYWxcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGF0aXR1ZGVcIj5cbiAgICAgICAgICAgICAgICBMYXRpdHVkZTo8aW5wdXQgdHlwZT1cImUtbWFpbFwiIGlkPVwicmVwb3J0LWxhdGl0dWRlXCIgbmFtZT1cImxhdGl0dWRlXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvbmdpdHVkZVwiPlxuICAgICAgICAgICAgICAgIExvbmdpdHVkZTo8aW5wdXQgdHlwZT1cImUtbWFpbFwiIGlkPVwicmVwb3J0LWxvbmdpdHVkZVwiIG5hbWU9XCJsb25naXR1ZGVcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVzY3JpcHRpb24nPkRlc2NyacOnw6NvIGRvIGNyaW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwicGFzc3dvcmRcIiBpZD17c3R5bGVzLnJlcG9ydGRlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JpYXJ9IHR5cGU9XCJidXR0b25cIj5QVUJMSUNBUjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gdHlwZT1cImJ1dHRvblwiPkNBTkNFTEFSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIlJlcG9ydCIsInN0eWxlcyIsIlJlcG9ydHMiLCJoYW5kbGVTaG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidmFsdWUiLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDcmlhciIsImRhdGUiLCJob3VyIiwibG9jYWwiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJyZXBvcnRzIiwidXNlck5hbWUiLCJ0aW1lIiwicG9zdCIsImlkIiwiZm9ybSIsInBvc3Rjb250ZW50IiwiYXV0b0NvbXBsZXRlIiwiaDMiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicmVwb3J0ZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reports.js\n"));

/***/ })

});