"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[code2]",{

/***/ "./src/sections/home/Trend/Trend.tsx":
/*!*******************************************!*\
  !*** ./src/sections/home/Trend/Trend.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trend: function() { return /* binding */ Trend; }\n/* harmony export */ });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/helpers */ \"./src/utils/helpers/index.ts\");\n/* harmony import */ var _CarouselShoes_CarouselShoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CarouselShoes/CarouselShoes */ \"./src/sections/home/CarouselShoes/CarouselShoes.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\hwapedro\\\\Desktop\\\\projects\\\\nike-shop\\\\src\\\\sections\\\\home\\\\Trend\\\\Trend.tsx\",\n    _this = undefined;\n\n\n\n\nvar Trend = function Trend(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    className: \"mt-[5rem] flex flex-col items-center justify-between\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CarouselShoes_CarouselShoes__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n      title: data.sectionTitle,\n      items: data.shoes.data.map(function (shoe, index) {\n        return {\n          id: index,\n          title: shoe.attributes.name,\n          price: shoe.attributes.price,\n          type: shoe.attributes.type.data.attributes.name,\n          image: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.getFileUrl)(shoe.attributes.options[0].medias.data[0].attributes.url)\n        };\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }, _this);\n};\n_c = Trend;\n\nvar _c;\n\n$RefreshReg$(_c, \"Trend\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvaG9tZS9UcmVuZC9UcmVuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOztBQU9PLElBQU1FLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCO0VBQUEsSUFBR0MsSUFBSCxRQUFHQSxJQUFIO0VBQUEsb0JBQ3pDO0lBQVMsU0FBUyxFQUFDLHNEQUFuQjtJQUFBLHVCQUNFLDhEQUFDLGtFQUFEO01BQ0UsS0FBSyxFQUFFQSxJQUFJLENBQUNDLFlBRGQ7TUFFRSxLQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXRixJQUFYLENBQWdCRyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7UUFBQSxPQUFrQjtVQUMzQ0MsRUFBRSxFQUFFRCxLQUR1QztVQUUzQ0UsS0FBSyxFQUFFSCxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLElBRm9CO1VBRzNDQyxLQUFLLEVBQUVOLElBQUksQ0FBQ0ksVUFBTCxDQUFnQkUsS0FIb0I7VUFJM0NDLElBQUksRUFBRVAsSUFBSSxDQUFDSSxVQUFMLENBQWdCRyxJQUFoQixDQUFxQlgsSUFBckIsQ0FBMEJRLFVBQTFCLENBQXFDQyxJQUpBO1VBSzNDRyxLQUFLLEVBQUVmLDBEQUFVLENBQUNPLElBQUksQ0FBQ0ksVUFBTCxDQUFnQkssT0FBaEIsQ0FBd0IsQ0FBeEIsRUFBMkJDLE1BQTNCLENBQWtDZCxJQUFsQyxDQUF1QyxDQUF2QyxFQUEwQ1EsVUFBMUMsQ0FBcURPLEdBQXREO1FBTDBCLENBQWxCO01BQUEsQ0FBcEI7SUFGVDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUR5QztBQUFBLENBQXBDO0tBQU1oQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvaG9tZS9UcmVuZC9UcmVuZC50c3g/NmI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdldFNlY3Rpb25UcmVuZFF1ZXJ5IH0gZnJvbSAnQC9ncWwnO1xyXG5pbXBvcnQgeyBnZXRGaWxlVXJsIH0gZnJvbSAnQC91dGlscy9oZWxwZXJzJztcclxuXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi4vQ2Fyb3VzZWxTaG9lcy9DYXJvdXNlbFNob2VzJztcclxuXHJcbnR5cGUgU2VjdGlvblRyZW5kRGF0YSA9IEdldFNlY3Rpb25UcmVuZFF1ZXJ5WydzZWN0aW9uVHJlbmQnXVsnZGF0YSddWydhdHRyaWJ1dGVzJ107XHJcbmludGVyZmFjZSBUcmVuZFByb3BzIHtcclxuICBkYXRhOiBTZWN0aW9uVHJlbmREYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbmQ6IFJlYWN0LkZDPFRyZW5kUHJvcHM+ID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtdC1bNXJlbV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICB0aXRsZT17ZGF0YS5zZWN0aW9uVGl0bGV9XHJcbiAgICAgIGl0ZW1zPXtkYXRhLnNob2VzLmRhdGEubWFwKChzaG9lLCBpbmRleCkgPT4gKHtcclxuICAgICAgICBpZDogaW5kZXgsXHJcbiAgICAgICAgdGl0bGU6IHNob2UuYXR0cmlidXRlcy5uYW1lLFxyXG4gICAgICAgIHByaWNlOiBzaG9lLmF0dHJpYnV0ZXMucHJpY2UsXHJcbiAgICAgICAgdHlwZTogc2hvZS5hdHRyaWJ1dGVzLnR5cGUuZGF0YS5hdHRyaWJ1dGVzLm5hbWUsXHJcbiAgICAgICAgaW1hZ2U6IGdldEZpbGVVcmwoc2hvZS5hdHRyaWJ1dGVzLm9wdGlvbnNbMF0ubWVkaWFzLmRhdGFbMF0uYXR0cmlidXRlcy51cmwpXHJcbiAgICAgIH0pKX1cclxuICAgIC8+XHJcbiAgPC9zZWN0aW9uPlxyXG4pO1xyXG4iXSwibmFtZXMiOlsiZ2V0RmlsZVVybCIsIkNhcm91c2VsIiwiVHJlbmQiLCJkYXRhIiwic2VjdGlvblRpdGxlIiwic2hvZXMiLCJtYXAiLCJzaG9lIiwiaW5kZXgiLCJpZCIsInRpdGxlIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJwcmljZSIsInR5cGUiLCJpbWFnZSIsIm9wdGlvbnMiLCJtZWRpYXMiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/home/Trend/Trend.tsx\n"));

/***/ })

});