(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["star-detail-star-detail-module"],{

/***/ "./src/app/pages/star-detail/star-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StarDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailPageRoutingModule", function() { return StarDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _star_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star-detail */ "./src/app/pages/star-detail/star-detail.ts");




var routes = [
    {
        path: '',
        component: _star_detail__WEBPACK_IMPORTED_MODULE_3__["StarDetailPage"]
    }
];
var StarDetailPageRoutingModule = /** @class */ (function () {
    function StarDetailPageRoutingModule() {
    }
    StarDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StarDetailPageRoutingModule);
    return StarDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.html":
/*!****************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/stars\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{star?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"star\">\n  <div class=\"star-detail-header\">\n    <img [src]=\"star.image\" [alt]=\"star.name\">\n  </div>\n  <div class=\"star-detail-info\">\n    <h4 class=\"ion-padding-start\">{{star?.name}}</h4>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n      {{star?.description}}\n    </p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: StarDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailModule", function() { return StarDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _star_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star-detail */ "./src/app/pages/star-detail/star-detail.ts");
/* harmony import */ var _star_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star-detail-routing.module */ "./src/app/pages/star-detail/star-detail-routing.module.ts");







var StarDetailModule = /** @class */ (function () {
    function StarDetailModule() {
    }
    StarDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _star_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["StarDetailPageRoutingModule"]
            ],
            declarations: [
                _star_detail__WEBPACK_IMPORTED_MODULE_5__["StarDetailPage"],
            ]
        })
    ], StarDetailModule);
    return StarDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star-detail-header {\n  background-color: var(--ion-color-dark);\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center; }\n\n.star-detail-header img {\n  max-height: 100%; }\n\n.star-detail-info p {\n  color: var(--ion-color-dark);\n  text-align: left; }\n\n.star-detail-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px; }\n\n.ios .star-detail-info {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9zdGFyLWRldGFpbC9zdGFyLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFyLWRldGFpbC9zdGFyLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXItZGV0YWlsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGFyLWRldGFpbC1oZWFkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnN0YXItZGV0YWlsLWluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdGFyLWRldGFpbC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi5pb3MgLnN0YXItZGV0YWlsLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.ts ***!
  \**************************************************/
/*! exports provided: StarDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailPage", function() { return StarDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_star_detail_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/star-detail-data */ "./src/app/providers/star-detail-data.ts");




var StarDetailPage = /** @class */ (function () {
    function StarDetailPage(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    StarDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var starId = this.route.snapshot.paramMap.get('starId');
        this.dataProvider.load(starId).subscribe(function (star) {
            _this.star = star;
        });
    };
    StarDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-star-detail',
            template: __webpack_require__(/*! ./star-detail.html */ "./src/app/pages/star-detail/star-detail.html"),
            styles: [__webpack_require__(/*! ./star-detail.scss */ "./src/app/pages/star-detail/star-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_star_detail_data__WEBPACK_IMPORTED_MODULE_3__["StarDetailData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StarDetailPage);
    return StarDetailPage;
}());



/***/ }),

/***/ "./src/app/providers/star-detail-data.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/star-detail-data.ts ***!
  \***********************************************/
/*! exports provided: StarDetailData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailData", function() { return StarDetailData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");





var StarDetailData = /** @class */ (function () {
    function StarDetailData(http, user) {
        this.http = http;
        this.user = user;
        this.url = '';
    }
    StarDetailData.prototype.load = function (starId) {
        this.url = 'http://127.0.0.1:8000/stars/';
        this.url = this.url + starId;
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            this.data = this.http.get(this.url);
            return this.data;
        }
    };
    StarDetailData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
    ], StarDetailData);
    return StarDetailData;
}());



/***/ })

}]);
//# sourceMappingURL=star-detail-star-detail-module.js.map