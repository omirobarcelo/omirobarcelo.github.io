(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "../../libs/utils/http/src/index.ts":
/*!***************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/index.ts ***!
  \***************************************************************************/
/*! exports provided: HttpModule, ExerciseCategoryReqService, ExerciseReqService, RoutineReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_http_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/http.module */ "../../libs/utils/http/src/lib/http.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return _lib_http_module__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]; });

/* harmony import */ var _lib_root_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/root-services */ "../../libs/utils/http/src/lib/root-services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExerciseCategoryReqService", function() { return _lib_root_services__WEBPACK_IMPORTED_MODULE_2__["ExerciseCategoryReqService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExerciseReqService", function() { return _lib_root_services__WEBPACK_IMPORTED_MODULE_2__["ExerciseReqService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutineReqService", function() { return _lib_root_services__WEBPACK_IMPORTED_MODULE_2__["RoutineReqService"]; });






/***/ }),

/***/ "../../libs/utils/http/src/lib/http.module.ts":
/*!*************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/http.module.ts ***!
  \*************************************************************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let HttpModule = class HttpModule {
};
HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })
], HttpModule);



/***/ }),

/***/ "../../libs/utils/http/src/lib/root-services/exercise-category-req.service.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/exercise-category-req.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ExerciseCategoryReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseCategoryReqService", function() { return ExerciseCategoryReqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let ExerciseCategoryReqService = class ExerciseCategoryReqService {
    constructor() {
        this._categories = [
            {
                id: 'catA',
                name: 'Cat A'
            },
            {
                id: 'catB',
                name: 'Cat B'
            },
            {
                id: 'catC',
                name: 'Cat C'
            }
        ];
    }
    getAllCategories() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this._categories));
    }
};
ExerciseCategoryReqService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExerciseCategoryReqService);



/***/ }),

/***/ "../../libs/utils/http/src/lib/root-services/exercise-req.service.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/exercise-req.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: ExerciseReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseReqService", function() { return ExerciseReqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let ExerciseReqService = class ExerciseReqService {
    constructor() {
        this._exercises = [
            {
                id: 'exA1',
                name: 'Ex A1',
                muscles: ['m1', 'm2'],
                category: {
                    id: 'catA',
                    name: 'Cat A'
                }
            },
            {
                id: 'exA2',
                name: 'Ex A2',
                muscles: ['m1', 'm2', 'm3'],
                category: {
                    id: 'catA',
                    name: 'Cat A'
                }
            },
            {
                id: 'exA3',
                name: 'Ex A3',
                muscles: ['m1', 'm2'],
                category: {
                    id: 'catA',
                    name: 'Cat A'
                }
            },
            {
                id: 'exB1',
                name: 'Ex B1',
                muscles: ['m1'],
                category: {
                    id: 'catB',
                    name: 'Cat B'
                }
            },
            {
                id: 'exB2',
                name: 'Ex B2',
                muscles: ['m1', 'm2'],
                category: {
                    id: 'catB',
                    name: 'Cat B'
                }
            },
            {
                id: 'exB3',
                name: 'Ex B3',
                muscles: ['m1', 'm2'],
                category: {
                    id: 'catB',
                    name: 'Cat B'
                }
            },
            {
                id: 'exC1',
                name: 'Ex C1',
                muscles: ['m1', 'm2', 'm3'],
                category: {
                    id: 'catC',
                    name: 'Cat C'
                }
            },
            {
                id: 'exC2',
                name: 'Ex C2',
                muscles: ['m1', 'm2'],
                category: {
                    id: 'catC',
                    name: 'Cat C'
                }
            },
            {
                id: 'exC3',
                name: 'Ex C3',
                muscles: ['m1'],
                category: {
                    id: 'catC',
                    name: 'Cat C'
                }
            }
        ];
    }
    getAllExercises(catId) {
        const exercises = catId ? this._exercises.filter(ex => ex.category.id === catId) : this._exercises;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(exercises));
    }
};
ExerciseReqService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExerciseReqService);



/***/ }),

/***/ "../../libs/utils/http/src/lib/root-services/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExerciseCategoryReqService, ExerciseReqService, RoutineReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exercise_category_req_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-category-req.service */ "../../libs/utils/http/src/lib/root-services/exercise-category-req.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExerciseCategoryReqService", function() { return _exercise_category_req_service__WEBPACK_IMPORTED_MODULE_1__["ExerciseCategoryReqService"]; });

/* harmony import */ var _exercise_req_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-req.service */ "../../libs/utils/http/src/lib/root-services/exercise-req.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExerciseReqService", function() { return _exercise_req_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseReqService"]; });

/* harmony import */ var _routine_req_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routine-req.service */ "../../libs/utils/http/src/lib/root-services/routine-req.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutineReqService", function() { return _routine_req_service__WEBPACK_IMPORTED_MODULE_3__["RoutineReqService"]; });







/***/ }),

/***/ "../../libs/utils/http/src/lib/root-services/routine-req.service.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/utils/http/src/lib/root-services/routine-req.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RoutineReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineReqService", function() { return RoutineReqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let RoutineReqService = class RoutineReqService {
    constructor() {
        this._routines = [];
    }
    getAllRoutines() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this._routines));
    }
    getRoutine(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this._routines.find(r => r.id === id)));
    }
    addRoutine(routine) {
        const newRoutine = Object.assign(Object.assign({}, routine), { id: `r${Math.floor(Math.random() * 100)}` });
        this._routines.push(newRoutine);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(newRoutine));
    }
    updateRoutine(routine) {
        const idx = this._routines.findIndex(r => r.id === routine.id);
        this._routines.splice(idx, 1, routine);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(routine));
    }
    deleteRoutine(id) {
        const idx = this._routines.findIndex(r => r.id === id);
        this._routines.splice(idx, 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(750).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(null));
    }
};
RoutineReqService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RoutineReqService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map