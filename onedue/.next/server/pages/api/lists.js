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
exports.id = "pages/api/lists";
exports.ids = ["pages/api/lists"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/lists/index.ts":
/*!**********************************!*\
  !*** ./pages/api/lists/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.list.findMany({\n                include: {\n                    todos: true\n                }\n            });\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    } else if (req.method === \"POST\") {\n        const list = JSON.parse(req.body);\n        if (list.user_id === \"\" || list.name === \"\") return res.status(500).json(\"User id and name cant be empty\");\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.list.create({\n                data: {\n                    user_id: list.user_id,\n                    name: list.name\n                }\n            });\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDK0M7QUFRaEMsZUFBZUMsUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDdEIsSUFBSTtZQUNBLE1BQU1DLE9BQU8sTUFBTUwsZ0VBQW9CTyxDQUFDO2dCQUNwQ0MsU0FBUztvQkFDTEMsT0FBTztnQkFDWDtZQUNKO1lBQ0EsT0FBT04sSUFBSU8sT0FBTyxLQUFLQyxLQUFLTjtRQUNoQyxFQUFFLE9BQU9PLEtBQVU7WUFDZixPQUFPVCxJQUFJTyxPQUFPLEtBQUtDLEtBQUtDO1FBQ2hDO0lBQ0osT0FBTyxJQUFJVixJQUFJRSxXQUFXLFFBQVE7UUFDOUIsTUFBTUUsT0FBaUJPLEtBQUtDLE1BQU1aLElBQUlhO1FBRXRDLElBQUlULEtBQUtVLFlBQVksTUFBTVYsS0FBS1csU0FBUyxJQUNyQyxPQUFPZCxJQUFJTyxPQUFPLEtBQUtDLEtBQUs7UUFFaEMsSUFBSTtZQUNBLE1BQU1OLE9BQU8sTUFBTUwsOERBQWtCa0IsQ0FBQztnQkFDbENiLE1BQU07b0JBQ0ZXLFNBQVNWLEtBQUtVO29CQUNkQyxNQUFNWCxLQUFLVztnQkFDZjtZQUNKO1lBQ0EsT0FBT2QsSUFBSU8sT0FBTyxLQUFLQyxLQUFLTjtRQUNoQyxFQUFFLE9BQU9PLEtBQVU7WUFDZixPQUFPVCxJQUFJTyxPQUFPLEtBQUtDLEtBQUtDO1FBQ2hDO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL29uZWR1ZS8uL3BhZ2VzL2FwaS9saXN0cy9pbmRleC50cz8zMmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi8uLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBwb3N0TGlzdCB7XHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLmxpc3QuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBsaXN0OiBwb3N0TGlzdCA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICBpZiAobGlzdC51c2VyX2lkID09PSBcIlwiIHx8IGxpc3QubmFtZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKFwiVXNlciBpZCBhbmQgbmFtZSBjYW50IGJlIGVtcHR5XCIpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGlzdC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGxpc3QudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBsaXN0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwibGlzdCIsImZpbmRNYW55IiwiaW5jbHVkZSIsInRvZG9zIiwic3RhdHVzIiwianNvbiIsImVyciIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJ1c2VyX2lkIiwibmFtZSIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/lists/index.ts\n");

/***/ }),

/***/ "(api)/./prisma/client.ts":
/*!**************************!*\
  !*** ./prisma/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsVUFBVSxJQUFJSCx3REFBWUEsR0FBRTtBQUVsRSxJQUFJSSxJQUFxQyxFQUFFSCxnQkFBZ0JFLFNBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25lZHVlLy4vcHJpc21hL2NsaWVudC50cz9kYjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMge1xyXG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./prisma/client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lists/index.ts"));
module.exports = __webpack_exports__;

})();