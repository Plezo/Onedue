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
exports.id = "pages/api/lists/[id]";
exports.ids = ["pages/api/lists/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/lists/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/lists/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const list = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.list.findUnique({\n                where: {\n                    id: String(req.query.id)\n                }\n            });\n            if (list !== null) return res.status(200).json(list);\n            else return res.status(404).send({\n                error: \"List not found\"\n            });\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    } else if (req.method === \"DELETE\") {\n        const list = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.list[\"delete\"]({\n            where: {\n                id: String(req.query.id)\n            }\n        });\n        return res.status(200).json(list);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdHMvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMrQztBQUVoQyxlQUFlQyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN0QixJQUFJO1lBQ0EsTUFBTUMsT0FBTyxNQUFNTCxrRUFBc0JNLENBQUM7Z0JBQ3RDQyxPQUFPO29CQUNIQyxJQUFJQyxPQUFPUCxJQUFJUSxNQUFNRjtnQkFDekI7WUFDSjtZQUVBLElBQUlILFNBQVMsTUFDVCxPQUFPRixJQUFJUSxPQUFPLEtBQUtDLEtBQUtQO2lCQUU1QixPQUFPRixJQUFJUSxPQUFPLEtBQUtFLEtBQUs7Z0JBQUVDLE9BQU87WUFBaUI7UUFDOUQsRUFBRSxPQUFPQyxLQUFVO1lBQ2YsT0FBT1osSUFBSVEsT0FBTyxLQUFLQyxLQUFLRztRQUNoQztJQUNKLE9BQU8sSUFBSWIsSUFBSUUsV0FBVyxVQUFVO1FBQ2hDLE1BQU1DLE9BQU8sTUFBTUwsaUVBQWtCZ0IsQ0FBQztZQUNsQ1QsT0FBTztnQkFDSEMsSUFBSUMsT0FBT1AsSUFBSVEsTUFBTUY7WUFDekI7UUFDSjtRQUNBLE9BQU9MLElBQUlRLE9BQU8sS0FBS0MsS0FBS1A7SUFDaEM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL29uZWR1ZS8uL3BhZ2VzL2FwaS9saXN0cy9baWRdLnRzP2YyYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgcHJpc21hLmxpc3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBTdHJpbmcocmVxLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsaXN0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3QpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJMaXN0IG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgcHJpc21hLmxpc3QuZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBTdHJpbmcocmVxLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3QpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJsaXN0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJTdHJpbmciLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJzZW5kIiwiZXJyb3IiLCJlcnIiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lists/[id].ts\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lists/[id].ts"));
module.exports = __webpack_exports__;

})();