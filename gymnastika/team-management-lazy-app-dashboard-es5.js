function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-management-lazy-app-dashboard"], {
  /***/
  "../../libs/feature/lazy/app-dashboard/src/index.ts":
  /*!*******************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/app-dashboard/src/index.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AppDashboardModule */

  /***/
  function libsFeatureLazyAppDashboardSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_app_dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/app-dashboard.module */
    "../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppDashboardModule", function () {
      return _lib_app_dashboard_module__WEBPACK_IMPORTED_MODULE_1__["AppDashboardModule"];
    });
    /***/

  },

  /***/
  "../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard.module.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/app-dashboard/src/lib/app-dashboard.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: AppDashboardModule */

  /***/
  function libsFeatureLazyAppDashboardSrcLibAppDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDashboardModule", function () {
      return AppDashboardModule;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-dashboard/app-dashboard.component */
    "../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.ts");

    var AppDashboardModule = function AppDashboardModule() {
      _classCallCheck(this, AppDashboardModule);
    };

    AppDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        pathMatch: 'full',
        component: _app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AppDashboardComponent"]
      }])],
      declarations: [_app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AppDashboardComponent"]]
    })], AppDashboardModule);
    /***/
  },

  /***/
  "../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.scss":
  /*!*********************************************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.scss ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsFeatureLazyAppDashboardSrcLibAppDashboardAppDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvbGF6eS9hcHAtZGFzaGJvYXJkL3NyYy9saWIvYXBwLWRhc2hib2FyZC9hcHAtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: AppDashboardComponent */

  /***/
  function libsFeatureLazyAppDashboardSrcLibAppDashboardAppDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDashboardComponent", function () {
      return AppDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppDashboardComponent =
    /*#__PURE__*/
    function () {
      function AppDashboardComponent() {
        _classCallCheck(this, AppDashboardComponent);
      }

      _createClass(AppDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppDashboardComponent;
    }();

    AppDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'snk-app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-dashboard.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-dashboard.component.scss */
      "../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AppDashboardComponent);
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.html":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/Dev/Documents/team-management/node_modules/raw-loader/dist/cjs.js!C:/Users/Dev/Documents/team-management/libs/feature/lazy/app-dashboard/src/lib/app-dashboard/app-dashboard.component.html ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsFeatureLazyAppDashboardSrcLibAppDashboardAppDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Dashboard</h1>\n";
    /***/
  }
}]);
//# sourceMappingURL=team-management-lazy-app-dashboard-es5.js.map