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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n\n\n\nfunction Home() {\n    var handleCadastro = function handleCadastro() {\n        document.getElementsByTagName(\"div\")[3].style.display = \"block\";\n        getUsers();\n    };\n    var handleClose = function handleClose() {\n        document.getElementsByTagName(\"div\")[3].style.display = \"none\";\n        document.getElementsByTagName(\"input\")[0].value = \"\";\n        document.getElementsByTagName(\"input\")[1].value = \"\";\n        document.getElementsByTagName(\"input\")[2].value = \"\";\n        document.getElementsByTagName(\"input\")[3].value = \"\";\n    };\n    var handleCriar = function handleCriar() {\n        var userName = document.getElementsByTagName(\"input\")[0].value;\n        var userCpf = document.getElementsByTagName(\"input\")[1].value;\n        var userEmail = document.getElementsByTagName(\"input\")[2].value;\n        var userPassword = document.getElementsByTagName(\"input\")[3].value;\n        var userNameExist = users.filter(function(e) {\n            return e.name == userName;\n        });\n        if (userName == \"\") {\n            alert(\"Defina um nome de usu\\xe1rio v\\xe1lido\");\n            return;\n        }\n        ;\n        if (userNameExist.length >= 1) {\n            alert(\"Nome de usu\\xe1rio indispon\\xedvel\");\n        } else {\n            users.push({\n                name: userName,\n                cpf: userCpf,\n                email: userEmail,\n                password: userPassword\n            });\n            handleClose();\n        }\n        document.getElementsByTagName(\"input\")[0].value = \"\";\n        setUsers();\n    };\n    var handleEntrar = function handleEntrar() {\n        var userName = document.getElementsByTagName(\"input\")[0].value;\n        var userNameExist = users.filter(function(e) {\n            return e.name == userName;\n        });\n        if (users.filter(function(e) {\n            return e.name == userName;\n        }).length == 1) {\n            if (userNameExist[0].cpf != document.getElementsByTagName(\"input\")[1].value) {\n                alert(\"CPF incorreto\");\n            } else if (userNameExist[0].email != document.getElementsByTagName(\"input\")[2].value) {\n                alert(\"E-mail incorreto\");\n            } else if (userNameExist[0].password != document.getElementsByTagName(\"input\")[3].value) {\n                alert(\"Senha incorreta\");\n            } else {\n                alert(\"Conta acessada\");\n                handleClose();\n            }\n        }\n    };\n    var setUsers = function setUsers() {\n        localStorage.setItem(\"users\", JSON.stringify(users));\n    };\n    var getUsers = function getUsers() {\n        var storedUsers = JSON.parse(localStorage.getItem(\"users\"));\n        if (storedUsers) {\n            users = storedUsers;\n        }\n        ;\n    };\n    var users = [\n        {\n            name: \"eu\",\n            cpf: \"\",\n            email: \"\",\n            password: \"123\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().contentcontainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"SOBRE O SITE\"\n                        }, void 0, false, {\n                            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().contentcontainercrimes),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Crimes Ambientais podem ser mais comuns do que imaginamos. Causar danos diretos ou indiretos \\xe0 unidades de conserva\\xe7\\xe3o, provocar inc\\xeandios em mata ou floresta, impedir ou dificultar a regenera\\xe7\\xe3o natural de florestas, praticar abuso ou maus-tratos \\xe0 animais silvestres ou dom\\xe9sticos e executar pesquisa, lavra ou extra\\xe7\\xe3o de recursos minerais sem autoriza\\xe7\\xe3o s\\xe3o apenas alguns exemplos de crimes ambientais segundo a lei n\\xba 9.605/98.\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().contentcontainerabout),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Dada a relev\\xe2ncia dos temas ambientais na sociedade atual, este site foi criado com o intuito de facilitar as den\\xfancias contra esse tipo de crime. Cadastre-se para poder registrar suas den\\xfancias e visualize aquelas feitas por outros usu\\xe1rios na p\\xe1gina de den\\xfancias.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: handleCadastro,\n                                    children: \"CADASTRAR-SE\"\n                                }, void 0, false, {\n                                    fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().login),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().logincontent),\n                        autoComplete: \"off\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().logincontenttext),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"COLOQUE SUAS INFORMA\\xc7\\xd5ES\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Cadastrado voc\\xea poder\\xe1 ajudar a combater a ocorr\\xeancia de crimes ambientais denunciando-os\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: [\n                                    \"Nome:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"login-name\",\n                                        name: \"name\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 20\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"cpf\",\n                                children: [\n                                    \"CPF:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"login-cpf\",\n                                        name: \"cpf\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: [\n                                    \"E-mail:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"e-mail\",\n                                        id: \"login-mail\",\n                                        name: \"email\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: [\n                                    \"Senha:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        id: \"login-password\",\n                                        name: \"password\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleCriar,\n                                type: \"button\",\n                                children: \"CRIAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleEntrar,\n                                type: \"button\",\n                                children: \"ENTRAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClose,\n                                type: \"button\",\n                                children: \"CANCELAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lucasnunesbarretosampaio/Programa\\xe7\\xe3o/Programa/pages/index.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2dCQUNDO3FCQUNSLENBQ0o7Q0FDRjtBQTNIdUIzQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBsZXQgdXNlcnMgPSBbe25hbWU6XCJldVwiLCBjcGY6XCJcIiwgZW1haWw6XCJcIiwgcGFzc3dvcmQ6XCIxMjNcIn1dO1xuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ2FkYXN0cm8oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzNdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgIGdldFVzZXJzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVszXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlPVwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMV0udmFsdWU9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVsyXS52YWx1ZT1cIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzNdLnZhbHVlPVwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDcmlhcigpIHtcbiAgICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZTtcbiAgICBsZXQgdXNlckNwZiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzFdLnZhbHVlO1xuICAgIGxldCB1c2VyRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVsyXS52YWx1ZTtcbiAgICBsZXQgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbM10udmFsdWU7XG5cbiAgICBsZXQgdXNlck5hbWVFeGlzdCA9IHVzZXJzLmZpbHRlcihlID0+IGUubmFtZSA9PSB1c2VyTmFtZSk7XG5cbiAgICBpZiAodXNlck5hbWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJEZWZpbmEgdW0gbm9tZSBkZSB1c3XDoXJpbyB2w6FsaWRvXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBpZiAodXNlck5hbWVFeGlzdC5sZW5ndGggPj0gMSkge1xuICAgICAgYWxlcnQoXCJOb21lIGRlIHVzdcOhcmlvIGluZGlzcG9uw612ZWxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJzLnB1c2goe25hbWU6IHVzZXJOYW1lLCBjcGY6IHVzZXJDcGYsIGVtYWlsOiB1c2VyRW1haWwscGFzc3dvcmQ6IHVzZXJQYXNzd29yZH0pO1xuICAgICAgaGFuZGxlQ2xvc2UoKVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZSA9IFwiXCI7XG4gICAgc2V0VXNlcnMoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRW50cmFyKCkge1xuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlO1xuXG4gICAgbGV0IHVzZXJOYW1lRXhpc3QgPSB1c2Vycy5maWx0ZXIoZSA9PiBlLm5hbWUgPT0gdXNlck5hbWUpO1xuXG4gICAgaWYgKCh1c2Vycy5maWx0ZXIoZSA9PiBlLm5hbWUgPT0gdXNlck5hbWUpLmxlbmd0aCkgPT0gMSkge1xuICAgICAgaWYgKHVzZXJOYW1lRXhpc3RbMF0uY3BmICE9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzFdLnZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KCdDUEYgaW5jb3JyZXRvJylcbiAgICAgIH0gZWxzZSBpZiAodXNlck5hbWVFeGlzdFswXS5lbWFpbCAhPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVsyXS52YWx1ZSkge1xuICAgICAgICBhbGVydCgnRS1tYWlsIGluY29ycmV0bycpXG4gICAgICB9IGVsc2UgaWYgKHVzZXJOYW1lRXhpc3RbMF0ucGFzc3dvcmQgIT0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbM10udmFsdWUpIHtcbiAgICAgICAgYWxlcnQoJ1NlbmhhIGluY29ycmV0YScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkNvbnRhIGFjZXNzYWRhXCIpO1xuICAgICAgICBoYW5kbGVDbG9zZSgpXG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFVzZXJzKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcnNcIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xuICAgIGxldCBzdG9yZWRVc2VycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2Vyc1wiKSlcbiAgICBpZiAoc3RvcmVkVXNlcnMpIHt1c2VycyA9IHN0b3JlZFVzZXJzfTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Y29udGFpbmVyfT5cbiAgICAgICAgICA8aDI+U09CUkUgTyBTSVRFPC9oMj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRjb250YWluZXJjcmltZXN9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIENyaW1lcyBBbWJpZW50YWlzIHBvZGVtIHNlciBtYWlzIGNvbXVucyBkbyBxdWUgaW1hZ2luYW1vcy5cbiAgICAgICAgICAgICAgQ2F1c2FyIGRhbm9zIGRpcmV0b3Mgb3UgaW5kaXJldG9zIMOgIHVuaWRhZGVzIGRlIGNvbnNlcnZhw6fDo28sIFxuICAgICAgICAgICAgICBwcm92b2NhciBpbmPDqm5kaW9zIGVtIG1hdGEgb3UgZmxvcmVzdGEsIGltcGVkaXIgb3UgZGlmaWN1bHRhclxuICAgICAgICAgICAgICBhIHJlZ2VuZXJhw6fDo28gbmF0dXJhbCBkZSBmbG9yZXN0YXMsIHByYXRpY2FyIGFidXNvIG91IG1hdXMtdHJhdG9zXG4gICAgICAgICAgICAgIMOgIGFuaW1haXMgc2lsdmVzdHJlcyBvdSBkb23DqXN0aWNvcyBlIGV4ZWN1dGFyIHBlc3F1aXNhLCBsYXZyYSBvdVxuICAgICAgICAgICAgICBleHRyYcOnw6NvIGRlIHJlY3Vyc29zIG1pbmVyYWlzIHNlbSBhdXRvcml6YcOnw6NvIHPDo28gYXBlbmFzIGFsZ3Vuc1xuICAgICAgICAgICAgICBleGVtcGxvcyBkZSBjcmltZXMgYW1iaWVudGFpcyBzZWd1bmRvIGEgbGVpIG7CuiA5LjYwNS85OC4gXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRjb250YWluZXJhYm91dH0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRGFkYSBhIHJlbGV2w6JuY2lhIGRvcyB0ZW1hcyBhbWJpZW50YWlzIG5hIHNvY2llZGFkZSBhdHVhbCwgZXN0ZVxuICAgICAgICAgICAgICBzaXRlIGZvaSBjcmlhZG8gY29tIG8gaW50dWl0byBkZSBmYWNpbGl0YXIgYXMgZGVuw7puY2lhcyBjb250cmFcbiAgICAgICAgICAgICAgZXNzZSB0aXBvIGRlIGNyaW1lLiBDYWRhc3RyZS1zZSBwYXJhIHBvZGVyIHJlZ2lzdHJhciBzdWFzIGRlbsO6bmNpYXNcbiAgICAgICAgICAgICAgZSB2aXN1YWxpemUgYXF1ZWxhcyBmZWl0YXMgcG9yIG91dHJvcyB1c3XDoXJpb3MgbmEgcMOhZ2luYSBkZSBkZW7Dum5jaWFzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2FkYXN0cm99PkNBREFTVFJBUi1TRTwvYnV0dG9uPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW59PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luY29udGVudH0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luY29udGVudHRleHR9PlxuICAgICAgICAgICAgICA8aDM+Q09MT1FVRSBTVUFTIElORk9STUHDh8OVRVM8L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBDYWRhc3RyYWRvIHZvY8OqIHBvZGVyw6EgYWp1ZGFyIGEgY29tYmF0ZXIgYSBvY29ycsOqbmNpYSBkZSBjcmltZXMgXG4gICAgICAgICAgICAgICAgYW1iaWVudGFpcyBkZW51bmNpYW5kby1vc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICBOb21lOjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9naW4tbmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3BmXCI+XG4gICAgICAgICAgICAgIENQRjo8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxvZ2luLWNwZlwiIG5hbWU9XCJjcGZcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICBFLW1haWw6PGlucHV0IHR5cGU9XCJlLW1haWxcIiBpZD1cImxvZ2luLW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5cbiAgICAgICAgICAgICAgU2VuaGE6PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmlhcn0gdHlwZT1cImJ1dHRvblwiPkNSSUFSPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUVudHJhcn0gdHlwZT1cImJ1dHRvblwiPkVOVFJBUjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gdHlwZT1cImJ1dHRvblwiPkNBTkNFTEFSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGF5b3V0IiwiSG9tZSIsImhhbmRsZUNhZGFzdHJvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImdldFVzZXJzIiwiaGFuZGxlQ2xvc2UiLCJ2YWx1ZSIsImhhbmRsZUNyaWFyIiwidXNlck5hbWUiLCJ1c2VyQ3BmIiwidXNlckVtYWlsIiwidXNlclBhc3N3b3JkIiwidXNlck5hbWVFeGlzdCIsInVzZXJzIiwiZmlsdGVyIiwiZSIsIm5hbWUiLCJhbGVydCIsImxlbmd0aCIsInB1c2giLCJjcGYiLCJlbWFpbCIsInBhc3N3b3JkIiwic2V0VXNlcnMiLCJoYW5kbGVFbnRyYXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFVzZXJzIiwicGFyc2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudGNvbnRhaW5lciIsImgyIiwiYXJ0aWNsZSIsImNvbnRlbnRjb250YWluZXJjcmltZXMiLCJwIiwiY29udGVudGNvbnRhaW5lcmFib3V0IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJsb2dpbiIsImZvcm0iLCJsb2dpbmNvbnRlbnQiLCJhdXRvQ29tcGxldGUiLCJsb2dpbmNvbnRlbnR0ZXh0IiwiaDMiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});