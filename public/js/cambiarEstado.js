/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cambiarEstado.js":
/*!*********************************!*\
  !*** ./src/js/cambiarEstado.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n(function () {\r\n  const cambiarEstadoBotones = document.querySelectorAll(\".cambiar-estado\");\r\n  const token = document\r\n    .querySelector('meta[name=\"csrf-token\"]')\r\n    .getAttribute(\"content\");\r\n\r\n  cambiarEstadoBotones.forEach((boton) => {\r\n    boton.addEventListener(\"click\", cambiarEstadoPropiedad);\r\n  });\r\n\r\n  // Inicial: si viene No Publicado, agregar link\r\n  cambiarEstadoBotones.forEach((boton) => {\r\n    if (boton.textContent.trim() === \"No Publicado\") {\r\n      agregarLinkEditar(boton);\r\n    }\r\n  });\r\n\r\n  function agregarLinkEditar(boton) {\r\n    const id = boton.dataset.propiedadId;\r\n\r\n    // evitar duplicados\r\n    if (\r\n      boton.nextElementSibling &&\r\n      boton.nextElementSibling.classList.contains(\"editar-imagen\")\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    const linkEditar = document.createElement(\"a\");\r\n    linkEditar.textContent = \"Editar Imagen\";\r\n    linkEditar.href = `propiedades/agregar-imagen/${id}`;\r\n    linkEditar.classList.add(\r\n      \"editar-imagen\",\r\n      \"text-center\",\r\n      \"px-2\",\r\n      \"py-2\",\r\n      \"md:py-1\",\r\n      \"text-xs\",\r\n      \"leading-5\",\r\n      \"font-semibold\",\r\n      \"rounded\",\r\n      \"cursor-pointer\",\r\n      \"bg-yellow-100\",\r\n      \"text-yellow-800\"\r\n    );\r\n\r\n    boton.after(linkEditar);\r\n  }\r\n\r\n  async function cambiarEstadoPropiedad(e) {\r\n    const { propiedadId: id } = e.target.dataset;\r\n\r\n    try {\r\n      const url = `/propiedades/${id}`;\r\n      const respuesta = await fetch(url, {\r\n        method: \"PUT\",\r\n        headers: {\r\n          \"CSRF-Token\": token,\r\n        },\r\n      });\r\n\r\n      const { resultado } = await respuesta.json();\r\n\r\n      if (resultado) {\r\n        if (e.target.classList.contains(\"bg-yellow-100\")) {\r\n          e.target.classList.add(\"bg-green-100\", \"text-green-800\");\r\n          e.target.classList.remove(\"bg-yellow-100\", \"text-yellow-800\");\r\n          e.target.textContent = \"Publicado\";\r\n\r\n          // eliminar el link de editar si existe\r\n          if (\r\n            e.target.nextElementSibling &&\r\n            e.target.nextElementSibling.classList.contains(\"editar-imagen\")\r\n          ) {\r\n            e.target.nextElementSibling.remove();\r\n          }\r\n        } else {\r\n          e.target.classList.remove(\"bg-green-100\", \"text-green-800\");\r\n          e.target.classList.add(\"bg-yellow-100\", \"text-yellow-800\");\r\n          e.target.textContent = \"No Publicado\";\r\n\r\n          // crear link para editar imagen\r\n          const linkEditar = document.createElement(\"a\");\r\n          linkEditar.textContent = \"Editar Imagen\";\r\n          linkEditar.href = `propiedades/agregar-imagen/${id}`;\r\n          linkEditar.classList.add(\r\n            \"editar-imagen\",\r\n            \"text-center\",\r\n            \"px-2\",\r\n            \"py-2\",\r\n            \"md:py-1\",\r\n            \"text-xs\",\r\n            \"leading-5\",\r\n            \"font-semibold\",\r\n            \"rounded\",\r\n            \"cursor-pointer\",\r\n            \"bg-yellow-100\",\r\n            \"text-yellow-800\"\r\n          );\r\n          // evitar duplicados\r\n          if (\r\n            !e.target.nextElementSibling ||\r\n            !e.target.nextElementSibling.classList.contains(\"editar-imagen\")\r\n          ) {\r\n            e.target.after(linkEditar);\r\n          }\r\n        }\r\n      }\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n})();\n\n//# sourceURL=webpack://nodejs_prueba/./src/js/cambiarEstado.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/cambiarEstado.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;