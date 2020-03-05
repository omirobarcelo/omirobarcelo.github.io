(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-management-lazy-routines"],{

/***/ "../../libs/feature/lazy/routines/src/index.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: RoutinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_routines_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/routines.module */ "../../libs/feature/lazy/routines/src/lib/routines.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutinesModule", function() { return _lib_routines_module__WEBPACK_IMPORTED_MODULE_1__["RoutinesModule"]; });





/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvbGF6eS9yb3V0aW5lcy9zcmMvbGliL2NhcmQtcm91dGluZS1leGVyY2lzZS9jYXJkLXJvdXRpbmUtZXhlcmNpc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CardRoutineExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRoutineExerciseComponent", function() { return CardRoutineExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CardRoutineExerciseComponent = class CardRoutineExerciseComponent {
    constructor() { }
    get imgSrc() {
        const catLetter = this.exercise.category.id.slice(-1);
        const exNum = this.exercise.id.slice(-1);
        return `https://raw.githubusercontent.com/omirobarcelo/team-management/initial-test/assets/ex${catLetter}${exNum}.png`;
    }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CardRoutineExerciseComponent.prototype, "exercise", void 0);
CardRoutineExerciseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snk-card-routine-exercise',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-routine-exercise.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-routine-exercise.component.scss */ "../../libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CardRoutineExerciseComponent);



/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.scss":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvbGF6eS9yb3V0aW5lcy9zcmMvbGliL2xpc3Qtcm91dGluZS9saXN0LXJvdXRpbmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ListRoutineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutineComponent", function() { return ListRoutineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @team-management/utils/http */ "../../libs/utils/http/src/index.ts");



let ListRoutineComponent = class ListRoutineComponent {
    constructor(_routineReqService) {
        this._routineReqService = _routineReqService;
    }
    ngOnInit() {
        this.routines$ = this._routineReqService.getAllRoutines();
    }
    newRoutine() {
        this._routineReqService.addRoutine({ name: 'New routine', exercises: [] }).subscribe(routine => {
            this.routines$ = this._routineReqService.getAllRoutines();
            this.selectedRoutine = routine;
        });
    }
    log(arg) {
        console.log(arg);
    }
};
ListRoutineComponent.ctorParameters = () => [
    { type: _team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__["RoutineReqService"] }
];
ListRoutineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snk-list-routine',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-routine.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-routine.component.scss */ "../../libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__["RoutineReqService"]])
], ListRoutineComponent);



/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.scss":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvbGF6eS9yb3V0aW5lcy9zcmMvbGliL3ByaW50LXJvdXRpbmUvcHJpbnQtcm91dGluZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PrintRoutineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintRoutineComponent", function() { return PrintRoutineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_management_utils_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @team-management/utils/http */ "../../libs/utils/http/src/index.ts");




let PrintRoutineComponent = class PrintRoutineComponent {
    constructor(_routineReqService, _route) {
        this._routineReqService = _routineReqService;
        this._route = _route;
    }
    ngOnInit() {
        const routineId = this._route.snapshot.paramMap.get('routineId');
        this.routine$ = this._routineReqService.getRoutine(routineId);
    }
    getImgSrc(exercise) {
        const catLetter = exercise.category.id.slice(-1);
        const exNum = exercise.id.slice(-1);
        return `https://raw.githubusercontent.com/omirobarcelo/team-management/initial-test/assets/ex${catLetter}${exNum}.png`;
    }
};
PrintRoutineComponent.ctorParameters = () => [
    { type: _team_management_utils_http__WEBPACK_IMPORTED_MODULE_3__["RoutineReqService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PrintRoutineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snk-print-routine',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./print-routine.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./print-routine.component.scss */ "../../libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_management_utils_http__WEBPACK_IMPORTED_MODULE_3__["RoutineReqService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], PrintRoutineComponent);



/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/routines.module.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/routines.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: RoutinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutinesModule", function() { return RoutinesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input-number.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/menu */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _card_routine_exercise_card_routine_exercise_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card-routine-exercise/card-routine-exercise.component */ "../../libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.ts");
/* harmony import */ var _list_routine_list_routine_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-routine/list-routine.component */ "../../libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.ts");
/* harmony import */ var _print_routine_print_routine_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./print-routine/print-routine.component */ "../../libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.ts");
/* harmony import */ var _update_routine_update_routine_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-routine/update-routine.component */ "../../libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.ts");

















let RoutinesModule = class RoutinesModule {
};
RoutinesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', component: _list_routine_list_routine_component__WEBPACK_IMPORTED_MODULE_14__["ListRoutineComponent"] },
                { path: ':routineId/print', component: _print_routine_print_routine_component__WEBPACK_IMPORTED_MODULE_15__["PrintRoutineComponent"] }
            ])
        ],
        declarations: [_list_routine_list_routine_component__WEBPACK_IMPORTED_MODULE_14__["ListRoutineComponent"], _update_routine_update_routine_component__WEBPACK_IMPORTED_MODULE_16__["UpdateRoutineComponent"], _card_routine_exercise_card_routine_exercise_component__WEBPACK_IMPORTED_MODULE_13__["CardRoutineExerciseComponent"], _print_routine_print_routine_component__WEBPACK_IMPORTED_MODULE_15__["PrintRoutineComponent"]]
    })
], RoutinesModule);



/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.scss":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvbGF6eS9yb3V0aW5lcy9zcmMvbGliL3VwZGF0ZS1yb3V0aW5lL3VwZGF0ZS1yb3V0aW5lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../../libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: UpdateRoutineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRoutineComponent", function() { return UpdateRoutineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @team-management/utils/http */ "../../libs/utils/http/src/index.ts");



let UpdateRoutineComponent = class UpdateRoutineComponent {
    constructor(_routineReqService, _exReqService) {
        this._routineReqService = _routineReqService;
        this._exReqService = _exReqService;
        this.exerciseComparator = (ex1, ex2) => (ex1 && ex2 ? ex1.id === ex2.id : ex1 === ex2);
    }
    ngOnInit() {
        this.name = this.routine.name;
        this.routineExercises = [...this.routine.exercises];
        this._exReqService.getAllExercises().subscribe(exercises => (this.exercises = exercises));
    }
    ngOnChanges() {
        this.name = this.routine.name;
        this.routineExercises = [...this.routine.exercises];
    }
    addExercise(ex) {
        if (ex) {
            this.routineExercises.push(Object.assign({}, ex));
        }
    }
    save() {
        this._routineReqService
            .updateRoutine(Object.assign(Object.assign({}, this.routine), { name: this.name, exercises: this.routineExercises }))
            .subscribe();
    }
    log(arg) {
        console.log(arg);
    }
};
UpdateRoutineComponent.ctorParameters = () => [
    { type: _team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__["RoutineReqService"] },
    { type: _team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__["ExerciseReqService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UpdateRoutineComponent.prototype, "routine", void 0);
UpdateRoutineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snk-update-routine',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-routine.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-routine.component.scss */ "../../libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__["RoutineReqService"], _team_management_utils_http__WEBPACK_IMPORTED_MODULE_2__["ExerciseReqService"]])
], UpdateRoutineComponent);



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/node_modules/raw-loader/dist/cjs.js!C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/card-routine-exercise/card-routine-exercise.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzHoverable [nzActions]=\"[actionRepetions, actionTimes, actionWeight]\" style=\"width: 60%;\">\n  <img width=\"160\" alt=\"Exercise Image\" [src]=\"imgSrc\" />\n  <div style=\"display: inline-block; margin-left: 1rem;\">\n    <p><b>Exercise</b> {{ exercise.name }}</p>\n    <p><i>Muscles</i> {{ exercise.muscles }}</p>\n  </div>\n</nz-card>\n\n<ng-template #actionRepetions>\n  <span style=\"margin-right: 0.25rem;\">Repetitions</span>\n  <nz-input-number [(ngModel)]=\"exercise.repetitions\" [nzMin]=\"1\"></nz-input-number>\n</ng-template>\n<ng-template #actionTimes>\n  <span style=\"margin-right: 0.25rem;\">Times</span>\n  <nz-input-number [(ngModel)]=\"exercise.times\" [nzMin]=\"1\"></nz-input-number>\n</ng-template>\n<ng-template #actionWeight>\n  <span style=\"margin-right: 0.25rem;\">Kg</span>\n  <nz-input-number [(ngModel)]=\"exercise.weight\" [nzMin]=\"1\"></nz-input-number>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.html":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/node_modules/raw-loader/dist/cjs.js!C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/list-routine/list-routine.component.html ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout style=\"height: 100%;\">\n  <nz-sider nzCollapsible nzBreakpoint=\"md\" [nzCollapsedWidth]=\"0\">\n    <ul nz-menu nzTheme=\"dark\" nzMode=\"inline\">\n      <li\n        *ngFor=\"let routine of routines$ | async\"\n        nz-menu-item\n        [nzSelected]=\"routine.id === selectedRoutine?.id\"\n        (click)=\"selectedRoutine = routine\"\n      >\n        <span>{{ routine.name }}</span>\n      </li>\n      <li nz-menu-divider></li>\n      <li nz-menu-item (click)=\"newRoutine()\">\n        <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i><span>New routine</span>\n      </li>\n    </ul>\n  </nz-sider>\n  <nz-content style=\"padding: 1rem;\">\n    <!-- <div *ngFor=\"let ex of exercises$ | async\" style=\"margin-bottom: 0.5rem;\">\n      <span>something</span>\n    </div> -->\n    <snk-update-routine *ngIf=\"selectedRoutine\" [routine]=\"selectedRoutine\"></snk-update-routine>\n  </nz-content>\n</nz-layout>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.html":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/node_modules/raw-loader/dist/cjs.js!C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/print-routine/print-routine.component.html ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"routine$ | async as routine\" style=\"width: 18cm;\">\n  <h2 nz-title style=\"margin-bottom: 0.75rem;\">{{ routine.name }}</h2>\n\n  <div *ngFor=\"let ex of routine.exercises\" style=\"margin-bottom: 0.5rem;\">\n    <nz-card nzHoverable [nzActions]=\"[actionRepetions, actionTimes, actionWeight]\" style=\"width: 60%;\">\n      <img width=\"160\" alt=\"Exercise Image\" [src]=\"getImgSrc(ex)\" />\n      <div style=\"display: inline-block; margin-left: 1rem;\">\n        <p><b>Exercise</b> {{ ex.name }}</p>\n        <p><i>Muscles</i> {{ ex.muscles }}</p>\n      </div>\n    </nz-card>\n\n    <ng-template #actionRepetions>\n      <span>Repetitions: {{ ex.repetitions }}</span>\n    </ng-template>\n    <ng-template #actionTimes>\n      <span>Times: {{ ex.times }}</span>\n    </ng-template>\n    <ng-template #actionWeight>\n      <span>Kg: {{ ex.weight }}</span>\n    </ng-template>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/team-management/node_modules/raw-loader/dist/cjs.js!C:/Users/Dev/Documents/team-management/libs/feature/lazy/routines/src/lib/update-routine/update-routine.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input nz-input placeholder=\"Name\" [(ngModel)]=\"name\" style=\"margin-bottom: 0.5rem;\" />\n\n<div *ngFor=\"let ex of routineExercises\" style=\"margin-bottom: 0.5rem;\">\n  <snk-card-routine-exercise [exercise]=\"ex\"></snk-card-routine-exercise>\n</div>\n<nz-select\n  [ngModel]=\"selectedExercise\"\n  [compareWith]=\"exerciseComparator\"\n  (ngModelChange)=\"addExercise($event)\"\n  nzShowSearch\n  nzAllowClear\n  nzPlaceHolder=\"Select exercise\"\n  style=\"width: 300px; margin-bottom: 0.5rem;\"\n>\n  <nz-option *ngFor=\"let ex of exercises\" [nzValue]=\"ex\" [nzLabel]=\"ex.name\"></nz-option>\n</nz-select>\n\n<div>\n  <button nz-button nzType=\"primary\" (click)=\"save()\" style=\"margin-right: 0.25rem;\">\n    <i nz-icon nzType=\"save\" nzTheme=\"outline\"></i>Save\n  </button>\n  <button nz-button nzType=\"primary\" [routerLink]=\"[routine.id, 'print']\">\n    <i nz-icon nzType=\"printer\" nzTheme=\"outline\"></i>Print version\n  </button>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=team-management-lazy-routines-es2015.js.map