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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.ts\");\n/*\r\nTODO: Change the findMany() to findUnique on the user's id\r\n\r\n*/ \nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.todo.findMany();\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    } else if (req.method === \"POST\") {\n        const todo = JSON.parse(req.body);\n        if (todo.user_id === \"\" || todo.name === \"\") return res.status(500).json(\"User id and name cant be empty\");\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.todo.create({\n                data: {\n                    list_id: todo.list_id,\n                    user_id: todo.user_id,\n                    name: todo.name,\n                    description: todo.description,\n                    due_date: todo.due_date,\n                    completed: todo.completed\n                }\n            });\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBR0EsR0FJK0M7QUFXaEMsZUFBZUMsUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDdEIsSUFBSTtZQUNBLE1BQU1DLE9BQU8sTUFBTUwsZ0VBQW9CTztZQUN2QyxPQUFPSixJQUFJSyxPQUFPLEtBQUtDLEtBQUtKO1FBQ2hDLEVBQUUsT0FBT0ssS0FBVTtZQUNmLE9BQU9QLElBQUlLLE9BQU8sS0FBS0MsS0FBS0M7UUFDaEM7SUFDSixPQUFPLElBQUlSLElBQUlFLFdBQVcsUUFBUTtRQUM5QixNQUFNRSxPQUFpQkssS0FBS0MsTUFBTVYsSUFBSVc7UUFFdEMsSUFBSVAsS0FBS1EsWUFBWSxNQUFNUixLQUFLUyxTQUFTLElBQ3JDLE9BQU9aLElBQUlLLE9BQU8sS0FBS0MsS0FBSztRQUVoQyxJQUFJO1lBQ0EsTUFBTUosT0FBTyxNQUFNTCw4REFBa0JnQixDQUFDO2dCQUNsQ1gsTUFBTTtvQkFDRlksU0FBU1gsS0FBS1c7b0JBQ2RILFNBQVNSLEtBQUtRO29CQUNkQyxNQUFNVCxLQUFLUztvQkFDWEcsYUFBYVosS0FBS1k7b0JBQ2xCQyxVQUFVYixLQUFLYTtvQkFDZkMsV0FBV2QsS0FBS2M7Z0JBQ3BCO1lBQ0o7WUFDQSxPQUFPakIsSUFBSUssT0FBTyxLQUFLQyxLQUFLSjtRQUNoQyxFQUFFLE9BQU9LLEtBQVU7WUFDZixPQUFPUCxJQUFJSyxPQUFPLEtBQUtDLEtBQUtDO1FBQ2hDO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL29uZWR1ZS8uL3BhZ2VzL2FwaS90b2Rvcy9pbmRleC50cz8wMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRPRE86IENoYW5nZSB0aGUgZmluZE1hbnkoKSB0byBmaW5kVW5pcXVlIG9uIHRoZSB1c2VyJ3MgaWRcclxuXHJcbiovXHJcblxyXG5cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2NsaWVudCdcclxuXHJcbmludGVyZmFjZSBwb3N0VG9kbyB7XHJcbiAgICBsaXN0X2lkPzogc3RyaW5nO1xyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBkdWVfZGF0ZT86IERhdGU7XHJcbiAgICBjb21wbGV0ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRNYW55KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IHRvZG86IHBvc3RUb2RvID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcblxyXG4gICAgICAgIGlmICh0b2RvLnVzZXJfaWQgPT09IFwiXCIgfHwgdG9kby5uYW1lID09PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oXCJVc2VyIGlkIGFuZCBuYW1lIGNhbnQgYmUgZW1wdHlcIilcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS50b2RvLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9pZDogdG9kby5saXN0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRvZG8udXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0b2RvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZHVlX2RhdGU6IHRvZG8uZHVlX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJ0b2RvIiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInVzZXJfaWQiLCJuYW1lIiwiY3JlYXRlIiwibGlzdF9pZCIsImRlc2NyaXB0aW9uIiwiZHVlX2RhdGUiLCJjb21wbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();