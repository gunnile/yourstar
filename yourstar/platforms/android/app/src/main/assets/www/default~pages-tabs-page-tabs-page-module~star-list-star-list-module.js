(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-tabs-page-tabs-page-module~star-list-star-list-module"],{

/***/ "./src/app/pages/star-list/star-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/star-list/star-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StarListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListPageRoutingModule", function() { return StarListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _star_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star-list */ "./src/app/pages/star-list/star-list.ts");




var routes = [
    {
        path: '',
        component: _star_list__WEBPACK_IMPORTED_MODULE_3__["StarListPage"]
    }
];
var StarListPageRoutingModule = /** @class */ (function () {
    function StarListPageRoutingModule() {
    }
    StarListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StarListPageRoutingModule);
    return StarListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/star-list/star-list.html":
/*!************************************************!*\
  !*** ./src/app/pages/star-list/star-list.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Stars</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n  <ion-list>\n    <ion-grid fixed>\n      <ion-row class=\"ion-align-items-stretch\">\n        <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let star of stars\">\n          <ion-card class=\"star-card\" routerLink=\"/app/tabs/stars/star-details/{{star.id}}\">\n            <ion-card-header>\n              <ion-item detail=\"false\" lines=\"none\">\n                <ion-avatar slot=\"start\">\n                  <img [src]=\"star.image\" alt=\"Star profile pic\">\n                </ion-avatar>\n                {{star.name}}\n              </ion-item>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <ion-item routerLink=\"/app/tabs/stars/{star.id}}\">\n                  <h3>{{star.description}}</h3>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row class=\"ion-no-padding ion-justify-content-center\">\n              <ion-col size=\"4\" class=\"ion-text-left\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"goToEventTwitter(star)\">\n                  <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\n                  Tweet\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"openEventShare(star)\">\n                  <ion-icon name=\"share-alt\" slot=\"start\"></ion-icon>\n                  Share\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\" lass=\"ion-text-right\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"openContact(star)\">\n                  <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\n                  Contact\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/star-list/star-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/star-list/star-list.module.ts ***!
  \*****************************************************/
/*! exports provided: StarListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListModule", function() { return StarListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _star_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star-list */ "./src/app/pages/star-list/star-list.ts");
/* harmony import */ var _star_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star-list-routing.module */ "./src/app/pages/star-list/star-list-routing.module.ts");






var StarListModule = /** @class */ (function () {
    function StarListModule() {
    }
    StarListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _star_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarListPageRoutingModule"]
            ],
            declarations: [_star_list__WEBPACK_IMPORTED_MODULE_4__["StarListPage"]],
        })
    ], StarListModule);
    return StarListModule;
}());



/***/ }),

/***/ "./src/app/pages/star-list/star-list.scss":
/*!************************************************!*\
  !*** ./src/app/pages/star-list/star-list.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll {\n  background: #ededed; }\n\n.star-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.star-card ion-card-header {\n  padding: 0; }\n\n.star-card ion-card-header .item {\n  padding: 4px 16px; }\n\n.star-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9zdGFyLWxpc3Qvc3Rhci1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFFZCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFyLWxpc3Qvc3Rhci1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuLnN0YXItY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0YXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3Rhci1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaXRlbSB7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4uc3Rhci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcblxuICBwYWRkaW5nOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/star-list/star-list.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/star-list/star-list.ts ***!
  \**********************************************/
/*! exports provided: StarListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListPage", function() { return StarListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_star_list_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/star-list-data */ "./src/app/providers/star-list-data.ts");






var StarListPage = /** @class */ (function () {
    function StarListPage(actionSheetCtrl, starListData, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.starListData = starListData;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.stars = [];
    }
    StarListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.starListData.getStarsData().subscribe(function (stars) {
            _this.stars = stars;
        });
    };
    StarListPage.prototype.goToEventTwitter = function (star) {
        this.inAppBrowser.create("https://twitter.com/" + star.twitter, '_blank');
    };
    StarListPage.prototype.openEventShare = function (star) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Share ' + star.name,
                            buttons: [
                                {
                                    text: 'Copy Link',
                                    handler: function () {
                                        console.log('Copy link clicked on https://twitter.com/' + star.twitter);
                                        if (window['cordova'] &&
                                            window['cordova'].plugins.clipboard) {
                                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + star.twitter);
                                        }
                                    }
                                },
                                {
                                    text: 'Share via ...'
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StarListPage.prototype.openContact = function (star) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mode, actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mode = 'ios';
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Contact ' + star.name,
                                buttons: [
                                    {
                                        text: "Email ( " + star.email + " )",
                                        icon: mode !== 'ios' ? 'mail' : null,
                                        handler: function () {
                                            window.open('mailto:' + star.email);
                                        }
                                    },
                                    {
                                        text: "Call ( " + star.phone + " )",
                                        icon: mode !== 'ios' ? 'call' : null,
                                        handler: function () {
                                            window.open('tel:' + star.phone);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StarListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-star-list',
            template: __webpack_require__(/*! ./star-list.html */ "./src/app/pages/star-list/star-list.html"),
            styles: [__webpack_require__(/*! ./star-list.scss */ "./src/app/pages/star-list/star-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _providers_star_list_data__WEBPACK_IMPORTED_MODULE_5__["StarListData"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StarListPage);
    return StarListPage;
}());



/***/ }),

/***/ "./src/app/providers/star-list-data.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/star-list-data.ts ***!
  \*********************************************/
/*! exports provided: StarListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListData", function() { return StarListData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");






var StarListData = /** @class */ (function () {
    function StarListData(http, user) {
        this.http = http;
        this.user = user;
        this.url = 'http://127.0.0.1:8000/stars/'; // URL to web api
    }
    StarListData.prototype.load = function () {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            return this.http
                .get(this.url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
        }
    };
    StarListData.prototype.processData = function (data) {
        this.data = data;
        return this.data;
    };
    StarListData.prototype.getStarsData = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    };
    StarListData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
    ], StarListData);
    return StarListData;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-tabs-page-tabs-page-module~star-list-star-list-module.js.map