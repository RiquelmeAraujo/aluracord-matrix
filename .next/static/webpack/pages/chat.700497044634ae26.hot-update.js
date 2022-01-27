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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyMDc5MiwiZXhwIjoxOTU4ODk2NzkyfQ.mJJ2D3hJXfE0TVH2tg08uASD2vwc30gT7kBipZdgFmo';\nvar SUPABASE_URL = 'https://lsyookcvlvewvangsllw.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            de: 'omariosouto',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            setListaDeMensagem([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagem)));\n        });\n        setMessage(\"\");\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), mensagem1 = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaDeMensagem = ref1[0], setListaDeMensagem = ref1[1];\n    // ./Sua lógica vai aqui\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        supabaseClient.from('mensagens').select('*').order('id', [\n            asce\n        ]).then(function(param) {\n            var data = param.data;\n            setListaDeMensagem(data);\n        });\n    }, []);\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagem\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    console.log(event.target.value);\n                                    var valor = event.target.value;\n                                    setMessage(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"qoEMEyUF9tVvyzdzzmE9ipX4skc=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(\"MessageList\", props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 193,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 203,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 206,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 188,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 176,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IFNVUEFCQVNFX0FOT05fS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16TXlNRGM1TWl3aVpYaHdJam94T1RVNE9EazJOemt5ZlEubUpKMkQzaEpYZkUwVFZIMnRnMDh1QVNEMnZ3YzMwZ1Q3a0JpcFpkZ0ZtbydcclxuY29uc3QgU1VQQUJBU0VfVVJMID0gJ2h0dHBzOi8vbHN5b29rY3ZsdmV3dmFuZ3NsbHcuc3VwYWJhc2UuY28nXHJcbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gIC8vIFN1YSBsw7NnaWNhIHZhaSBhcXVpXHJcbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsaXN0YURlTWVuc2FnZW0sIHNldExpc3RhRGVNZW5zYWdlbV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gLi9TdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAuZnJvbSgnbWVuc2FnZW5zJylcclxuICAgIC5zZWxlY3QoJyonKVxyXG4gICAgLm9yZGVyKCdpZCcsIFthc2NlXSlcclxuICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VtKGRhdGEpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG4gXHJcbiAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtIChub3ZhTWVuc2FnZW0pIHtcclxuICAgIFxyXG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XHJcbiAgICAgIGRlOiAnb21hcmlvc291dG8nLFxyXG4gICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdXBhYmFzZUNsaWVudFxyXG4gICAgLmZyb20oJ21lbnNhZ2VucycpXHJcbiAgICAuaW5zZXJ0KFtcclxuICAgICAgbWVuc2FnZW1cclxuICAgIF0pXHJcbiAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VtKFtcclxuICAgICAgICAgIGRhdGFbMF0sIFxyXG4gICAgICAgICAgLi4ubGlzdGFEZU1lbnNhZ2VtLFxyXG4gICAgIF0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgICAgICBtYXhIZWlnaHQ6IFwiOTV2aFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIzMnB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW19IC8+IFxyXG5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKHZhbG9yKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShtZW5zYWdlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCA4cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snODAwJ10sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMjAwJ10sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNVwiPkNoYXQ8L1RleHQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgIGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxyXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIk1lc3NhZ2VMaXN0XCIsIHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cclxuICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiNzAwXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7bWVuc2FnZW0uZGV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBwQ29uZmlnIiwiY3JlYXRlQ2xpZW50IiwiU1VQQUJBU0VfQU5PTl9LRVkiLCJTVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsIkNoYXRQYWdlIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW0iLCJkZSIsInRleHRvIiwiZnJvbSIsImluc2VydCIsInRoZW4iLCJkYXRhIiwic2V0TGlzdGFEZU1lbnNhZ2VtIiwibGlzdGFEZU1lbnNhZ2VtIiwic2V0TWVzc2FnZSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWxvciIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJ0YWciLCJvdmVyZmxvdyIsIm1hcCIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});