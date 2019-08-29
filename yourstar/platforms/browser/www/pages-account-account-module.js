(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./src/app/pages/account/account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");




var routes = [
    {
        path: '',
        component: _account__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
var AccountPageRoutingModule = /** @class */ (function () {
    function AccountPageRoutingModule() {
    }
    AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountPageRoutingModule);
    return AccountPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/account/account.html":
/*!********************************************!*\
  !*** ./src/app/pages/account/account.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n  <div *ngIf=\"username\" class=\"ion-padding-top ion-text-center\">\n    <img src=\"https://www.gravatar.com/avatar?d=mm&s=140\" alt=\"avatar\">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <ion-item (click)=\"updatePicture()\">Update Picture</ion-item>\n      <ion-item (click)=\"changeUsername()\">Change Username</ion-item>\n      <ion-item (click)=\"changePassword()\">Change Password</ion-item>\n      <ion-item (click)=\"support()\">Support</ion-item>\n      <ion-item (click)=\"logout()\">Logout</ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
            ],
            declarations: [
                _account__WEBPACK_IMPORTED_MODULE_4__["AccountPage"],
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/pages/account/account.scss":
/*!********************************************!*\
  !*** ./src/app/pages/account/account.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 140px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/account/account.ts":
/*!******************************************!*\
  !*** ./src/app/pages/account/account.ts ***!
  \******************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");





var AccountPage = /** @class */ (function () {
    function AccountPage(alertCtrl, router, userData) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Username',
                            buttons: [
                                'Cancel',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.userData.setUsername(data.username);
                                        _this.getUsername();
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'username',
                                    value: this.username,
                                    placeholder: 'username'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.router.navigateByUrl('/login');
    };
    AccountPage.prototype.support = function () {
        this.router.navigateByUrl('/support');
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-account',
            template: __webpack_require__(/*! ./account.html */ "./src/app/pages/account/account.html"),
            styles: [__webpack_require__(/*! ./account.scss */ "./src/app/pages/account/account.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module.js.map