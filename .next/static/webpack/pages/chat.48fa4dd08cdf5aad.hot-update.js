"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyMDc5MiwiZXhwIjoxOTU4ODk2NzkyfQ.mJJ2D3hJXfE0TVH2tg08uASD2vwc30gT7kBipZdgFmo';\nvar SUPABASE_URL = 'https://lsyookcvlvewvangsllw.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            de: 'omariosouto',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagem').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            setListaDeMensagem([\n                mensagem, \n            ].concat(_toConsumableArray(listaDeMensagem)));\n        });\n        setMessage(\"\");\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), mensagem1 = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaDeMensagem = ref1[0], setListaDeMensagem = ref1[1];\n    // ./Sua lógica vai aqui\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        supabaseClient.from('mensagens').select('*').then(function(param) {\n            var data = param.data;\n            setListaDeMensagem(data);\n        });\n    }, []);\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagem\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    console.log(event.target.value);\n                                    var valor = event.target.value;\n                                    setMessage(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"qoEMEyUF9tVvyzdzzmE9ipX4skc=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 137,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(\"MessageList\", props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"hiden\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 191,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 201,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 204,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 186,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 174,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 161,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxFQUFFLENBQUM7b0JBQ1hpQixZQUFZLEVBQUUsQ0FBSztvQkFDbkJJLE9BQU8sRUFBRSxDQUFLO29CQUNkc0IsWUFBWSxFQUFFLENBQU07b0JBQ3BCUyxLQUFLLEVBQUUsQ0FBQzt3QkFDTmhELGVBQWUsRUFBRXZCLG9FQUFvQztvQkFDdkQsQ0FBQztnQkFDSCxDQUFDOztnR0FFQVIscURBQUc7d0JBQ0YyQixVQUFVLEVBQUUsQ0FBQzs0QkFDWDJDLFlBQVksRUFBRSxDQUFLO3dCQUNyQixDQUFDOzt3R0FFQW5FLHVEQUFLO2dDQUNKd0IsVUFBVSxFQUFFLENBQUM7b0NBQ1h1QyxLQUFLLEVBQUUsQ0FBTTtvQ0FDYnJCLE1BQU0sRUFBRSxDQUFNO29DQUNkRCxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJoQixPQUFPLEVBQUUsQ0FBYztvQ0FDdkJ5QyxXQUFXLEVBQUUsQ0FBSztnQ0FDcEIsQ0FBQztnQ0FDRFcsR0FBRyxFQUFHLENBQW1CLHFCQUFjLE1BQUksQ0FBaEJoRSxRQUFRLENBQUNDLEVBQUUsRUFBQyxDQUFJOzs7Ozs7d0dBRTVDaEIsc0RBQUk7Z0NBQUMyRSxHQUFHLEVBQUMsQ0FBUTswQ0FDYjVELFFBQVEsQ0FBQ0MsRUFBRTs7Ozs7O3dHQUVmaEIsc0RBQUk7Z0NBQ0gwQixVQUFVLEVBQUUsQ0FBQztvQ0FDWHNELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCM0MsS0FBSyxFQUFFL0Isb0VBQW9DO2dDQUM3QyxDQUFDO2dDQUNEb0UsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUdqQ3BFLFFBQVEsQ0FBQ0UsS0FBSzs7ZUF4Q1ZGLFFBQVEsQ0FBQ3FFLEVBQUU7Ozs7O1FBMkN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BL0RRbEMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxuY29uc3QgU1VQQUJBU0VfQU5PTl9LRVkgPSAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpNeU1EYzVNaXdpWlhod0lqb3hPVFU0T0RrMk56a3lmUS5tSkoyRDNoSlhmRTBUVkgydGcwOHVBU0QydndjMzBnVDdrQmlwWmRnRm1vJ1xyXG5jb25zdCBTVVBBQkFTRV9VUkwgPSAnaHR0cHM6Ly9sc3lvb2tjdmx2ZXd2YW5nc2xsdy5zdXBhYmFzZS5jbydcclxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBBQkFTRV9BTk9OX0tFWSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgLy8gU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbSwgc2V0TGlzdGFEZU1lbnNhZ2VtXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyAuL1N1YSBsw7NnaWNhIHZhaSBhcXVpXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3VwYWJhc2VDbGllbnRcclxuICAgIC5mcm9tKCdtZW5zYWdlbnMnKVxyXG4gICAgLnNlbGVjdCgnKicpXHJcbiAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgIHNldExpc3RhRGVNZW5zYWdlbShkYXRhKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuIFxyXG4gIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbSAobm92YU1lbnNhZ2VtKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnNhZ2VtID0ge1xyXG4gICAgICBkZTogJ29tYXJpb3NvdXRvJyxcclxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcclxuICAgIH07XHJcblxyXG4gICAgc3VwYWJhc2VDbGllbnRcclxuICAgIC5mcm9tKCdtZW5zYWdlbScpXHJcbiAgICAuaW5zZXJ0KFtcclxuICAgICAgbWVuc2FnZW1cclxuICAgIF0pXHJcbiAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgIHNldExpc3RhRGVNZW5zYWdlbShbbWVuc2FnZW0sIFxyXG4gICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbSxcclxuICAgIF0pXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiBcIjk1dmhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFEZU1lbnNhZ2VtfSAvPiBcclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSh2YWxvcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzgwMCddLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzIwMCddLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICBjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcclxuICAgICAgICAgIGxhYmVsPVwiTG9nb3V0XCJcclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCJNZXNzYWdlTGlzdFwiLCBwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgdGFnPVwidWxcIlxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZW5cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cclxuICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHttZW5zYWdlbS5kZX0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJjcmVhdGVDbGllbnQiLCJTVVBBQkFTRV9BTk9OX0tFWSIsIlNVUEFCQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiQ2hhdFBhZ2UiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImRlIiwidGV4dG8iLCJmcm9tIiwiaW5zZXJ0IiwidGhlbiIsImRhdGEiLCJzZXRMaXN0YURlTWVuc2FnZW0iLCJsaXN0YURlTWVuc2FnZW0iLCJzZXRNZXNzYWdlIiwic2VsZWN0Iiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbG9yIiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsImhyZWYiLCJwcm9wcyIsInRhZyIsIm92ZXJmbG93IiwibWFwIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});