"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/hero-section.tsx":
/*!*****************************************!*\
  !*** ./src/components/hero-section.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generated___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__generated__ */ \"./src/__generated__/index.ts\");\n\n\n// Function to strip out all HTML tags and keep only the text content\nfunction stripHtmlTags(html) {\n    return html.replace(/<[^>]*>?/gm, \"\"); // This removes all HTML tags\n}\nfunction HeroSection(param) {\n    let { heroTitle, heroDescription, heroCta } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-primary banner-section pt-[80px] pb-[320px] \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"banner_inner_section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    class: \"font-bold text-[70px] text-center leading-tight\",\n                    dangerouslySetInnerHTML: {\n                        __html: heroTitle\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"hero_description font-normal text-[22px] text-center leading-[34px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            heroDescription\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 10\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"cta_btutton banner-button text-center flex justify-center\",\n                    children: [\n                        heroCta && heroCta.ctaText && heroCta.ctaLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: heroCta.ctaLink.url,\n                            target: heroCta.ctaLink.target,\n                            title: heroCta.ctaLink.title,\n                            className: \"home-btn banner-btn uppercase text-center pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[20px] font-bold\",\n                            children: heroCta.ctaText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        \"        \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\wordpressprojects\\\\nickel-bronx-typescript\\\\src\\\\components\\\\hero-section.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c = HeroSection;\nHeroSection.fragments = {\n    heroSectionFragments: (0,_generated___WEBPACK_IMPORTED_MODULE_1__.gql)(\"\\n        fragment HeroSectionBlocks on HeroSectionBlocks {\\n            __typename\\n            heroDescription\\n            heroTitle\\n            heroCta {\\n            ctaLink {\\n              target\\n              title\\n              url\\n            }\\n            ctaText\\n          }\\n        }\\n    \")\n};\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZXJvLXNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBY3ZDLHFFQUFxRTtBQUNyRSxTQUFTQyxjQUFjQyxJQUFZO0lBQ2pDLE9BQU9BLEtBQUtDLE9BQU8sQ0FBQyxjQUFjLEtBQUssNkJBQTZCO0FBQ3RFO0FBQ2UsU0FBU0MsWUFBYSxLQUEwRDtRQUExRCxFQUFFQyxTQUFTLEVBQUVDLGVBQWUsRUFBRUMsT0FBTyxFQUFxQixHQUExRDtJQUNqQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtrQkFDbkIsNEVBQUNDO1lBQUlDLE9BQU07OzhCQUNDLDhEQUFDQztvQkFBR0QsT0FBTTtvQkFBa0RFLHlCQUF5Qjt3QkFBRUMsUUFBUVQ7b0JBQVU7Ozs7Ozs4QkFFbkgsOERBQUNLO29CQUFJQyxPQUFNOzhCQUNWLDRFQUFDSTs7NEJBQUU7NEJBQUVUOzs7Ozs7Ozs7Ozs7OEJBRU4sOERBQUNJO29CQUFJQyxPQUFNOzt3QkFDUkosV0FBV0EsUUFBUVMsT0FBTyxJQUFJVCxRQUFRVSxPQUFPLGtCQUM1Qyw4REFBQ0M7NEJBQ0NDLE1BQU1aLFFBQVFVLE9BQU8sQ0FBQ0csR0FBRzs0QkFDekJDLFFBQVFkLFFBQVFVLE9BQU8sQ0FBQ0ksTUFBTTs0QkFDOUJDLE9BQU9mLFFBQVFVLE9BQU8sQ0FBQ0ssS0FBSzs0QkFDNUJiLFdBQVU7c0NBRVRGLFFBQVFTLE9BQU87Ozs7Ozt3QkFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlWO0tBdkJzQlo7QUF5QnRCQSxZQUFZbUIsU0FBUyxHQUFHO0lBQ3RCQyxzQkFBc0J4QixnREFBR0EsQ0FBRTtBQWU3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZXJvLXNlY3Rpb24udHN4P2ZkODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIi4uL19fZ2VuZXJhdGVkX19cIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBIZXJvU2VjdGlvbkJsb2Nrc1xyXG59IGZyb20gXCIuLi9fX2dlbmVyYXRlZF9fL2dyYXBocWxcIjtcclxuXHJcblxyXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XHJcbiAgICBoZXJvQ3RhOiBIZXJvU2VjdGlvbkJsb2Nrc1snaGVyb0N0YSddLFxyXG4gICAgaGVyb1RpdGxlOiBIZXJvU2VjdGlvbkJsb2Nrc1snaGVyb1RpdGxlJ10sXHJcbiAgICBoZXJvRGVzY3JpcHRpb246IEhlcm9TZWN0aW9uQmxvY2tzWydoZXJvRGVzY3JpcHRpb24nXVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzdHJpcCBvdXQgYWxsIEhUTUwgdGFncyBhbmQga2VlcCBvbmx5IHRoZSB0ZXh0IGNvbnRlbnRcclxuZnVuY3Rpb24gc3RyaXBIdG1sVGFncyhodG1sOiBzdHJpbmcpIHtcclxuICByZXR1cm4gaHRtbC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpOyAvLyBUaGlzIHJlbW92ZXMgYWxsIEhUTUwgdGFnc1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9TZWN0aW9uKCB7IGhlcm9UaXRsZSwgaGVyb0Rlc2NyaXB0aW9uLCBoZXJvQ3RhIH0gOiBIZXJvU2VjdGlvblByb3BzICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBiYW5uZXItc2VjdGlvbiBwdC1bODBweF0gcGItWzMyMHB4XSBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJhbm5lcl9pbm5lcl9zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LVs3MHB4XSB0ZXh0LWNlbnRlciBsZWFkaW5nLXRpZ2h0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBoZXJvVGl0bGUgfX0gLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlcm9fZGVzY3JpcHRpb24gZm9udC1ub3JtYWwgdGV4dC1bMjJweF0gdGV4dC1jZW50ZXIgbGVhZGluZy1bMzRweF1cIj5cclxuICAgICAgICAgPHA+IHtoZXJvRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdGFfYnR1dHRvbiBiYW5uZXItYnV0dG9uIHRleHQtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIHtoZXJvQ3RhICYmIGhlcm9DdGEuY3RhVGV4dCAmJiBoZXJvQ3RhLmN0YUxpbmsgJiYgKFxyXG4gICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICBocmVmPXtoZXJvQ3RhLmN0YUxpbmsudXJsfSBcclxuICAgICAgICAgICAgICB0YXJnZXQ9e2hlcm9DdGEuY3RhTGluay50YXJnZXR9IFxyXG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvQ3RhLmN0YUxpbmsudGl0bGV9IFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWUtYnRuIGJhbm5lci1idG4gdXBwZXJjYXNlIHRleHQtY2VudGVyIHB0LVsxMHB4XSBwYi1bMTBweF0gcGwtWzI1cHhdIHByLVsyNXB4XSB0ZXh0LVsyMHB4XSBmb250LWJvbGRcIiBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtoZXJvQ3RhLmN0YVRleHR9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9ICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEhlcm9TZWN0aW9uLmZyYWdtZW50cyA9IHtcclxuICAgIGhlcm9TZWN0aW9uRnJhZ21lbnRzOiBncWwoYFxyXG4gICAgICAgIGZyYWdtZW50IEhlcm9TZWN0aW9uQmxvY2tzIG9uIEhlcm9TZWN0aW9uQmxvY2tzIHtcclxuICAgICAgICAgICAgX190eXBlbmFtZVxyXG4gICAgICAgICAgICBoZXJvRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgaGVyb1RpdGxlXHJcbiAgICAgICAgICAgIGhlcm9DdGEge1xyXG4gICAgICAgICAgICBjdGFMaW5rIHtcclxuICAgICAgICAgICAgICB0YXJnZXRcclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0YVRleHRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgKSxcclxuICB9Il0sIm5hbWVzIjpbImdxbCIsInN0cmlwSHRtbFRhZ3MiLCJodG1sIiwicmVwbGFjZSIsIkhlcm9TZWN0aW9uIiwiaGVyb1RpdGxlIiwiaGVyb0Rlc2NyaXB0aW9uIiwiaGVyb0N0YSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzcyIsImgxIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJwIiwiY3RhVGV4dCIsImN0YUxpbmsiLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsInRpdGxlIiwiZnJhZ21lbnRzIiwiaGVyb1NlY3Rpb25GcmFnbWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/hero-section.tsx\n"));

/***/ })

});