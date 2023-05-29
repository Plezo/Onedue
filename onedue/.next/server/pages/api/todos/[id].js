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
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const todo = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.todo.findUnique({\n                where: {\n                    id: String(req.query.id)\n                }\n            });\n            if (todo !== null) return res.status(200).json(todo);\n            else return res.status(404).send({\n                error: \"Todo not found\"\n            });\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    } else if (req.method === \"DELETE\") {\n        try {\n            const todo = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.todo[\"delete\"]({\n                where: {\n                    id: String(req.query.id)\n                }\n            });\n            return res.status(200).json(todo);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    } else if (req.method === \"PATCH\") {\n        const data = JSON.parse(req.body);\n        try {\n            const todo = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.prisma.todo.update({\n                where: {\n                    id: String(req.query.id)\n                },\n                data: data\n            });\n            return res.status(200).json(todo);\n        } catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMrQztBQUVoQyxlQUFlQyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN0QixJQUFJO1lBQ0EsTUFBTUMsT0FBTyxNQUFNTCxrRUFBc0JNLENBQUM7Z0JBQ3RDQyxPQUFPO29CQUNIQyxJQUFJQyxPQUFPUCxJQUFJUSxNQUFNRjtnQkFDekI7WUFDSjtZQUVBLElBQUlILFNBQVMsTUFDVCxPQUFPRixJQUFJUSxPQUFPLEtBQUtDLEtBQUtQO2lCQUU1QixPQUFPRixJQUFJUSxPQUFPLEtBQUtFLEtBQUs7Z0JBQUVDLE9BQU87WUFBaUI7UUFDOUQsRUFBRSxPQUFPQyxLQUFVO1lBQ2YsT0FBT1osSUFBSVEsT0FBTyxLQUFLQyxLQUFLRztRQUNoQztJQUNKLE9BQU8sSUFBSWIsSUFBSUUsV0FBVyxVQUFVO1FBQ2hDLElBQUk7WUFDQSxNQUFNQyxPQUFPLE1BQU1MLGlFQUFrQmdCLENBQUM7Z0JBQ2xDVCxPQUFPO29CQUNIQyxJQUFJQyxPQUFPUCxJQUFJUSxNQUFNRjtnQkFDekI7WUFDSjtZQUNBLE9BQU9MLElBQUlRLE9BQU8sS0FBS0MsS0FBS1A7UUFDaEMsRUFBRSxPQUFPVSxLQUFVO1lBQ2YsT0FBT1osSUFBSVEsT0FBTyxLQUFLQyxLQUFLRztRQUNoQztJQUNKLE9BQU8sSUFBSWIsSUFBSUUsV0FBVyxTQUFTO1FBQy9CLE1BQU1hLE9BQU9DLEtBQUtDLE1BQU1qQixJQUFJa0I7UUFFNUIsSUFBSTtZQUNBLE1BQU1mLE9BQU8sTUFBTUwsOERBQWtCcUIsQ0FBQztnQkFDbENkLE9BQU87b0JBQ0hDLElBQUlDLE9BQU9QLElBQUlRLE1BQU1GO2dCQUN6QjtnQkFDQVMsTUFBTUE7WUFDVjtZQUNBLE9BQU9kLElBQUlRLE9BQU8sS0FBS0MsS0FBS1A7UUFDaEMsRUFBRSxPQUFPVSxLQUFVO1lBQ2YsT0FBT1osSUFBSVEsT0FBTyxLQUFLQyxLQUFLRztRQUNoQztJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmVkdWUvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cz83Yjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9jbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogU3RyaW5nKHJlcS5xdWVyeS5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9kbyAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0b2RvKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiVG9kbyBub3QgZm91bmRcIiB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBTdHJpbmcocmVxLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvZG8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BBVENIJykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBTdHJpbmcocmVxLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0b2RvKTtcclxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG8iLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsIlN0cmluZyIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsInNlbmQiLCJlcnJvciIsImVyciIsImRlbGV0ZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5IiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();