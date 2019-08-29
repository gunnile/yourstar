(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: '../event-list/event-list.module#EventListModule'
                    },
                    {
                        path: 'event-details/:eventId',
                        loadChildren: '../event-detail/event-detail.module#EventDetailModule'
                    }
                ]
            },
            {
                path: 'stars',
                children: [
                    {
                        path: '',
                        loadChildren: '../star-list/star-list.module#StarListModule'
                    },
                    {
                        path: 'star-details/:starId',
                        loadChildren: '../star-detail/star-detail.module#StarDetailModule'
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/events',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.html":
/*!************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"events\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Events</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"stars\">\n      <ion-icon name=\"contacts\"></ion-icon>\n      <ion-label>Stars</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _star_list_star_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../star-list/star-list.module */ "./src/app/pages/star-list/star-list.module.ts");
/* harmony import */ var _event_list_event_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-list/event-list.module */ "./src/app/pages/event-list/event-list.module.ts");









var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _star_list_star_list_module__WEBPACK_IMPORTED_MODULE_7__["StarListModule"],
                _event_list_event_list_module__WEBPACK_IMPORTED_MODULE_8__["EventListModule"],
                _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tabs-page.html */ "./src/app/pages/tabs-page/tabs-page.html")
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module.js.map