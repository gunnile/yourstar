(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-detail-event-detail-module"],{

/***/ "./src/app/pages/event-detail/event-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EventDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageRoutingModule", function() { return EventDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-detail */ "./src/app/pages/event-detail/event-detail.ts");




var routes = [
    {
        path: '',
        component: _event_detail__WEBPACK_IMPORTED_MODULE_3__["EventDetailPage"]
    }
];
var EventDetailPageRoutingModule = /** @class */ (function () {
    function EventDetailPageRoutingModule() {
    }
    EventDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EventDetailPageRoutingModule);
    return EventDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.html":
/*!******************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/events\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{event?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding event-detail\">\n  <div *ngIf=\"event\" class=\"ion-text-center\">\n    <img [src]=\"event.image\" [alt]=\"event.title\">\n    <br>\n\n    <ion-button fill=\"clear\" size=\"small\" color=\"twitter\">\n      <ion-icon name=\"logo-twitter\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"github\">\n      <ion-icon name=\"logo-github\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"instagram\">\n      <ion-icon name=\"logo-instagram\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <p>{{event?.description}}</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: EventDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailModule", function() { return EventDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _event_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-detail */ "./src/app/pages/event-detail/event-detail.ts");
/* harmony import */ var _event_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-detail-routing.module */ "./src/app/pages/event-detail/event-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var EventDetailModule = /** @class */ (function () {
    function EventDetailModule() {
    }
    EventDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _event_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["EventDetailPageRoutingModule"]
            ],
            declarations: [
                _event_detail__WEBPACK_IMPORTED_MODULE_3__["EventDetailPage"],
            ]
        })
    ], EventDetailModule);
    return EventDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-detail img {\n  max-width: 140px;\n  border-radius: 50%; }\n\n.event-detail p {\n  color: #60646b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWRldGFpbCBpbWcge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ldmVudC1kZXRhaWwgcCB7XG4gIGNvbG9yOiAjNjA2NDZiO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.ts ***!
  \****************************************************/
/*! exports provided: EventDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPage", function() { return EventDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_event_detail_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/event-detail-data */ "./src/app/providers/event-detail-data.ts");




var EventDetailPage = /** @class */ (function () {
    function EventDetailPage(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    EventDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var eventId = this.route.snapshot.paramMap.get('eventId');
        this.dataProvider.load(eventId).subscribe(function (data) {
            _this.event = data;
        });
    };
    EventDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-event-detail',
            template: __webpack_require__(/*! ./event-detail.html */ "./src/app/pages/event-detail/event-detail.html"),
            styles: [__webpack_require__(/*! ./event-detail.scss */ "./src/app/pages/event-detail/event-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_event_detail_data__WEBPACK_IMPORTED_MODULE_3__["EventDetailData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventDetailPage);
    return EventDetailPage;
}());



/***/ }),

/***/ "./src/app/providers/event-detail-data.ts":
/*!************************************************!*\
  !*** ./src/app/providers/event-detail-data.ts ***!
  \************************************************/
/*! exports provided: EventDetailData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailData", function() { return EventDetailData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");





var EventDetailData = /** @class */ (function () {
    function EventDetailData(http, user) {
        this.http = http;
        this.user = user;
        this.url = '';
    }
    EventDetailData.prototype.load = function (eventId) {
        this.url = 'http://127.0.0.1:8000/events/';
        this.url = this.url + eventId;
        alert(this.url);
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            this.data = this.http.get(this.url);
            return this.data;
        }
    };
    EventDetailData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
    ], EventDetailData);
    return EventDetailData;
}());



/***/ })

}]);
//# sourceMappingURL=event-detail-event-detail-module.js.map