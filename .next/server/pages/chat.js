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
exports.id = "pages/chat";
exports.ids = ["pages/chat"];
exports.modules = {

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyMDc5MiwiZXhwIjoxOTU4ODk2NzkyfQ.mJJ2D3hJXfE0TVH2tg08uASD2vwc30gT7kBipZdgFmo';\nconst SUPABASE_URL = 'https://lsyookcvlvewvangsllw.supabase.co';\nconst supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    // Sua lógica vai aqui\n    const { 0: mensagem1 , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { 0: listaDeMensagem , 1: setListaDeMensagem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // ./Sua lógica vai aqui\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        supabaseClient.from('mensagens').select('*').order('id', {\n            ascending: false\n        }).then(({ data  })=>{\n            setListaDeMensagem(data);\n        });\n    }, []);\n    function handleNovaMensagem(novaMensagem) {\n        const mensagem = {\n            de: 'omariosouto',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            mensagem\n        ]).then(({ data  })=>{\n            setListaDeMensagem([\n                data[0],\n                ...listaDeMensagem, \n            ]);\n        });\n        setMessage(\"\");\n    }\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagem\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: (event)=>{\n                                    console.log(event.target.value);\n                                    const valor = event.target.value;\n                                    setMessage(valor);\n                                },\n                                onKeyPress: (event)=>{\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n};\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\nfunction MessageList(props) {\n    console.log(\"MessageList\", props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map((mensagem)=>{\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: `https://github.com/${mensagem.de}.png`\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 193,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 203,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 206,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 188,\n                        columnNumber: 13\n                    }, this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 176,\n                columnNumber: 11\n            }, this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\riquelme araujo\\\\Documents\\\\AluraImers\\xe3oReact\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBRzt3QkFDRjZCLFVBQVUsRUFBRSxDQUFDOzRCQUNYMkMsWUFBWSxFQUFFLENBQUs7d0JBQ3JCLENBQUM7O3dHQUVBckUsdURBQUs7Z0NBQ0owQixVQUFVLEVBQUUsQ0FBQztvQ0FDWHVDLEtBQUssRUFBRSxDQUFNO29DQUNickIsTUFBTSxFQUFFLENBQU07b0NBQ2RELFlBQVksRUFBRSxDQUFLO29DQUNuQmhCLE9BQU8sRUFBRSxDQUFjO29DQUN2QnlDLFdBQVcsRUFBRSxDQUFLO2dDQUNwQixDQUFDO2dDQUNEVyxHQUFHLEdBQUcsbUJBQW1CLEVBQUVwRSxRQUFRLENBQUNZLEVBQUUsQ0FBQyxJQUFJOzs7Ozs7d0dBRTVDekIsc0RBQUk7Z0NBQUM2RSxHQUFHLEVBQUMsQ0FBUTswQ0FDYmhFLFFBQVEsQ0FBQ1ksRUFBRTs7Ozs7O3dHQUVmekIsc0RBQUk7Z0NBQ0g0QixVQUFVLEVBQUUsQ0FBQztvQ0FDWHNELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCM0MsS0FBSyxFQUFFakMsb0VBQW9DO2dDQUM3QyxDQUFDO2dDQUNEc0UsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUdqQ3hFLFFBQVEsQ0FBQ2EsS0FBSzs7ZUF4Q1ZiLFFBQVEsQ0FBQ3lFLEVBQUU7Ozs7O1FBMkN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx1cmFjb3JkLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IFNVUEFCQVNFX0FOT05fS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16TXlNRGM1TWl3aVpYaHdJam94T1RVNE9EazJOemt5ZlEubUpKMkQzaEpYZkUwVFZIMnRnMDh1QVNEMnZ3YzMwZ1Q3a0JpcFpkZ0ZtbydcclxuY29uc3QgU1VQQUJBU0VfVVJMID0gJ2h0dHBzOi8vbHN5b29rY3ZsdmV3dmFuZ3NsbHcuc3VwYWJhc2UuY28nXHJcbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gIC8vIFN1YSBsw7NnaWNhIHZhaSBhcXVpXHJcbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsaXN0YURlTWVuc2FnZW0sIHNldExpc3RhRGVNZW5zYWdlbV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gLi9TdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAuZnJvbSgnbWVuc2FnZW5zJylcclxuICAgIC5zZWxlY3QoJyonKVxyXG4gICAgLm9yZGVyKCdpZCcsIHthc2NlbmRpbmc6IGZhbHNlfSlcclxuICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VtKGRhdGEpXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiBcclxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0gKG5vdmFNZW5zYWdlbSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHtcclxuICAgICAgZGU6ICdvbWFyaW9zb3V0bycsXHJcbiAgICAgIHRleHRvOiBub3ZhTWVuc2FnZW0sXHJcbiAgICB9O1xyXG5cclxuICAgIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAuZnJvbSgnbWVuc2FnZW5zJylcclxuICAgIC5pbnNlcnQoW1xyXG4gICAgICBtZW5zYWdlbVxyXG4gICAgXSlcclxuICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW0oW1xyXG4gICAgICAgICAgZGF0YVswXSwgXHJcbiAgICAgICAgICAuLi5saXN0YURlTWVuc2FnZW0sXHJcbiAgICAgXSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI5NSVcIixcclxuICAgICAgICAgIG1heEhlaWdodDogXCI5NXZoXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbX0gLz4gXHJcblxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UodmFsb3IpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWyc4MDAnXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycyMDAnXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgY29sb3JWYXJpYW50PVwibmV1dHJhbFwiXHJcbiAgICAgICAgICBsYWJlbD1cIkxvZ291dFwiXHJcbiAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiTWVzc2FnZUxpc3RcIiwgcHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHRhZz1cInVsXCJcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxyXG4gICAgICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCI3MDBcIl0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHttZW5zYWdlbS5kZX0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJjcmVhdGVDbGllbnQiLCJTVVBBQkFTRV9BTk9OX0tFWSIsIlNVUEFCQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiQ2hhdFBhZ2UiLCJtZW5zYWdlbSIsInNldE1lc3NhZ2UiLCJsaXN0YURlTWVuc2FnZW0iLCJzZXRMaXN0YURlTWVuc2FnZW0iLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJ0aGVuIiwiZGF0YSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsImRlIiwidGV4dG8iLCJpbnNlcnQiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsb3IiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

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

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Matrix (peas)","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/chat.js"));
module.exports = __webpack_exports__;

})();