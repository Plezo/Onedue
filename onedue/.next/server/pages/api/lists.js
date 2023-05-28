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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.list.findMany();\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    } else if (req.method === \"POST\") {\n        const list = req.body;\n        console.log(list);\n        if (list.user_id === \"\" || list.list_name === \"\") return res.status(500).json(\"User id and name cant be empty\");\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.list.create({\n                data: {\n                    user_id: list.user_id,\n                    name: list.list_name\n                }\n            });\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDK0M7QUFPaEMsZUFBZUMsUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDdEIsSUFBSTtZQUNBLE1BQU1DLE9BQU8sTUFBTUwsZ0VBQW9CTztZQUN2QyxPQUFPSixJQUFJSyxPQUFPLEtBQUtDLEtBQUtKO1FBQ2hDLEVBQUUsT0FBT0ssS0FBVTtZQUNmLE9BQU9QLElBQUlLLE9BQU8sS0FBS0MsS0FBS0M7UUFDaEM7SUFDSixPQUFPLElBQUlSLElBQUlFLFdBQVcsUUFBUTtRQUU5QixNQUFNRSxPQUFpQkosSUFBSVM7UUFFM0JDLFFBQVFDLElBQUlQO1FBRVosSUFBSUEsS0FBS1EsWUFBWSxNQUFNUixLQUFLUyxjQUFjLElBQzFDLE9BQU9aLElBQUlLLE9BQU8sS0FBS0MsS0FBSztRQUVoQyxJQUFJO1lBQ0EsTUFBTUosT0FBTyxNQUFNTCw4REFBa0JnQixDQUFDO2dCQUNsQ1gsTUFBTTtvQkFDRlMsU0FBU1IsS0FBS1E7b0JBQ2RHLE1BQU1YLEtBQUtTO2dCQUNmO1lBQ0o7WUFDQSxPQUFPWixJQUFJSyxPQUFPLEtBQUtDLEtBQUtKO1FBQ2hDLEVBQUUsT0FBT0ssS0FBVTtZQUNmLE9BQU9QLElBQUlLLE9BQU8sS0FBS0MsS0FBS0M7UUFDaEM7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25lZHVlLy4vcGFnZXMvYXBpL2xpc3RzL2luZGV4LnRzPzMyZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2NsaWVudCdcclxuXHJcbmludGVyZmFjZSBwb3N0TGlzdCB7XHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBsaXN0X25hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGlzdC5maW5kTWFueSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdDogcG9zdExpc3QgPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobGlzdClcclxuXHJcbiAgICAgICAgaWYgKGxpc3QudXNlcl9pZCA9PT0gXCJcIiB8fCBsaXN0Lmxpc3RfbmFtZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKFwiVXNlciBpZCBhbmQgbmFtZSBjYW50IGJlIGVtcHR5XCIpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGlzdC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGxpc3QudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBsaXN0Lmxpc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJsaXN0IiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyX2lkIiwibGlzdF9uYW1lIiwiY3JlYXRlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/lists/index.ts\n");

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