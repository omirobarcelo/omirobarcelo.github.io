function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "../../libs/utils/http/src/index.ts":
  /*!***************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/index.ts ***!
    \***************************************************************************/

  /*! exports provided: HttpModule, ExerciseCategoryReqService, ExerciseReqService, RoutineReqService */

  /***/
  function libsUtilsHttpSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_http_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/http.module */
    "../../libs/utils/http/src/lib/http.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpModule", function () {
      return _lib_http_module__WEBPACK_IMPORTED_MODULE_1__["HttpModule"];
    });
    /* harmony import */


    var _lib_root_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/root-services */
    "../../libs/utils/http/src/lib/root-services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExerciseCategoryReqService", function () {
      return _lib_root_services__WEBPACK_IMPORTED_MODULE_2__["ExerciseCategoryReqService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExerciseReqService", function () {
      return _lib_root_services__WEBPACK_IMPORTED_MODULE_2__["ExerciseReqService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutineReqService", function () {
      return _lib_root_services__WEBPACK_IMPORTED_MODULE_2__["RoutineReqService"];
    });
    /***/

  },

  /***/
  "../../libs/utils/http/src/lib/http.module.ts":
  /*!*************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/http.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: HttpModule */

  /***/
  function libsUtilsHttpSrcLibHttpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpModule", function () {
      return HttpModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HttpModule = function HttpModule() {
      _classCallCheck(this, HttpModule);
    };

    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], HttpModule);
    /***/
  },

  /***/
  "../../libs/utils/http/src/lib/root-services/exercise-category-req.service.ts":
  /*!*********************************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/exercise-category-req.service.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: ExerciseCategoryReqService */

  /***/
  function libsUtilsHttpSrcLibRootServicesExerciseCategoryReqServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExerciseCategoryReqService", function () {
      return ExerciseCategoryReqService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var ExerciseCategoryReqService =
    /*#__PURE__*/
    function () {
      function ExerciseCategoryReqService() {
        _classCallCheck(this, ExerciseCategoryReqService);

        this._categories = [{
          id: 'catA',
          name: 'Cat A'
        }, {
          id: 'catB',
          name: 'Cat B'
        }, {
          id: 'catC',
          name: 'Cat C'
        }];
      }

      _createClass(ExerciseCategoryReqService, [{
        key: "getAllCategories",
        value: function getAllCategories() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this._categories));
        }
      }]);

      return ExerciseCategoryReqService;
    }();

    ExerciseCategoryReqService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ExerciseCategoryReqService);
    /***/
  },

  /***/
  "../../libs/utils/http/src/lib/root-services/exercise-req.service.ts":
  /*!************************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/exercise-req.service.ts ***!
    \************************************************************************************************************/

  /*! exports provided: ExerciseReqService */

  /***/
  function libsUtilsHttpSrcLibRootServicesExerciseReqServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExerciseReqService", function () {
      return ExerciseReqService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var ExerciseReqService =
    /*#__PURE__*/
    function () {
      function ExerciseReqService() {
        _classCallCheck(this, ExerciseReqService);

        this._exercises = [{
          id: 'exA1',
          name: 'Ex A1',
          muscles: ['m1', 'm2'],
          category: {
            id: 'catA',
            name: 'Cat A'
          }
        }, {
          id: 'exA2',
          name: 'Ex A2',
          muscles: ['m1', 'm2', 'm3'],
          category: {
            id: 'catA',
            name: 'Cat A'
          }
        }, {
          id: 'exA3',
          name: 'Ex A3',
          muscles: ['m1', 'm2'],
          category: {
            id: 'catA',
            name: 'Cat A'
          }
        }, {
          id: 'exB1',
          name: 'Ex B1',
          muscles: ['m1'],
          category: {
            id: 'catB',
            name: 'Cat B'
          }
        }, {
          id: 'exB2',
          name: 'Ex B2',
          muscles: ['m1', 'm2'],
          category: {
            id: 'catB',
            name: 'Cat B'
          }
        }, {
          id: 'exB3',
          name: 'Ex B3',
          muscles: ['m1', 'm2'],
          category: {
            id: 'catB',
            name: 'Cat B'
          }
        }, {
          id: 'exC1',
          name: 'Ex C1',
          muscles: ['m1', 'm2', 'm3'],
          category: {
            id: 'catC',
            name: 'Cat C'
          }
        }, {
          id: 'exC2',
          name: 'Ex C2',
          muscles: ['m1', 'm2'],
          category: {
            id: 'catC',
            name: 'Cat C'
          }
        }, {
          id: 'exC3',
          name: 'Ex C3',
          muscles: ['m1'],
          category: {
            id: 'catC',
            name: 'Cat C'
          }
        }];
      }

      _createClass(ExerciseReqService, [{
        key: "getAllExercises",
        value: function getAllExercises(catId) {
          var exercises = catId ? this._exercises.filter(function (ex) {
            return ex.category.id === catId;
          }) : this._exercises;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(exercises));
        }
      }]);

      return ExerciseReqService;
    }();

    ExerciseReqService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ExerciseReqService);
    /***/
  },

  /***/
  "../../libs/utils/http/src/lib/root-services/index.ts":
  /*!*********************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/index.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ExerciseCategoryReqService, ExerciseReqService, RoutineReqService */

  /***/
  function libsUtilsHttpSrcLibRootServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exercise_category_req_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exercise-category-req.service */
    "../../libs/utils/http/src/lib/root-services/exercise-category-req.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExerciseCategoryReqService", function () {
      return _exercise_category_req_service__WEBPACK_IMPORTED_MODULE_1__["ExerciseCategoryReqService"];
    });
    /* harmony import */


    var _exercise_req_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exercise-req.service */
    "../../libs/utils/http/src/lib/root-services/exercise-req.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExerciseReqService", function () {
      return _exercise_req_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseReqService"];
    });
    /* harmony import */


    var _routine_req_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routine-req.service */
    "../../libs/utils/http/src/lib/root-services/routine-req.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutineReqService", function () {
      return _routine_req_service__WEBPACK_IMPORTED_MODULE_3__["RoutineReqService"];
    });
    /***/

  },

  /***/
  "../../libs/utils/http/src/lib/root-services/routine-req.service.ts":
  /*!***********************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/routine-req.service.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: RoutineReqService */

  /***/
  function libsUtilsHttpSrcLibRootServicesRoutineReqServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutineReqService", function () {
      return RoutineReqService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var RoutineReqService =
    /*#__PURE__*/
    function () {
      function RoutineReqService() {
        _classCallCheck(this, RoutineReqService);

        this._routines = [];
      }

      _createClass(RoutineReqService, [{
        key: "getAllRoutines",
        value: function getAllRoutines() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this._routines));
        }
      }, {
        key: "getRoutine",
        value: function getRoutine(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this._routines.find(function (r) {
            return r.id === id;
          })));
        }
      }, {
        key: "addRoutine",
        value: function addRoutine(routine) {
          var newRoutine = Object.assign(Object.assign({}, routine), {
            id: "r".concat(Math.floor(Math.random() * 100))
          });

          this._routines.push(newRoutine);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(newRoutine));
        }
      }, {
        key: "updateRoutine",
        value: function updateRoutine(routine) {
          var idx = this._routines.findIndex(function (r) {
            return r.id === routine.id;
          });

          this._routines.splice(idx, 1, routine);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(routine));
        }
      }, {
        key: "deleteRoutine",
        value: function deleteRoutine(id) {
          var idx = this._routines.findIndex(function (r) {
            return r.id === id;
          });

          this._routines.splice(idx, 1);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(null));
        }
      }]);

      return RoutineReqService;
    }();

    RoutineReqService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RoutineReqService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map